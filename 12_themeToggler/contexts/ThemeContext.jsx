import React, { useContext } from "react";

export const ThemeContext = React.createContext({
  theme: "light",
  // lightTheme: () => {},
  // darkTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

// Custom Hook

export default function useTheme() {
  return useContext(ThemeContext);
}


// import ThemeContext frmo ".ThemeContext";
// import {useContext} from "react"

// const {theme} = useContext(ThemeContext)