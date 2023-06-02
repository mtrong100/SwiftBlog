import React from "react";
import PropTypes from "prop-types";
import { AiOutlineEdit } from "react-icons/ai";

const IconEdit = ({ onClick = () => {} }) => {
  return (
    <span
      className="flex items-center justify-center w-10 h-10 transition-all border rounded-full cursor-pointer border-slate-500 hover:bg-blue-500 hover:text-white"
      onClick={onClick}
    >
      <AiOutlineEdit />
    </span>
  );
};

IconEdit.propTypes = {
  onClick: PropTypes.func,
};

export default IconEdit;
