'use client';

import { UserType } from 'core/type';
import React, { FC } from 'react';
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';

export interface UserLoginRequestInputType extends Partial<UserType> {}

interface LoginFormHandleProps {
  register: UseFormRegister<UserLoginRequestInputType>;
  errors: FieldErrors<UserLoginRequestInputType>;
  submit: (event?: React.BaseSyntheticEvent) => Promise<void>;
  disabled: boolean;
}

interface LoginFormProps {}

const LoginForm: (initial: LoginFormProps) => LoginFormHandleProps = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading }
  } = useForm<UserLoginRequestInputType>({
    mode: 'onTouched',
    reValidateMode: 'onChange'
  });

  const submit = (data: UserLoginRequestInputType) => {
    console.log(data);
  };

  return {
    register,
    errors,
    submit: handleSubmit(submit),
    disabled: isLoading
  };
};

interface FormProps {
  children: (args: LoginFormHandleProps) => React.ReactNode;
}

const Form: FC<FormProps> = ({ children }) => {
  const formProps = LoginForm({});
  return <form onSubmit={formProps?.submit}>{children(formProps)}</form>;
};

export default Form;
