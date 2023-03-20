import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../src/styles";
import { ThemeContextProvider, useThemeContext } from "../src/context";
import store from "../src/store/store";

const ThemedApp = ({ children }) => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        {children}
      </Provider>
    </ThemeProvider>
  );
};

const globalDecorator = StoryFn => {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ThemedApp>
          <StoryFn />
        </ThemedApp>
      </ThemeContextProvider>
    </BrowserRouter>
  );
};

export const decorators = [globalDecorator];
