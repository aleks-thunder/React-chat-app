import { DefaultTheme } from "styled-components";
import base from "../base";
import { lightColors } from ".";

const lightTheme: DefaultTheme = {
  ...base,
  colors: lightColors,
  isDark: false,
};

export default lightTheme;
