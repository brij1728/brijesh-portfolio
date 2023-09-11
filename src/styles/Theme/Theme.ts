import {
  accentColors,
  breakpoints,
  fontSizes,
  primaryColors,
  secondaryColors,
  space,
} from "./ThemeUtils";

import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    breakpoints: { [key in keyof typeof breakpoints]: string };
    fontSizes: FontSizes;
    space: string[];
    primaryColors: { [key in keyof typeof primaryColors]: string };
    secondaryColors: { [key in keyof typeof secondaryColors]: string };
    accentColors: { [key in keyof typeof accentColors]: string };
  }
}

export const theme: DefaultTheme = {
  breakpoints,
  space,
  primaryColors,
  secondaryColors,
  accentColors,
  fontSizes,
};

interface FontSizeStructure {
  sm: number;
  md: number;
  lg: number;
}

interface FontSizes {
  small: number;
  medium: number;
  large: number;
  h5: FontSizeStructure;
  h4: FontSizeStructure;
  h3: FontSizeStructure;
  h2: FontSizeStructure;
  h1: FontSizeStructure;
}
