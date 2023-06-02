import Swal from "sweetalert2";
import React from "react";
import Logo from "../logo/Logo";
import { v4 } from "uuid";
import { useAuth } from "../../context/auth-context";
import { signOut } from "firebase/auth";
import { sidebarLinks } from "../../data/data";
import { NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { auth } from "../../firebase-app/firebase-config";
import { useTheme } from "../../context/theme-context";

const Sidebar = () => {
  const { theme } = useTheme();
  const getThemeClass = () => {
    switch (theme) {
      case "primary":
        return "hover:text-colorOrange dark:hover:text-colorOrange";
      case "secondary":
        return "hover:text-colorPink dark:hover:text-colorPink";
      case "third":
        return "hover:text-colorGreen dark:hover:text-colorGreen";
      case "fourth":
        return "hover:text-colorYellow dark:hover:text-colorYellow";
      default:
        return "";
    }
  };
  const getThemeActiveClass = () => {
    switch (theme) {
      case "primary":
        return "text-colorOrange dark:text-colorOrange";
      case "secondary":
        return "text-colorPink dark:text-colorPink";
      case "third":
        return "text-colorGreen dark:text-colorGreen";
      case "fourth":
        return "text-colorYellow dark:text-colorYellow";
      default:
        return "";
    }
  };
  const themeColor = getThemeClass();
  const themeActiveColor = getThemeActiveClass();

  // Handle Logout
  const handleSignOut = () => {
    Swal.fire({
      title: "Log out of your account?",
      text: "You'll need to log in again to access it later",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        signOut(auth);
        Swal.fire("Log out successfully !");
      }
    });
  };

  return (
    <section
      className={`hidden lg:block z-40 w-[300px] h-fit bg-graySoft dark:bg-colorDarkRedux text-text1 dark:text-white shadow-lg rounded-lg p-5`}
    >
      <Logo className="flex items-center justify-center pb-5" />
      <ul className="flex flex-col gap-1 pt-2 border-t border-text3">
        {sidebarLinks.map((item) => {
          if (item.onClick) {
            return (
              <li
                className={`flex gap-3 px-5 py-4 text-lg font-semibold uppercase cursor-pointer select-none ${themeColor}`}
                onClick={handleSignOut}
                key={v4()}
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            );
          }

          return (
            <NavLink
              key={v4()}
              className={({ isActive }) =>
                `${
                  isActive ? `${themeActiveColor}` : ""
                } flex items-center gap-3  cursor-pointer  text-lg font-semibold uppercase select-none px-5 py-4 ${themeColor}`
              }
              to={item.url}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </ul>
    </section>
  );
};

export default Sidebar;

export const SidebarMobile = () => {
  const { open, setOpen } = useAuth();
  const { theme } = useTheme();
  const getThemeClass = () => {
    switch (theme) {
      case "primary":
        return "hover:text-colorOrange dark:hover:text-colorOrange";
      case "secondary":
        return "hover:text-colorPink dark:hover:text-colorPink";
      case "third":
        return "hover:text-colorGreen dark:hover:text-colorGreen";
      case "fourth":
        return "hover:text-colorYellow dark:hover:text-colorYellow";
      default:
        return "";
    }
  };
  const getThemeActiveClass = () => {
    switch (theme) {
      case "primary":
        return "text-colorOrange dark:text-colorOrange";
      case "secondary":
        return "text-colorPink dark:text-colorPink";
      case "third":
        return "text-colorGreen dark:text-colorGreen";
      case "fourth":
        return "text-colorYellow dark:text-colorYellow";
      default:
        return "";
    }
  };
  const themeColor = getThemeClass();
  const themeActiveColor = getThemeActiveClass();
  const handleSignOut = () => {
    Swal.fire({
      title: "Log out of your account?",
      text: "You'll need to log in again to access it later",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        signOut(auth);
        Swal.fire("Log out successfully !");
      }
    });
  };

  return (
    <section
      className={`${
        open ? "translate-x-0" : "-translate-x-full"
      }  w-[300px] fixed shadow-xl z-[99] transition-all duration-300 top-0 h-full left-0 bg-graySoft dark:bg-colorDarkRedux text-text1 dark:text-white pt-5
       p-5 `}
    >
      <div className="flex items-center justify-between pb-5">
        <Logo className="flex items-center justify-center" />
        <span
          onClick={() => setOpen(false)}
          className="text-xl w-[40px] h-[40px] rounded-full bg-colorDarkSaga flex items-center justify-center text-white"
        >
          <CgClose />
        </span>
      </div>
      <ul className="flex flex-col gap-2 pt-3 border-t border-text3">
        {sidebarLinks.map((item) => {
          if (item.onClick) {
            return (
              <li
                className={`${themeColor} flex items-center gap-3 px-5 py-4 text-lg font-semibold uppercase cursor-pointer select-none sidebar-item`}
                onClick={handleSignOut}
                key={v4()}
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            );
          }

          return (
            <NavLink
              onClick={() => setOpen(false)}
              key={v4()}
              className={({ isActive }) =>
                `${
                  isActive ? `${themeActiveColor}` : ""
                } flex items-center gap-3 cursor-pointer sidebar-item text-lg font-semibold uppercase select-none px-5 py-4`
              }
              to={item.url}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </ul>
    </section>
  );
};
