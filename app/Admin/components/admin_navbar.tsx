"use client";
import React from "react";

import {
  BarChart3,
  Component,
  CircleUser,
  Pencil,
  Upload,
  LogOutIcon,
  BookOpenCheck,
  Users,
  ScanEye,
  SquareGanttIcon,
  Newspaper,
  LayoutDashboardIcon,
  Briefcase,
  ListMinus,
  PackageSearch,
  PencilRuler,
  Boxes,
  LibraryBig,
  PencilRulerIcon,
  Scroll,
  Rows4,
  NotebookText,
  GanttChart,
} from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { signOut } from "next-auth/react";

const admin_navbar = () => {
  const handleSignOut = async () => {
    const data = await signOut({ redirect: true, callbackUrl: '/' })
    
   

  }

  return (
    <div>
      <div className="h-screen bg-white shadow text-center">
        <h1 className=" text-2xl">Admin Panel</h1>

        <Sidebar
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: "#ffffff",
            },
          }}
        >
          
          <Menu className="mt-10 text-gray-600 h-full">
            <MenuItem
              icon={<LayoutDashboardIcon />}
              component={<Link href="/Admin/dashboard/main" />}
            >
              Dashboard
            </MenuItem>
            <hr />
          

            <MenuItem
              icon={<Rows4 />}
              component={<Link href={"/Admin/dashboard/product/displayproduct"}/>}
            >
             Services
            </MenuItem>
            
          
      
            <hr />

            


            <MenuItem
              icon={<Upload/>}
              component={<Link href="/Admin/dashboard/upload" />}
            >
              Question Bank
            </MenuItem>
          

            <hr />
            <SubMenu  icon={<BookOpenCheck />} label='Assessment'>
            <MenuItem
              icon={<PencilRulerIcon />}
              component={<Link href="/Admin/dashboard/assessment/create-assessment" />}
            >
              Create Assessment
            </MenuItem>
            <hr />
            <MenuItem
              icon={<Pencil />}
              component={<Link href="/Admin/dashboard/assessment/edit-assessment" />}
            >
              Edit Assessment
            </MenuItem>
            </SubMenu>
           
            
          

           
            <hr />
            <MenuItem icon={<LogOutIcon />} component={<Link href="/" />} onClick={ handleSignOut}>
              Logout
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
};

export default admin_navbar;
