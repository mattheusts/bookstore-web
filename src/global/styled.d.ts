import 'styled-components';
import { darkTheme } from './theme';

declare module 'styled-components' {
  type ThemeType = {
    title: string;
    colors: {
      background: string;
      shape: string;
      primary: string;
      yellow: string;
      green: string;
      blue: string;
      attention: string;
      orange: string;
      title: string;
      text: string;
      grey: string;
      whish: string;
      darkGreen: string;
      dark: string;
      black: string;
    };

    fonts: {
      regular: string;
      extra_regular: string;
      medium: string;
      bold: string;
    };
  };

  export interface DefaultTheme extends ThemeType {}
}
