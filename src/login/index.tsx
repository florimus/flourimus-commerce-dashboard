'use client';
import Form from './form';
import LoginView from './view';

const Login = () => {
  return (
    <Form>
      {({ errors, disabled, register }) => {
        return (
          <LoginView errors={errors} disabled={disabled} register={register} />
        );
      }}
    </Form>
  );
};

export default Login;
