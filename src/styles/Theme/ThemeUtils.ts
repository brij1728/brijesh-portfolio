// import { rgba } from "polished";

export const primaryColors = {
  primaryBackground: "#F5F5F5",
  primaryText: "#4A4A4A",
  accent1: "#FF6B6B",
  primaryBorder: "#D1D1D1",
  active: "#E55959",
};

export const secondaryColors = {
  secondaryBackground: "#3498eb",
  secondaryText: "#1976d2",
  accent2: "#E74C3C",
  secondaryBorder: "#28283D",
};

export const breakpoints = {
  xs: "0px", // Extra Small devices
  sm: "600px", // Small devices
  md: "900px", // Medium devices
  lg: "1200px", // Large devices
  xl: "1536px", // Extra Large devices
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
    md: 30,
    lg: 40,
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
