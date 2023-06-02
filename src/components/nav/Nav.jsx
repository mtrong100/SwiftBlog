import React from "react";
import { nav } from "../../data/data";
import { v4 } from "uuid";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/theme-context";

const Nav = () => {
  const { theme } = useTheme();
  const getThemeClass = () => {
    switch (theme) {
      case "primary":
        return "hover:text-colorOrange dark:hover:text-colorOrange";
      case "secondary":
        return "hover:text-colorPink dark:hover:text-colorPink";
      case "third":
        return "hover:text-colorBlue dark:hover:text-colorBlue";
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
        return "text-colorBlue dark:text-colorBlue";
      case "fourth":
        return "text-colorYellow dark:text-colorYellow";
      default:
        return "";
    }
  };
  const themeColor = getThemeClass();
  const themeActiveColor = getThemeActiveClass();

  return (
    <ul className="items-center hidden gap-8 lg:flex">
      {nav.map((item) => (
        <li key={v4()}>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? `${themeActiveColor}` : "opacity-80"
              } uppercase md:text-lg lg:text-xl font-semibold transition-all duration-200 text-text1 dark:text-white ${themeColor}`
            }
            to={item.path}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
