import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from "prop-types";

const IconDelete = ({ onClick = () => {} }) => {
  return (
    <span
      className="flex items-center justify-center w-10 h-10 transition-all border rounded-full cursor-pointer border-slate-500 hover:bg-red-500 hover:text-white"
      onClick={onClick}
    >
      <AiOutlineDelete />
    </span>
  );
};
IconDelete.propTypes = {
  onClick: PropTypes.func,
};

export default IconDelete;
