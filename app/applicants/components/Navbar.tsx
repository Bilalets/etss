'use client';
import React from 'react';
import { clsx } from 'clsx';
import { LayoutDashboard, Home, History, NotebookText } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const baseurl = 'sat-psi.vercel.app/';
  const pathname = usePathname();

  let fullPath = baseurl + pathname;
  console.log(fullPath);
  const routes = [
    {
      icon: Home,
      href: `${baseurl}/applicants/home`,
      label: 'Home',
      active: fullPath === `${baseurl}/applicants/home` ? true : false,
    },
    {
      icon: LayoutDashboard,
      href: `${baseurl}/applicants/dashboard`,
      label: 'Dashboard',
      active: fullPath === `${baseurl}/applicants/dashboard` ? true : false,
    },
    {
      icon: History,
      href: `${baseurl}/history`,
      label: 'History',
      active: fullPath === `${baseurl}/applicants/history` ? true : false,
    },
    {
      icon: NotebookText,
      href: `${baseurl}/applicants/assessments`,
      label: 'Assessments',
      active: fullPath === `${baseurl}/applicants/assessments` ? true : false,
    },
  ];
  return (
    <nav className="w-full p-5 bg-white shadow-lg ">
      <div className="flex justify-between items-center mr-10">
        <div>
          <p className="text-2xl font-semibold">S A T</p>
        </div>
        <div className="flex ml-4 space-x-4 lg:space-x-6">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
