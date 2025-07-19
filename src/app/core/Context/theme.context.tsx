import { darkTheme, lightTheme } from '@core/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { createContext, useContext, useMemo, useState } from 'react';

interface ThemeContextValue {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeModeContext = createContext<ThemeContextValue | null>(null);

export const ThemeContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleTheme = (): void => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () => (mode === 'light' ? lightTheme : darkTheme),
    [mode],
  );

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = (): ThemeContextValue => {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) throw new Error('useThemeMode must be used within ThemeWrapper');
  return ctx;
};
