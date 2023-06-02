import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "primary";
  });

  const [dark, setDark] = useState(() => {
    const storedTheme = localStorage.getItem("dark");
    return storedTheme;
  });

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  // Store the current theme in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("dark", dark);
  }, [dark]);

  const value = { theme, setTheme, handleThemeChange, setDark, dark };

  return (
    <ThemeContext.Provider value={value} {...props}></ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (typeof context === "undefined") {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

export { useTheme, ThemeProvider };
