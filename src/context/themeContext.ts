import { createContext, useContext } from "react";
import { DARK_THEME, LIGHT_THEME } from "../constants/theme";

export type Theme = typeof LIGHT_THEME | typeof DARK_THEME;

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}