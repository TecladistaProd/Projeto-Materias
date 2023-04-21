import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      neutrals: {
        lightest: string;
        lighter: string;
        light: string;
        medium: string;
        dark: string;
        darker_1: string;
        darker: string;
        darkest: string;
      };
      primary: string;
      secondary: string;
      opacityWhite: string;
    };
  }
}
