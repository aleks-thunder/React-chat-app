export { darkColors, lightColors } from "./colors";
export { default as dark } from "./colors/dark";
export { default as light } from "./colors/light";

import { Colors, FontWeights, MediaQueries, Radii, Shadows, Breakpoints } from "./types";

export interface CustomTheme {
  siteWidth: number;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  shadows: Shadows;
  radii: Radii;
  fontWeights: FontWeights;
  colors: Colors;
  isDark: boolean;
}
