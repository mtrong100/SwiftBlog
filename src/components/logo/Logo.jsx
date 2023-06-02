import useDarkMode from "../../hooks/useDarkMode";
import React from "react";
import { useTheme } from "../../context/theme-context";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";

const Logo = ({ className = "" }) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const { theme, setDark } = useTheme();
  const getThemeClass = () => {
    switch (theme) {
      case "primary":
        return "primary-gradient-text";
      case "secondary":
        return "secondary-gradient-text";
      case "third":
        return "third-gradient-text";
      case "fourth":
        return "fourth-gradient-text";
      default:
        return "";
    }
  };
  const headingColor = getThemeClass();

  const handleToggleDarkmode = () => {
    setDarkMode(!darkMode);
    setDark(!darkMode);
  };

  return (
    <>
      <div
        className={`${headingColor} ${className} text-2xl flex items-center gap-2 md:gap-3 lg:text-3xl font-semibold`}
      >
        <Link to="/" className="font-bold ">
          SwiftBlog
        </Link>
        <span
          onClick={handleToggleDarkmode}
          className="text-3xl cursor-pointer text-text1 dark:text-white "
        >
          {darkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </span>
      </div>
    </>
  );
};

export default Logo;
