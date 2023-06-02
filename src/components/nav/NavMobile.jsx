import React, { useState } from "react";
import { nav } from "../../data/data";
import { v4 } from "uuid";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import { CgClose } from "react-icons/cg";
import { useTheme } from "../../context/theme-context";

const NavMobile = ({ open, setOpen }) => {
  const { theme } = useTheme();
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
  const themeActiveColor = getThemeActiveClass();

  return (
    <ul
      className={`${
        open ? "translate-x-0" : "-translate-x-full"
      }  fixed bg-graySoft dark:bg-colorDarkRedux text-text1 dark:text-white shadow-sm transition-all duration-300 top-0 left-0 h-full w-[250px] flex flex-col items-stretch`}
    >
      <div className="flex items-center justify-between px-5 py-4 border-b-2 border-solid md:pt-10 border-b-text3">
        <Logo />
        <span
          onClick={() => setOpen(false)}
          className="text-xl w-[35px] h-[35px] rounded-full bg-colorDarkSaga text-white flex items-center justify-center "
        >
          <CgClose />
        </span>
      </div>

      <div className="pt-2">
        {nav.map((item) => (
          <li key={v4()}>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? `${themeActiveColor}` : ""
                } flex items-center gap-3 cursor-pointer sidebar-item text-2xl font-semibold uppercase select-none px-5 py-4`
              }
              to={item.path}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default NavMobile;
