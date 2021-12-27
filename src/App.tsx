import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global/styles';
import theme from './global/theme';
import { AuthProvider } from './hook/auth';
import { Routes } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
