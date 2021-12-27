import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font: 400, 16px/1.6 'Poppins', sans-serif;

        background: ${({ theme }) => theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }

    input, button, textarea {
        font: 400, 16px/1.6 'Poppins', sans-serif;
        border: 0;
    }

    button {
        cursor: pointer;
    }
`;
