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

    /* Scrollbar */
    ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-image: linear-gradient(0deg, #3640d0 0%, #879fdf 99%);
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
    border-radius: 100px;
  }
`;

export default GlobalStyle;
