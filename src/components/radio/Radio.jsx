import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { useTheme } from "../../context/theme-context";

const Radio = ({ checked, children, control, name, ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

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
  const getSelectedClass = () => {
    switch (theme) {
      case "primary":
        return "border-colorOrange";
      case "secondary":
        return "border-colorPink";
      case "third":
        return "border-colorGreen";
      case "fourth":
        return "border-colorYellow";
      default:
        return "";
    }
  };
  const themeBorder = getSelectedClass();
  const themeColor = getColorSolid();

  return (
    <label>
      <input
        checked={checked}
        type="radio"
        className="hidden-input"
        {...field}
        {...rest}
      />
      <div className="flex items-center font-medium cursor-pointer gap-x-3">
        <div
          className={`w-7 h-7 rounded-full border border-slate-400 flex items-center justify-center p-1  ${
            checked ? `${themeColor}` : `${themeBorder} text-transparent`
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span className="font-medium uppercase select-none dark:text-white text-text1">
          {children}
        </span>
      </div>
    </label>
  );
};

Radio.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  control: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
};

export default Radio;
