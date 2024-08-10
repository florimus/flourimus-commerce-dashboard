'use client';

import { ProductType } from 'core/type';
import React, { FC, FormEventHandler, useState } from 'react';
import {
  Control,
  FieldErrors,
  useForm,
  UseFormRegister
} from 'react-hook-form';
import { z } from 'zod';
import Schema, { productCreateSchema } from './schema';
import { uploadImage } from '@/lib/imgUtils';
import { isArrayNotEmpty } from '@/lib/utils';

export type ProductCreateInputForm = z.infer<typeof productCreateSchema>;

interface productFormHandleProps {
  register: UseFormRegister<ProductCreateInputForm>;
  errors: FieldErrors<ProductCreateInputForm>;
  submit: FormEventHandler<HTMLFormElement>;
  disabled: boolean;
  isDirty: boolean;
  isValid: boolean;
  control: Control<ProductCreateInputForm>;
  submitting: boolean;
  isVariant: boolean;
  isSellable: boolean;
  upload: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  imageLoading: boolean;
  medias: string[];
  removeImage: (index: number) => void;
}

const productForm: (
  initial: Partial<ProductType>,
  onSubmit: () => Promise<void>
) => productFormHandleProps = (initial, onSubmit) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isLoading, isValid, isDirty },
    watch,
    getValues,
    setValue
  } = useForm<ProductCreateInputForm>({
    defaultValues: initial,
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: Schema
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [imageLoading, setImgLoading] = useState<boolean>(false);

  const submit = async (data: ProductCreateInputForm) => {
    onSubmit();
    console.log({ data });
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
  onSubmit: () => Promise<void>;
  children: (props: productFormHandleProps) => React.ReactNode;
}

const Form: FC<FormProps> = ({ children, onSubmit }) => {
  const props = productForm({ medias: [] }, onSubmit);
  return <form onSubmit={props.submit}>{children(props)}</form>;
};

export default Form;
