'use client';
import { Button, Label, Select, TextInput } from 'flowbite-react';
import {
  HiOutlineUser,
  HiUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLockClosed,
  HiOutlineUserCircle,
  HiOutlineEye,
  HiOutlineEyeOff,
} from 'react-icons/hi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineLoading } from 'react-icons/ai';
import React, { useState } from 'react';
import { cities } from './cities';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface FormValues {
  fullName: String;
  fatherName: String;
  email: String;
  phone: number;
  dob: Date;
  password: string;
}
const getPasswordStrength = (password: string): string => {
  // You can define your own rules for password strength calculation
  const strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (strongRegex.test(password)) {
    return 'strong';
  } else if (mediumRegex.test(password)) {
    return 'medium';
  } else {
    return 'weak';
  }
};
const SignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordStrength, setPasswordStrength] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPasswordStrength(getPasswordStrength(password));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    const response = await axios.post(`/api/signup`, { data });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            <div className="mt-4">
              <Label htmlFor="full_name" value="Full Name" />
              <TextInput
                {...register('fullName', { required: 'Full name is required' })}
                type="Name"
                id="fullName"
                shadow
                icon={HiOutlineUserCircle}
                placeholder="Full Name"
              />
              {errors.fullName && (
                <span className=" text-sm text-red-500">
                  {errors.fullName.message}
                </span>
              )}{' '}
            </div>
            <div className="mt-4">
              <Label htmlFor="father_name" value="Father's Name" />
              <TextInput
                {...register('fatherName', {
                  required: 'Father name is required',
                })}
                type="fatherName"
                id="fatherName"
                shadow
                icon={HiOutlineUserCircle}
                placeholder="Father Name"
              />
              {errors.fullName && (
                <span className=" text-sm text-red-500">
                  {errors.fullName.message}
                </span>
              )}
            </div>
            <div className="mt-4">
              <Label value="Date of Birth" />
              <TextInput
                shadow
                type="date"
                {...register('dob', {
                  required: 'Date of birth required',
                })}
              />
              {errors.dob && (
                <span className="text-sm text-red-500">
                  {errors.dob.message}
                </span>
              )}
            </div>
            <div className="mt-4">
              <Label>Gender</Label>
              <div className="flex  h-full w-full gap-x-6 border p-2 rounded-lg pl-4  items-center border-gray-300 bg-gray-100">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={() => null}
                    checked={true /*gender === 'male'*/}
                    className="mr-2"
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={() => {}}
                    checked={false /*gender === 'female'*/}
                    className="mr-2"
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              <div className="mt-4">
                <Label value="City" />
                <Select>
                  {cities.map(({ city }) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="mt-4">
                <Label value="Email" />
                <TextInput
                  {...register('email', {
                    required: 'Email is required',
                  })}
                  type="email"
                  shadow
                  icon={HiOutlineMail}
                  placeholder="email@yourdomain.com"
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <Label value="Password" />
                <div className="flex h-full w-full">
                  <TextInput
                    className="w-full"
                    shadow
                    type={showPassword ? 'text' : 'password'}
                    icon={HiOutlineLockClosed}
                    {...register('password', {
                      required: 'Password is required',
                    })}
                    onChange={handlePasswordChange}
                    placeholder="*********"
                  />

                  <button
                    className="-ml-8 z-10 text-gray-500"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <HiOutlineEyeOff className="w-5 h-5" />
                    ) : (
                      <HiOutlineEye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              {errors.password && <span>Password is required</span>}
              {passwordStrength && (
                <div
                  className={
                    passwordStrength === 'weak'
                      ? `text-red-500`
                      : passwordStrength === 'strong'
                      ? `text-green-500`
                      : ` text-yellow-500`
                  }
                >
                  <span className="ml-2 mt-1 text-sm">{passwordStrength}</span>
                </div>
              )}
              <div className="mt-4">
                <Label value="Phone" />
                <TextInput
                  type="number"
                  {...register('phone', {
                    valueAsNumber: true,
                    required: 'Phone number is required',
                    max: {
                      value: 11,
                      message: 'Phone number must be 11 digits',
                    },
                  })}
                  icon={HiOutlinePhone}
                  shadow
                  placeholder="03xxxxxxx"
                />
                {errors.phone && (
                  <span className=" text-sm text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-end mt-4">
              {loading ? (
                <Button
                  className="w-full  bg-black text-white rounded hover:bg-gray-800 focus:outline-none"
                  isProcessing
                  processingSpinner={
                    // eslint-disable-next-line react/jsx-no-undef
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
                  Sign up
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
