export const baseColors = {
  transparent: "transparent",
  black: "#0A0D14",
  white: "#FFFFFF",
  lightGrey: "#f5f5f5",
  grey: "#9d9d9e",
  blue: "#246BFD",
  background: "#3f3f50",
} as const;

export const lightColors = {
  ...baseColors,
  primary: "#0a50b0",
  primaryLight: "#1865ce",
  textMessage: "#cfeeff",
} as const;

// TODO
export const darkColors = {
  ...baseColors,
  primary: "#0a50b0",
  primaryLight: "#1865ce",
  textMessage: "#cfeeff",
} as const;
