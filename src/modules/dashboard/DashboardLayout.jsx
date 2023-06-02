import ThemeSwitch from "../../components/theme/ThemeSwitch";
import Sidebar, { SidebarMobile } from "../../components/sidebar/Sidebar";
import React from "react";
import HomePage from "../../pages/HomePage";
import DashboardHeader from "./DashboardHeader";
import { useAuth } from "../../context/auth-context";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { userInfo } = useAuth();
  if (!userInfo) return <HomePage></HomePage>;

  return (
    <>
      <DashboardHeader />
      <div className="dashboard-layout py-[50px] px-5 lg:px-10 ">
        <Sidebar />
        <SidebarMobile />
        <div className="dashboard-content">
          <Outlet />
        </div>
        <ThemeSwitch />
      </div>
    </>
  );
};

export default DashboardLayout;
