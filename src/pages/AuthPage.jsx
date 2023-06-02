import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/theme-context";

const AuthPage = ({ children }) => {
  const { theme } = useTheme();
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

  return (
    <>
      <Link
        className={`flex ${headingColor} items-center justify-center pb-5 text-4xl font-bold text-center capitalize md:text-5xl `}
        to="/"
      >
        SwiftBlog
      </Link>
      {children}
    </>
  );
};

export default AuthPage;
