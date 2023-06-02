import React from "react";
import { useDropdown } from "./dropdown-context";
import PropTypes from "prop-types";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useTheme } from "../../context/theme-context";

const Select = ({ placeholder = "" }) => {
  const { toggle, show } = useDropdown();
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

  return (
    <div
      className={`flex items-center justify-between text-white p-5 font-medium capitalize cursor-pointer rounded-tl-md rounded-tr-md ${buttonColorSolid}`}
      onClick={toggle}
    >
      <span>{placeholder}</span>
      <span>
        {show ? (
          <span className="text-xl">
            <IoIosArrowUp />
          </span>
        ) : (
          <span className="text-xl">
            <IoIosArrowDown />
          </span>
        )}
      </span>
    </div>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Select;
