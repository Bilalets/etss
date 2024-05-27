"use client"
import React from 'react';
import { Metadata } from 'next';
import Navbar from './components/Navbar';
import { SessionProvider, useSession } from 'next-auth/react';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import AuthContext from '../context/AuthContext';
import { AppWrapper } from '../context';





interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout: React.FC<RootLayoutProps> =  ({ children }) => {

  return (
    
<AuthContext>

      <div className="w-full h-full">
        <Navbar />
        <AppWrapper>{children}</AppWrapper>
      </div>
      
      </AuthContext>
      
  );
};
const metadata: Metadata = {
  title: 'Applicant',
  description: '',
};
export default RootLayout;
