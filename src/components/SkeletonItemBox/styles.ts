import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    border-radius: 8px;
    background-color: ${theme.color.neutrals.darker_1};
    padding: 20px;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    height: 390px;
    animation: blink ease 1s infinite alternate;
    @media screen and (max-width: 800px) {
      width: calc(100vw - 48px);
    }
    @media screen and (min-width: 826px) {
      width: 330px;
    }
    @media screen and (max-width: 825px) {
      &:not(.expanded) {
        width: calc(100vw - 48px);
        --w: calc(100vw - 48px);
        flex: 1;
      }
    }

    div.img {
      width: 270px;
      height: 270px;
      background: ${theme.color.neutrals.darker};
      margin: 0 auto;
      border-radius: 50%;
      max-width: 100%;
      box-shadow: inset 0px 0px 20px 10px ${theme.color.neutrals.medium};
      animation: changeColor 800ms ease infinite alternate;
    }

    div.title {
      width: 70%;
      height: 24px;
    }

    div.title,
    div.btns {
      background-image: linear-gradient(
        118deg,
        ${theme.color.neutrals.darker_1} 8%,
        ${theme.color.neutrals.medium} 18%,
        ${theme.color.neutrals.darker_1} 33%
      );
      filter: blur(3px);
      background-size: 200% 100%;
      margin-top: 10px;
      border-radius: 4px;
      animation: skel 1350ms linear infinite forwards;
    }

    div.btns {
      margin-top: auto;
      width: 100%;
      height: 24px;
      animation-duration: 1300ms;
      animation-direction: reverse;
      animation-delay: 100ms;
    }

    @keyframes blink {
      from {
        box-shadow: 0 0 1px 1px ${theme.color.neutrals.darkest};
      }
      to {
        box-shadow: 0 0 15px 1px ${theme.color.neutrals.dark},
          0 0 7px 0 ${theme.color.neutrals.medium};
      }
    }

    @keyframes changeBg {
      from {
        background: ${theme.color.neutrals.medium};
      }
      to {
        background: ${theme.color.neutrals.darker};
      }
    }

    @keyframes changeColor {
      from {
        box-shadow: inset 0px 0px 10px 5px ${theme.color.neutrals.medium};
      }
      to {
        box-shadow: inset 0px 0px 20px 10px ${theme.color.neutrals.darkest};
      }
    }

    @keyframes skel {
      to {
        background-position-x: -200%;
      }
    }
  `};
`;
