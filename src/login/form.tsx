'use client';

import React, { FC, FormEventHandler, useState } from 'react';
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import Schema, { loginSchema } from './schema';
import { z } from 'zod';
import { TokenResponseType } from 'core/type';
import errorCodes from './errorCodes';
import { useRouter } from 'next/navigation';

export type UserLoginRequestInputType = z.infer<typeof loginSchema>;

interface LoginFormHandleProps {
  register: UseFormRegister<UserLoginRequestInputType>;
  errors: FieldErrors<UserLoginRequestInputType>;
  submit: FormEventHandler<HTMLFormElement>;
  disabled: boolean;
  isValid: boolean;
  submitting: boolean;
}

interface LoginFormProps {
  submit: (email: string, password: string) => Promise<TokenResponseType>;
}

const LoginForm: (initial: LoginFormProps) => LoginFormHandleProps = (
  initial: LoginFormProps
) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid },
    setError
  } = useForm<UserLoginRequestInputType>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: Schema
  });

  const [submitting, setSubmitting] = useState<boolean>(false);

  const router = useRouter();

  const submit = async (data: UserLoginRequestInputType) => {
    setSubmitting(true);
    const response: TokenResponseType = await initial.submit(
      data.email,
      data.password
    );
    if (response?.error) {
      setSubmitting(false);
      const error = errorCodes?.[response?.error] || {
        field: 'email',
        message: 'Network busy'
      };
      setError(error.field, {
        message: error.message
      });
    } else {
      router.push('/product');
    }
  };

  return {
    register,
    errors,
    isValid,
    submit: handleSubmit(submit),
    disabled: isLoading,
    submitting
  };
};

interface FormProps {
  submit: (email: string, password: string) => Promise<TokenResponseType>;
  children: (args: LoginFormHandleProps) => React.ReactNode;
}

const Form: FC<FormProps> = ({ children, submit }) => {
  const formProps = LoginForm({ submit });
  return <form onSubmit={formProps?.submit}>{children(formProps)}</form>;
};

export default Form;
