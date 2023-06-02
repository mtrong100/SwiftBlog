import React, { useRef, useState } from "react";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
import Button from "../button/Button";
import { useAuth } from "../../context/auth-context";
import NavMobile from "../nav/NavMobile";
import { BiMenu } from "react-icons/bi";
import PageScrollProgressBar from "react-page-scroll-progress-bar";

const Header = () => {
  const { userInfo } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-[999] w-full py-3 md:py-5 bg-grayf3 dark:bg-colorDarkRedux shadow-md">
        <div className="flex items-center justify-between page-container">
          <div className="flex items-center gap-2">
            <span
              onClick={() => setOpen(!open)}
              className="text-3xl lg:hidden text-text1 dark:text-white"
            >
              <BiMenu />
            </span>
            <Logo />
          </div>
          <Nav />
          <NavMobile open={open} setOpen={setOpen} />
          <div className="flex items-center gap-x-5">
            {userInfo ? (
              <Button
                className="px-3 text-xs md:text-base md:px-6"
                path="/dashboard"
                type="button"
              >
                Dashboard
              </Button>
            ) : (
              <Button padding="px-6 py-4" path="/register" type="button">
                Register
              </Button>
            )}
          </div>
        </div>
        {/* <PageScrollProgressBar
          color="#e66e00"
          bgColor="bg-transparent"
          height="4px"
          top="92px"
        /> */}
      </header>
    </>
  );
};

export default Header;
