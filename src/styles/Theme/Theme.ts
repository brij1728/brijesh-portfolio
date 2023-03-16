import {
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
    fontSizes: {
      [key in keyof typeof fontSizes]?: typeof fontSizes[key] extends object
        ? Partial<typeof fontSizes[key]>
        : typeof fontSizes[key] extends object | null
        ? Partial<typeof fontSizes[key]> | null
        : typeof fontSizes[key] extends object | null | undefined
        ? Partial<typeof fontSizes[key]> | null | undefined
        : typeof fontSizes[key];
    };
    space: string[];
    primaryColors: { [key in keyof typeof primaryColors]: string };
    secondaryColors: { [key in keyof typeof secondaryColors]: string };
  }
}

export const theme: DefaultTheme = {
  breakpoints,
  space,
  primaryColors,
  secondaryColors,
  fontSizes,
};
