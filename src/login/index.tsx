'use client';

import { getTokenWithEmailAndPassword } from '@/actions/userActions';
import Form from './form';
import LoginView from './view';

const Login = () => {
  const handleLogin = async (email: string, password: string) => {
    const response = await getTokenWithEmailAndPassword(
      email,
      password,
      'password'
    );
    console.log(response);
  };

  return (
    <Form submit={handleLogin}>
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
