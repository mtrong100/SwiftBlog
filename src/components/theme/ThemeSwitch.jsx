import React from "react";
import { useTheme } from "../../context/theme-context";

const ThemeSwitch = () => {
  const { theme, handleThemeChange } = useTheme();

  const themes = [
    { name: "fourth", className: "fourth-gradient-bg" },
    { name: "secondary", className: "secondary-gradient-bg" },
    { name: "primary", className: "primary-gradient-bg" },
    { name: "third", className: "third-gradient-bg" },
  ];

  return (
    <div className="fixed right-0 px-3 py-5 md:py-8 md:px-5 z-30 hidden md:flex flex-col justify-center items-center gap-6 glass-design top-[50%] -translate-y-2/4 rounded-md">
      {themes.map((themeOption) => (
        <span
          key={themeOption.name}
          onClick={() => handleThemeChange(themeOption.name)}
          className={`${
            theme === themeOption.name ? "scale-125" : ""
          } w-6 h-6 rounded-full cursor-pointer ${themeOption.className}`}
        ></span>
      ))}
    </div>
  );
};

export default ThemeSwitch;
