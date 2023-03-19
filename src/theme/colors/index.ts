export const baseColors = {
  transparent: "transparent",
} as const;

export const lightColors = {
  ...baseColors,

  black: "#0A0D14",
  white: "#FFFFFF",

  grey: "#F7F7F7",
  primary: "#FF478A",
  blue: "#246BFD",
  red: "#FF4747",
  green: "#50CF7C",
  yellow: "#FFAF4C",
} as const;

export const darkColors = {
  ...baseColors,
  primary: "#FF478A",
  black: "#0A0D14",
  white: "#FFFFFF",
  grey: "#F7F7F7",
  blue: "#246BFD",
  red: "#FF4747",
  green: "#50CF7C",
  yellow: "#FFAF4C",
} as const;
