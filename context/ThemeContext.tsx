// import createContext from react
import { createContext, useContext, useState } from "react";
// colour type
export type Theme = {
  dark: boolean;
  toggle: () => void;
  colors: {
    bg: string;
    card: string;
    text: string;
  };
};
// Create context specific requirements (dark mode and light mode)
export const ThemeContext = createContext<Theme | undefined>(undefined);

// Declare the provider
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const LIGHT = { bg: "#F8FAFC", card: "#FFFFFF", text: "#0F172A" };
  const DARK = { bg: "#0F172A", card: "#1E293B", text: "#F1F5F9" };

  const [dark, setDark] = useState(false);

  const toggle = () => setDark((d) => !d);

  const colors = dark ? DARK : LIGHT;

  return (
    <ThemeContext.Provider value={{ dark, toggle, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}
// Create a useContext hook that screens and components can access as needed
export function useTheme() {
  const ctx = useContext(ThemeContext);
  // if guard
  if (ctx === undefined) {
    throw new Error(
      "useTheme must be used inside ThemeProvider. Check your _layout files",
    );
  }
  return ctx;
}
