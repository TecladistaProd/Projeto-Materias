import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  color: {
    neutrals: {
      lightest: "#fff",
      lighter: "#eee",
      light: "rgba(170, 170, 170, .5)",
      medium: "#444",
      dark: "#262626",
      darker: "#181818",
      darkest: "#040404",
    },
    primary: "#ffc400",
    secondary: "#fb3f45",
    opacityWhite: "rgba(240, 240, 240, .15)",
  },
};

export type TTheme = typeof theme;

export default theme;
