import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import PropTypes from "prop-types";

const IconView = ({ onClick = () => {} }) => {
  return (
    <span
      className="flex items-center justify-center w-10 h-10 transition-all border rounded-full cursor-pointer border-slate-500 hover:bg-green-500 hover:text-white"
      onClick={onClick}
    >
      <AiOutlineEye />
    </span>
  );
};

IconView.propTypes = {
  onClick: PropTypes.func,
};

export default IconView;
