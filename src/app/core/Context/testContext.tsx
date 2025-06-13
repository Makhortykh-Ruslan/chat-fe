import React, { createContext, useContext, useState } from 'react';

interface ITestContext {
  theme: string;
  changeTheme: () => void;
}

export const ThemContext = createContext<ITestContext | null>(null);

export const ThemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThem] = useState('dark');

  const changeTheme = (): void => {
    setThem((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemContext.Provider>
  );
};

export const useTheme = (): ITestContext => {
  const context = useContext(ThemContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
