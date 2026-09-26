import { useState, type ReactNode } from "react";
import { DARK_THEME, LIGHT_THEME } from "../constants/theme";
import { ThemeContext, type Theme } from "./themeContext";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(LIGHT_THEME);

  const toggleTheme = () => {
    setTheme((previousTheme) =>
      previousTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME,
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}