import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTheme } from "../../context/theme-context";

const Button = ({
  children,
  type = "button",
  onClick = () => {},
  className = "",
  padding = "px-5 py-4",
  path,
  ...props
}) => {
  const { theme } = useTheme();
  const getColorSolid = () => {
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
  const buttonColorSolid = getColorSolid();

  if (path !== "" && typeof path === "string") {
    return (
      <Link to={path}>
        <button
          type={type}
          onClick={onClick}
          {...props}
          className={`flex ${className} ${buttonColorSolid} btn-shinny-1 ${padding} text-sm md:text-base shadow-sm capitalize items-center justify-center  rounded-lg font-medium cursor-pointer `}
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className={`flex ${className} ${buttonColorSolid} btn-shinny-1 ${padding} text-sm md:text-base shadow-sm capitalize items-center justify-center  rounded-lg font-medium cursor-pointer `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  kind: PropTypes.string,
  padding: PropTypes.string,
  path: PropTypes.string,
};

export default Button;
