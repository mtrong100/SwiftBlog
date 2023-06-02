import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/theme-context";

const Heading = ({ children, line = true }) => {
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
  const getThemeLine = () => {
    switch (theme) {
      case "primary":
        return "primary-gradient-bg";
      case "secondary":
        return "secondary-gradient-bg";
      case "third":
        return "third-gradient-bg";
      case "fourth":
        return "fourth-gradient-bg";
      default:
        return "";
    }
  };
  const lineColor = getThemeLine();
  const headingColor = getThemeClass();
  return (
    <h1
      className={`${headingColor} text-2xl capitalize font-bold   md:text-4xl w-fit`}
    >
      {children}
      {line && (
        <div className={`${lineColor} h-1 mt-2 rounded-lg w-full`}></div>
      )}
    </h1>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  line: PropTypes.bool,
};

export default Heading;
