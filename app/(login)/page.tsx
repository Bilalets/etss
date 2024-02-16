'use client';
import React, { useState } from 'react';
import { Label, TextInput } from 'flowbite-react';
import { HiOutlineUserCircle, HiOutlineLockOpen } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useRouter();
  const handleLogin = () => {
    navigation.replace('/superadmin/dashboard/statistics');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <Label htmlFor="username" value="Username" />

            <TextInput
              type="email"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={HiOutlineUserCircle}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password" value="Password" />
            <TextInput
              type="password"
              id="password"
              icon={HiOutlineLockOpen}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe" className="text-gray-700">
              Remember Me
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full px-6 py-2 bg-black text-white rounded hover:bg-gray-800 focus:outline-none"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
