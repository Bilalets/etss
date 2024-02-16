'use client';
import {
  BarChart3,
  Component,
  FolderGit2,
  GraduationCap,
  Info,
  LayoutDashboard,
  LogOutIcon,
  Network,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from 'react-pro-sidebar';

const SuperAdminNavbar = () => {
  return (
    <div className="h-screen bg-white shadow">
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: '#ffffff',
          },
        }}
      >
        <Menu className="mt-10 text-gray-600 h-full">
          <SubMenu
            icon={<LayoutDashboard />}
            label="Dashboard"
            defaultOpen={true}
          >
            <hr />
            <MenuItem
              icon={<BarChart3 />}
              component={<Link href="/superadmin/dashboard/statistics" />}
            >
              Statistics
            </MenuItem>
            <hr />
            <MenuItem
              icon={<Info />}
              component={<Link href="/superadmin/dashboard/informative" />}
            >
              Informative
            </MenuItem>
            <hr />
          </SubMenu>

          <hr />
          <MenuItem
            icon={<Users />}
            component={<Link href="/superadmin/principals" />}
          >
            Principals
          </MenuItem>
          <hr />
          <MenuItem
            icon={<Component />}
            component={<Link href="/superadmin/branches" />}
          >
            Branches
          </MenuItem>
          <hr />
          <SubMenu icon={<FolderGit2 />} label="Reports">
            <hr />
            <MenuItem icon={<Network />}>Branches</MenuItem>
            <hr />
            <MenuItem icon={<GraduationCap />}>Students</MenuItem>
            <hr />
          </SubMenu>
          <hr />
          <MenuItem icon={<LogOutIcon />} component={<Link href="/" />}>
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SuperAdminNavbar;
