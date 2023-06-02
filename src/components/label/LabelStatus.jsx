import React from "react";
import PropTypes from "prop-types";

const LabelStatus = ({ children, type = "" }) => {
  let typeStyles = "";
  switch (type) {
    case "success":
      typeStyles =
        "bg-green-500 bg-opacity-20 text-green-500 dark:bg-colorDarkSaga shadow-sm";
      break;
    case "warning":
      typeStyles =
        "bg-orange-500 bg-opacity-20 text-orange-500 dark:bg-colorDarkSaga shadow-sm";
      break;
    case "danger":
      typeStyles =
        "bg-red-500 bg-opacity-20 text-red-500 dark:bg-colorDarkSaga shadow-sm";
      break;

    default:
      break;
  }
  return (
    <span
      className={`${typeStyles} hover:opacity-90  select-none inline-block w-[110px] text-center rounded-lg font-semibold text-sm py-[10px]`}
    >
      {children}
    </span>
  );
};

LabelStatus.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  typeStyles: PropTypes.string,
};

export default LabelStatus;
