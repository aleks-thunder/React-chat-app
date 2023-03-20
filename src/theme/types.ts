import { mediaQueries, shadows, radii, fontWeights, breakpoints } from "./base";
import { baseColors, darkColors } from "./colors";

export type MediaQueries = typeof mediaQueries;

export type Breakpoints = typeof breakpoints;

export type Radii = typeof radii;

export type Shadows = typeof shadows;

export type FontWeights = typeof fontWeights;

export type BaseColors = {
  [property in keyof typeof baseColors]: string;
};

export type CustomColors = {
  [property in keyof typeof darkColors]: string;
};

export interface Colors extends BaseColors, CustomColors {}
