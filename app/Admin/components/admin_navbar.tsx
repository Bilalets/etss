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
            <SubMenu icon={<PackageSearch />} label={"Product"} component={<Link href={"/Admin/dashboard/product/displayproduct"}/>}>

            <MenuItem
              icon={<PencilRuler />}
              component={<Link href="/Admin/dashboard/product/createproduct" />}
            >
             Create Product
            </MenuItem>
            <hr />
            <MenuItem
              icon={<Pencil />}
              component={<Link href="/Admin/dashboard/product/editproduct" />}
            >
             Edit Product
            </MenuItem>
            </SubMenu>
            
            <hr />
          
          <SubMenu icon={<Boxes/>} label="Sub-Product">
          <MenuItem
                icon={<PencilRuler />}
                component={<Link href="/Admin/dashboard/subproducts/create-subproduct" />}
              >
                Create Sub-Product
              </MenuItem>
              <hr />
          <MenuItem
                icon={<Pencil />}
                component={<Link href="/Admin/dashboard/subproducts/edit-subproduct" />}
              >
                Edit Sub-Product
              </MenuItem>
            <hr />
           
              <hr />
          </SubMenu>
          <hr />
            
            <SubMenu  icon={<LibraryBig />} label='Category'>
            <MenuItem
              icon={<PencilRulerIcon />}
              component={<Link href="/Admin/dashboard/category/create-category" />}
            >
              Create Category
            </MenuItem>
            <hr />
            <MenuItem
              icon={<Pencil />}
              component={<Link href="/Admin/dashboard/category/edit-category" />}
            >
              Edit Category
            </MenuItem>
            </SubMenu>
            
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
            
            
            <MenuItem
              icon={<Upload />}
              component={<Link href="/Admin/dashboard/upload" />}
            >
              QB/Upload
            </MenuItem>
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
