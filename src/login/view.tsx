'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { signIn } from '@/lib/auth';
import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { UserLoginRequestInputType } from './form';

interface LoginViewProps {
  register: UseFormRegister<UserLoginRequestInputType>;
  errors: FieldErrors<UserLoginRequestInputType>;
  disabled: boolean;
}

const LoginView: FC<LoginViewProps> = ({ disabled, errors, register }) => {
  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center">
            Login using Email and password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input className="my-5" {...register('email')} placeholder="Email" />
          <Input
            className="my-5"
            {...register('password')}
            placeholder="Password"
          />
          <Button type="submit" className="w-full">
            Login with Credintials
          </Button>
        </CardContent>
        <CardFooter>
          <Button type="button" className="w-full">
            Sign in with GitHub
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginView;
