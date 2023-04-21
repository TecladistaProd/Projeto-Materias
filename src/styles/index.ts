import { createGlobalStyle } from "styled-components";
import theme, { TTheme } from "./theme";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    color: ${({ theme }) => theme.color.neutrals.lightest};
    font-family: 'Roboto', sans-serif;
    transition: all ease-in 200ms;
  }
  html, body, div#root {
    display: flex;
    min-height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    background-color: ${({ theme }: { theme: TTheme }) =>
      theme.color.neutrals.darker};
  }
  #root {
    flex: 1;
  }
  input[type=password]::-ms-reveal, input[type=password]::-ms-clear {
    display: none;
  }
  a {
    text-decoration: none;
    &:active {
      background: none;
    }
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }

  ul {
    list-style: none;
  }

  *::-webkit-scrollbar-track
  {
    background-color: ${({ theme }) => theme.color.neutrals.darkest};
  }

  *::-webkit-scrollbar
  {
    width: 6px;
    background-color: ${({ theme }) => theme.color.neutrals.lighter};
  }

  *::-webkit-scrollbar-thumb
  {
    background-color: rgba(175, 175, 175, .6 );
    border-radius: 5px;
  }
`;

export { theme };
