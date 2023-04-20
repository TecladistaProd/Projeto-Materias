import { createGlobalStyle } from "styled-components";
import theme from "./theme";

type TTheme = typeof theme;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif;
  }
  html, body, div#root {
    display: flex;
    min-height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
  #root {
    flex: 1;
  }
  input[type=password]::-ms-reveal, input[type=password]::-ms-clear {
    display: none;
  }
  a {
    color: #000;
    text-decoration: none;
    &:active {
      background: none;
    }
  }
  button {
    border: none;
    background: none;
  }

  *::-webkit-scrollbar-track
  {
    background-color: ${({ theme }: { theme: TTheme }) =>
      theme.color.neutrals.darkest};
  }

  *::-webkit-scrollbar
  {
    width: 8px;
    background-color: ${({ theme }) => theme.color.neutrals.lighter};
  }

  *::-webkit-scrollbar-thumb
  {
    background-color: rgba(75, 75, 75, .8 );
    border-radius: 5px;
  }
`;

export { theme };
