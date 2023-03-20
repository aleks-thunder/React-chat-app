export const baseColors = {
  transparent: "transparent",
  black: "#0A0D14",
  white: "#FFFFFF",
  grey: "#9d9d9e",
  blue: "#246BFD",
  red: "#FF4747",
  green: "#50CF7C",
  yellow: "#FFAF4C",
} as const;

export const lightColors = {
  ...baseColors,
  primary: "#0a50b0",
  primaryLight: "#1865ce",
} as const;

// TODO
export const darkColors = {
  ...baseColors,
  primary: "#0a50b0",
  primaryLight: "#1865ce",
} as const;
