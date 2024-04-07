import React, { useContext } from "react";

export const ThemeContext = React.createContext({
  theme: "light",
//   lightTheme: () => {},
//   darkTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

// Custom Hook

export default function useTheme() {
  return useContext(ThemeContext);
}
