import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/theme-context";

const Label = ({ children, htmlFor = "", ...props }) => {
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
  const themeColor = getThemeClass();

  return (
    <label
      className={`${themeColor} font-bold capitalize cursor-pointer select-none md:text-xl`}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};

export default Label;
