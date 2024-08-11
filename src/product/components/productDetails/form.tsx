'use client';

import { ProductDetailsAPIResponseType, ProductType } from 'core/type';
import React, { FC, FormEventHandler, useState } from 'react';
import {
  Control,
  FieldErrors,
  useForm,
  UseFormRegister
} from 'react-hook-form';
import { z } from 'zod';
import Schema, { productUpdateSchema } from './schema';
import { uploadImage } from '@/lib/imgUtils';
import { isArrayNotEmpty } from '@/lib/utils';

export type ProductUpdateInputForm = z.infer<typeof productUpdateSchema>;

interface productFormHandleProps {
  register: UseFormRegister<ProductUpdateInputForm>;
  errors: FieldErrors<ProductUpdateInputForm>;
  submit: FormEventHandler<HTMLFormElement>;
  disabled: boolean;
  isDirty: boolean;
  isValid: boolean;
  control: Control<ProductUpdateInputForm>;
  submitting: boolean;
  isVariant: boolean;
  isSellable: boolean;
  upload: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  imageLoading: boolean;
  medias: string[];
  removeImage: (index: number) => void;
}

const populateInitialData = (initial: Partial<ProductType> = {}) => ({
  name: initial.name ?? '',
  brand: initial.brand ?? '',
  category: initial.category ?? '',
  shortDescription: initial?.shortDescription ?? '',
  description: initial?.description ?? '',
  isVariant: initial?.isVariant ?? false,
  parentId: initial?.parentId ?? '',
  isSellable: initial?.isSellable ?? false,
  isCodAvailable: initial?.isCodAvailable ?? false,
  medias: initial?.medias ?? []
});

const ProductForm: (
  initial: Partial<ProductType>,
  onSubmit: (
    formData: ProductUpdateInputForm
  ) => Promise<ProductDetailsAPIResponseType>
) => productFormHandleProps = (initial, onSubmit) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isLoading, isValid, isDirty },
    watch,
    getValues,
    setValue
  } = useForm<ProductUpdateInputForm>({
    defaultValues: populateInitialData(initial),
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: Schema
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [imageLoading, setImgLoading] = useState<boolean>(false);

  const submit = async (data: ProductUpdateInputForm) => {
    setSubmitting(true);
    const response = await onSubmit(data);
    setSubmitting(false);
    if (response?.product?._id) {
      // TODO: Success message
    }
  };

  const upload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setImgLoading(true);
      const uploadResponse = await uploadImage(event);
      setImgLoading(false);
      if (isArrayNotEmpty(uploadResponse)) {
        const images = getValues('medias') || [];
        setValue('medias', [
          ...images,
          ...uploadResponse.map(
            (response: { image: string }) => response?.image
          )
        ]);
      }
    } catch (error) {
      //   // TODO: Add toast later
      console.error('Please select a valid image file.');
    }
  };

  const removeImage = (index: number) => {
    const images = getValues('medias') || [];
    setValue('medias', [...images.filter((_, i) => index !== i)]);
  };

  return {
    register,
    errors,
    isValid,
    isDirty,
    control,
    upload,
    imageLoading,
    disabled: isLoading,
    submit: handleSubmit(submit),
    submitting,
    isVariant: watch('isVariant'),
    isSellable: watch('isSellable'),
    medias: watch('medias') || [],
    removeImage
  };
};

interface FormProps {
  onSubmit: (
    formData: ProductUpdateInputForm
  ) => Promise<ProductDetailsAPIResponseType>;
  children: (props: productFormHandleProps) => React.ReactNode;
  initial: ProductType;
}

const Form: FC<FormProps> = ({ children, initial, onSubmit }) => {
  const props = ProductForm(initial, onSubmit);
  return <form onSubmit={props.submit}>{children(props)}</form>;
};

export default Form;
