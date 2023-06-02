import React, { useState } from "react";
import Button from "../../components/button/Button";
import { useAuth } from "../../context/auth-context";
import { HiMenuAlt2 } from "react-icons/hi";
const DashboardHeader = () => {
  const { userInfo, setOpen, open } = useAuth();

  return (
    <header className="w-full py-2 shadow-md md:py-5 bg-whiteSoft text-text1 dark:text-white dark:bg-colorDarkRedux">
      <div className="flex items-center justify-between page-container">
        <div className="flex items-center gap-5">
          <span onClick={() => setOpen(!open)} className="text-4xl lg:hidden">
            <HiMenuAlt2 />
          </span>
          <Button className="hidden py-3 md:flex" type="button" path="/">
            return home
          </Button>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-sm font-semibold capitalize md:text-lg">
            {userInfo?.username}
          </span>
          <div className="w-[50px] h-[50px] rounded-full">
            <img
              className="rounded-full imgCover"
              src={userInfo?.avatar}
              alt="user-img"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
