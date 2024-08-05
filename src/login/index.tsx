'use client';
import Form from './form';
import LoginView from './view';

const Login = () => {
  return (
    <Form>
      {({ errors, disabled, register, isValid }) => {
        return (
          <LoginView
            errors={errors}
            disabled={disabled}
            register={register}
            isValid={isValid}
          />
        );
      }}
    </Form>
  );
};

export default Login;
