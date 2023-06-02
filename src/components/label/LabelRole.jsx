import React from "react";
import PropTypes from "prop-types";

const LabelRole = ({ children, type = "" }) => {
  let typeStyles = "";
  switch (type) {
    case "admin":
      typeStyles =
        "bg-colorOrange bg-opacity-20 text-colorOrange dark:bg-colorDarkSaga shadow-sm";
      break;
    case "mod":
      typeStyles =
        "bg-colorPurple bg-opacity-20 text-colorPurple dark:bg-colorDarkSaga shadow-sm";
      break;
    case "user":
      typeStyles =
        "bg-colorBlue bg-opacity-20 text-colorBlue dark:bg-colorDarkSaga shadow-sm";
      break;

    default:
      break;
  }
  return (
    <span
      className={`${typeStyles} capitalize hover:opacity-90 select-none inline-block px-[15px] w-[100px] text-center rounded-lg font-semibold text-sm py-[10px]`}
    >
      {children}
    </span>
  );
};

LabelRole.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  typeStyles: PropTypes.string,
};

export default LabelRole;
