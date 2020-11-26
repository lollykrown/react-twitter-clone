// import React from 'react';
// import useTheme from '../hooks/useTheme';

// const THEMELIST = {
//   DARK: 'dark',
//   LIGHT: 'light',
// };

// const ThemeContext = React.createContext();

// const ThemeProvider = ({ children, startingTheme }) => {
//   const state = useTheme(startingTheme);

//   return (
//     <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
//   );
// };

// export { ThemeContext, ThemeProvider, THEMELIST };

import React, { useState, createContext } from "react";
import { lightTheme } from "../styles/theme";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  // const localSt = JSON.parse(localStorage.getItem('theme'))
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
