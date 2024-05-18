'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { HiOutlineUserCircle, HiOutlineLockOpen } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { AiOutlineLoading } from 'react-icons/ai';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
interface FormValues {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const {data:session}=useSession()
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();


  useEffect(() => {
    if (session?.user?.email) {
        
        if (session.user.email === 'ots123@gmail.com') {
            router.replace('/Admin/dashboard/upload');
        } 
    }
if(session?.user?.email==='romanets@gmail.com'){
  router.replace('/Assistant/Dashboard');
}
if(session?.user?.email==='farazets@gmail.com'){
  router.replace('/Assistant/Dashboard');
}
if(session?.user?.email==='aliets@ets.com'){
  router.replace('/Assistant/Dashboard');
}
    if (session?.user?.email) {
        
      if (session.user.email === 'applicant123@gmail.com') {
          router.replace('/applicants/home');
      } 
  }

  if (session?.user?.email) {
        
    if (session.user.email === 'admin123@gmail.com') {
        router.replace('/superadmin/dashboard/statistics');
    } 
}

}, [session, router])



  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          toast.error('username or password miss match ');
          setLoading(false);
        }
        if (callback?.ok && !callback.error) {
          
          toast.success('Logged in success ');
          
          router.replace('/applicants/dashboard');
        }
      })
      .finally(() => setLoading(false));
    //
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <div className="mb-4">
            <Label htmlFor="email" value="Email" />
            <TextInput
              {...register('email', { required: 'Email is required' })}
              type="email"
              id="email"
              shadow
              icon={HiOutlineUserCircle}
            />
            {errors.email && (
              <span className=" text-sm text-red-500">
                {errors.email.message}
              </span>
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
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}{' '}
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
          <div className="flex justify-between mt-10">
            <p className="text-sm cursor-pointer">Forgot password?</p>
            <p className="text-sm">
              Not a member yet?{' '}
              <span className="font-bold text-sm cursor-pointer text-sky-400">
                <Link href={'/signup'}>Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginScreen;
