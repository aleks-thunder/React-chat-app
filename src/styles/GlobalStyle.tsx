import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    font-family: 'Verdana';
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    font-size: 16px;
    overflow-x: hidden;
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export default GlobalStyle;
