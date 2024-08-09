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
    setError
  } = useForm<ProductCreateInputForm>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: Schema
  });

  const [submitting, setSubmitting] = useState<boolean>(false);

  const submit = async (data: ProductCreateInputForm) => {
    onSubmit();
    console.log({ data });
  };

  return {
    register,
    errors,
    isValid,
    isDirty,
    control,
    disabled: isLoading,
    submit: handleSubmit(submit),
    submitting
  };
};

interface FormProps {
  onSubmit: () => Promise<void>;
  children: (props: productFormHandleProps) => React.ReactNode;
}

const Form: FC<FormProps> = ({ children, onSubmit }) => {
  const props = productForm({}, onSubmit);
  return <form onSubmit={props.submit}>{children(props)}</form>;
};

export default Form;
