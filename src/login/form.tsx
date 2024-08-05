'use client';

import React, { FC } from 'react';
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import Schema, { loginSchema } from './schema';
import { z } from 'zod';

export type UserLoginRequestInputType = z.infer<typeof loginSchema>;

interface LoginFormHandleProps {
  register: UseFormRegister<UserLoginRequestInputType>;
  errors: FieldErrors<UserLoginRequestInputType>;
  submit: (event?: React.BaseSyntheticEvent) => Promise<void>;
  disabled: boolean;
  isValid: boolean;
}

interface LoginFormProps {
  submit: (email: string, password: string) => Promise<void>;
}

const LoginForm: (initial: LoginFormProps) => LoginFormHandleProps = (
  initial
) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid }
  } = useForm<UserLoginRequestInputType>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: Schema
  });

  const submit = (data: UserLoginRequestInputType) => {
    initial.submit(data.email, data.password);
  };

  return {
    register,
    errors,
    isValid,
    submit: handleSubmit(submit),
    disabled: isLoading
  };
};

interface FormProps {
  submit: (email: string, password: string) => Promise<void>;
  children: (args: LoginFormHandleProps) => React.ReactNode;
}

const Form: FC<FormProps> = ({ children, submit }) => {
  const formProps = LoginForm({ submit });
  return <form onSubmit={formProps?.submit}>{children(formProps)}</form>;
};

export default Form;
