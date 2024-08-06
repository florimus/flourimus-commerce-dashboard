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
import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { UserLoginRequestInputType } from './form';
import { Sheet, SheetDescription } from '@/components/ui/sheet';
import Image from 'next/image';

interface LoginViewProps {
  register: UseFormRegister<UserLoginRequestInputType>;
  errors: FieldErrors<UserLoginRequestInputType>;
  disabled: boolean;
  isValid: boolean;
}

const LoginView: FC<LoginViewProps> = ({
  disabled,
  errors,
  isValid,
  register
}) => {
  const { email, password } = errors;
  return (
    <div className="min-h-screen flex justify-center items-center p-8">
      <Card className="w-full max-w-sm py-10">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center">
            Login using Email and password
          </CardDescription>
        </CardHeader>
        <CardContent>
          {(email || password) && (
            <Sheet>
              <SheetDescription className="p-5 bg-red-200 rounded-md">
                {email?.message || password?.message}
              </SheetDescription>
            </Sheet>
          )}
          <Input
            className="my-5"
            disabled={disabled}
            {...register('email')}
            placeholder="Email"
          />
          <Input
            className="my-5"
            disabled={disabled}
            {...register('password')}
            type="password"
            placeholder="Password"
          />
          <Button
            type="submit"
            disabled={disabled || !isValid}
            className="w-full"
          >
            <Image
              src={'/loading.webp'}
              width={28}
              height={28}
              alt="loading"
              className="overflow-hidden rounded-full"
            />
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
