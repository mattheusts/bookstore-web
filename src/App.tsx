import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global/styles';
import { AuthProvider } from './hook/auth';
import { useThemeSwitch } from './hook/ThemeSwitchContext';
import { Routes } from './routes';

function App() {
  const { theme } = useThemeSwitch();

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
