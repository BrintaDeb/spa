import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'daylight',
  isTwilight: false,
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('samariya_theme') || 'daylight';
    } catch (e) {
      return 'daylight';
    }
  });

  const isTwilight = theme === 'twilight';

  useEffect(() => {
    try {
      localStorage.setItem('samariya_theme', theme);
    } catch (e) {}

    const root = document.documentElement;
    if (theme === 'twilight') {
      root.classList.add('dark', 'twilight');
    } else {
      root.classList.remove('dark', 'twilight');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'daylight' ? 'twilight' : 'daylight'));
  };

  return (
    <ThemeContext.Provider value={{ theme, isTwilight, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;

