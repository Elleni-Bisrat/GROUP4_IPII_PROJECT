// src/components/ThemeToggle.jsx
import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
     <button
      onClick={toggleTheme}
      className="h-5 w-22 px-2 hover:text-white text-sm mt-2 rounded-xl "
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggle;
