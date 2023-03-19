import { DefaultTheme } from "styled-components";
import base from "../base";
import { darkColors } from ".";

const darkTheme: DefaultTheme = {
  ...base,
  colors: darkColors,
  isDark: true,
};

export default darkTheme;
