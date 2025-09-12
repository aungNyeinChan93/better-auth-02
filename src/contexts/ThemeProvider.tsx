"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  changeTheme: () => {},
});

interface Props {
  children: ReactNode;
}
const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;
