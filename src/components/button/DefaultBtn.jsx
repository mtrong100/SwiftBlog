import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DefaultBtn = ({
  children,
  type = "button",
  onClick = () => {},
  className = "",
  padding = "px-5 py-4",
  path,
  ...props
}) => {
  if (path !== "" && typeof path === "string") {
    return (
      <Link to={path}>
        <button
          type={type}
          onClick={onClick}
          {...props}
          className={`flex ${className} hover:opacity-90 ${padding} bg-white text-black text-sm md:text-base shadow-sm capitalize items-center justify-center rounded-lg font-medium cursor-pointer `}
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
      className={`flex ${className}  hover:opacity-90 ${padding} bg-white text-black text-sm md:text-base shadow-sm capitalize items-center justify-center  rounded-lg font-medium cursor-pointer `}
    >
      {children}
    </button>
  );
};

DefaultBtn.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  kind: PropTypes.string,
  padding: PropTypes.string,
  path: PropTypes.string,
};

export default DefaultBtn;
