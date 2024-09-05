import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("white");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "white" ? "dark" : "white"));
  };

  return(
    <ThemeContext.Provider value={{theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )

}
export default ThemeProvider;
