import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { ThemeContextProvider, useThemeContext } from "context";
import { Provider } from "react-redux";
import store from "store/store";

import Navigation from "navigation";

const ThemedApp: React.FC = () => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ThemedApp />
      </ThemeContextProvider>
    </BrowserRouter>
  );
};

export default App;
