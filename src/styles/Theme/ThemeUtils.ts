import { rgba } from "polished";

export const primaryColors = {
  primary_01: "#fff",
  primary_02: "#ff4820",
  primary_03: "#052d56",
  primary_04: "#000000",
  primaryBackground: "#ee8b51bd",
  primaryHeader: "#9f71f8",
  primaryFooter: "#031b34",
  primaryBlog: "#042c54",
  primaryText: "#81afdd",
  primarySubtext: "#ff8a71",
  primaryGradientText: "#ae67fa",
  primaryGradientBackground: rgba(0, 40, 83, 1),
};

export const secondaryColors = {
  secondary_01: "red",
  secondary_02: "yellow",
  secondary_03: " #0e0e0e",
  secondaryBackground: "#ff0000",
  secondaryGradientText: "#f49867",
  secondarySubtext: "#71E5FF",
  secondaryGradientBackground: rgba(4, 12, 24, 1),
};

export const breakpoints = {
  xs: "0",
  sm: "650px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
export const fontSizes = {
  small: 14,
  medium: 16,
  large: 18,
  h5: {
    sm: 12,
    md: 14,
    lg: 16,
  },
  h4: {
    sm: 16,
    md: 18,
    lg: 22,
  },
  h3: {
    sm: 19,
    md: 22,
    lg: 28,
  },
  h2: {
    sm: 20,
    md: 22,
    lg: 24,
  },
  h1: {
    sm: 24,
    md: 26,
    lg: 30,
  },
};

export const space = [
  "0",
  ".4rem",
  ".8rem",
  "1.2rem",
  "1.6rem",
  "2.0rem",
  "3.2rem",
  "4.8rem",
  "6.4rem",
  "9.6rem",
];
// space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
//   fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
//   fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//   width: [16, 32, 64, 128, 256],
//   heights: [16, 32, 64, 128, 256],
//  fontSizes: {
//     small: 14,
//     medium: 16,
//     large: 18
//   },
//   colors: {
//     black: '#000',
//     gray: ' #777',
//     'dark-gray': '#333',
//     'light-gray': '#eee',
//   },
