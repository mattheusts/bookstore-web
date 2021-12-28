import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { darkTheme, lightTheme } from '../global/theme';

const key = '@theme';

interface IThemeSwitchContextData {
  toggleTheme: () => void;
  theme: DefaultTheme;
  setTheme: Dispatch<SetStateAction<DefaultTheme>>;
}

interface ThemeSwitchProviderProps {
  children: React.ReactNode;
}

const ThemeSwitchContext = createContext({} as IThemeSwitchContextData);

function ThemeSwitchProvider({ children }: ThemeSwitchProviderProps) {
  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) return JSON.parse(storageValue);
    else return lightTheme;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeSwitchContext.Provider value={{ toggleTheme, theme, setTheme }}>
      {children}
    </ThemeSwitchContext.Provider>
  );
}

function useThemeSwitch() {
  const context = useContext(ThemeSwitchContext);
  return context;
}

export { useThemeSwitch, ThemeSwitchProvider };
