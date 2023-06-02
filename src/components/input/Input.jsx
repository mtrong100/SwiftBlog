import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/theme-context";
import { useController } from "react-hook-form";

const Input = ({ name = "", type = "text", children, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  const { theme } = useTheme();
  const getThemeClass = () => {
    switch (theme) {
      case "primary":
        return "focus:border-colorOrange";
      case "secondary":
        return "focus:border-colorPink";
      case "third":
        return "focus:border-colorGreen";
      case "fourth":
        return "focus:border-colorYellow";
      default:
        return "";
    }
  };
  const themeColor = getThemeClass();

  return (
    <div className="relative w-full">
      <input
        className={`w-full p-4 md:text-base text-sm transition-all border border-text3  rounded-lg focus:bg-slate-100 text-black bg-whiteSoft dark:bg-transparent dark:text-white focus:text-black  dark:focus:bg-colorDarkRedux ${themeColor}`}
        type={type}
        id={name}
        {...field}
        {...props}
      />
      {children ? (
        <div className="absolute right-[20px] top-2/4 cursor-pointer -translate-y-2/4">
          {children}
        </div>
      ) : null}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.node,
  control: PropTypes.any.isRequired,
};

export default Input;
