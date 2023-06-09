export const breakpointMap = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
} as const;

export const breakpointsArray = ["320px", "375px", "425px", "768px", "1024px", "1440px"];

export const breakpoints = Object.assign(breakpointsArray, {
  mobileS: breakpointsArray[0],
  mobileM: breakpointsArray[1],
  mobileL: breakpointsArray[2],
  tablet: breakpointsArray[3],
  laptop: breakpointsArray[4],
  laptopL: breakpointsArray[5],
});

export const mediaQueries = {
  mobileS: `@media screen and (min-width: ${breakpointsArray[0]})`,
  mobileM: `@media screen and (min-width: ${breakpointsArray[1]})`,
  mobileL: `@media screen and (min-width: ${breakpointsArray[2]})`,
  tablet: `@media screen and (min-width: ${breakpointsArray[3]})`,
  laptop: `@media screen and (min-width: ${breakpointsArray[4]})`,
  laptopL: `@media screen and (min-width: ${breakpointsArray[5]})`,
} as const;

export const shadows = {
  textBox: "0px 0px 30px rgba(202, 199, 226, 0.5)",
} as const;

export const radii = {
  S: "8px",
  M: "12px",
  L: "40px",
  circle: "50%",
} as const;

export const fontWeights = {
  bold: 900,
  regular: 400,
} as const;

export const gradients = {
  chat: "linear-gradient(0deg, rgba(130, 130, 163, 1) 0%, rgba(63, 63, 80, 1) 80%);",
} as const;

export default {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  shadows,
  radii,
  fontWeights,
  gradients,
};
