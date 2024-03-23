import React from 'react';
import { Metadata } from 'next';
import Navbar from './components/Navbar';

interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};
export const metadata: Metadata = {
  title: 'Applicant',
  description: '',
};
export default RootLayout;
