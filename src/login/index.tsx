'use client';

import { getTokenWithEmailAndPassword } from '@/actions/userActions';
import Form from './form';
import LoginView from './view';

const Login = () => {
  const handleLogin = async (email: string, password: string) => {
    return await getTokenWithEmailAndPassword(email, password, 'password');
  };

  return (
    <Form submit={handleLogin}>
      {({ errors, disabled, register, isValid, submitting }) => {
        return (
          <LoginView
            errors={errors}
            disabled={disabled}
            register={register}
            isValid={isValid}
            submitting={submitting}
          />
        );
      }}
    </Form>
  );
};

export default Login;
