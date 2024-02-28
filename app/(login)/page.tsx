'use client';
import React, { useRef, useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { HiOutlineUserCircle, HiOutlineLockOpen } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { AiOutlineLoading } from 'react-icons/ai';
interface FormValues {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const rememberMeRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoading(true);
    console.log(data);
    signIn('credentials', {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          toast.error('username or password miss match ');
        }
        if (callback?.ok && !callback.error) {
          router.push('/superadmin/dashboard/statistics');
        }
      })
      .finally(() => setLoading(true));
    //
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <div className="mb-4">
            <Label htmlFor="email" value="Email" />
            <TextInput
              {...register('email', { required: 'email is required' })}
              type="email"
              id="username"
              shadow
              icon={HiOutlineUserCircle}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}{' '}
          </div>
          <div className="mb-4">
            <Label htmlFor="password" value="Password" />
            <TextInput
              {...register('password', { required: 'Password is required' })}
              type="password"
              id="password"
              icon={HiOutlineLockOpen}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}{' '}
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              ref={rememberMeRef}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-gray-700">
              Remember Me
            </label>
          </div>
          <div className="flex justify-end">
            {loading ? (
              <Button
                className="w-full  bg-black text-white rounded hover:bg-gray-800 focus:outline-none"
                isProcessing
                processingSpinner={
                  <AiOutlineLoading className="h-6 w-6 animate-spin" />
                }
              >
                Please wait.....
              </Button>
            ) : (
              <button
                type="submit"
                className="w-full px-6 py-2 bg-black text-white rounded hover:bg-gray-800 focus:outline-none"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginScreen;
