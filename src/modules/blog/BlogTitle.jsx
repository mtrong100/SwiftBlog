import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTheme } from "../../context/theme-context";

const BlogTitle = ({ path = "", className = "text-xl", children }) => {
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
    <h1
      className={`${className} font-bold ${headingColor} hover:opacity-80 leading-tight capitalize cursor-pointer`}
    >
      <Link className="block" to={`/${path}`}>
        {children}
      </Link>
    </h1>
  );
};

/* ADDING PropsTypes */
BlogTitle.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
  className: PropTypes.string,
};

export default BlogTitle;
