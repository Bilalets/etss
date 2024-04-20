'use client'
import React from 'react';
import { clsx } from 'clsx';
import { LayoutDashboard, Home, History, NotebookText, CircleUserRound } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { BASE_URL } from '@/config/Constants';
import { signOut, useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';



const Navbar =  () => {
  

  const baseurl = BASE_URL;
  const pathname = usePathname();
  const {data:session}=useSession()
  
  let fullPath = baseurl + pathname;
  

 
  const handleSignOut = async () => {
    const data = await signOut({ redirect: true, callbackUrl: '/' })
    
  

  }

  const routes = [
    {
      icon: Home,
      href: `/applicants/home`,
      label: 'Home',
      active: fullPath === `/applicants/home` ? true : false,
    },
    {
      icon: LayoutDashboard,
      href: `/applicants/dashboard`,
      label: 'Dashboard',
      active: fullPath === `/applicants/dashboard` ? true : false,
    },
    {
      icon: History,
      href: `/applicants/history`,
      label: 'History',
      active: fullPath === `/applicants/history` ? true : false,
    },
  
 
    {
      icon: CircleUserRound,
      href: `/applicants/profile`,
      label: 'Profile',
      active: fullPath === `/applicants/profile` ? true : false,
    },
  ];
  return (
    <nav className="w-full p-5 bg-white shadow-lg ">
      <div className="flex justify-between items-center mr-10">
        <div>
          <p className="text-2xl font-semibold">S A T</p>
        </div>
        <div className="flex ml-4 space-x-4 lg:space-x-6 items-center">
          {routes.map((route) => (
            <Link
              key={route.label}
              href={route.href}
              className={clsx(
                'text-sm font-medium transition-colors hover: text-primary',
                route.active
                  ? 'text-black text-lg dark:text-white'
                  : ' text-gray-500'
              )}
            >
              <div className="flex gap-0">
                {route.icon &&
                  React.createElement(route.icon, {
                    className: clsx(
                      'mr-2 h-5 w-5',
                      route.active ? 'text-primary' : 'text-gray-500'
                    ),
                  })}
                {route.label}
                {route.active}
              </div>
            </Link>
          ))}
          <div>
          <button onClick={handleSignOut} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Logout</button>
           </div>
        </div>
       

      </div>
    </nav>
  );
};

export default Navbar;
