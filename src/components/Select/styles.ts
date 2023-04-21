import { sizeToPixel } from "@/utils/stylization";
import styled, { css, CSSObject } from "styled-components";
import { motion } from "framer-motion";

export interface ISProps {
  outlined: boolean;
  minW?: string | number;
}

export const Container = styled.div`
  position: relative;
  color: ${({ theme }) => theme.color.neutrals.lightest};
  height: fit-content;
  z-index: 1;
  &,
  * {
    font-size: 14px;
  }
`;
export const SelectBtn = styled.button<ISProps>`
  display: inline-flex;
  align-items: center;
  .is-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-top: 2px;
    padding-left: 3px;
    &.active svg {
      transform: rotate(180deg);
    }
  }
  ${({ minW }) =>
    !!minW &&
    css`
      min-width: ${sizeToPixel(minW)};
    `}
  ${({ theme, outlined }) =>
    outlined &&
    css`
      justify-content: space-between;
      padding: 8px;
      min-width: 160px;
      border-radius: 4px;
      border: 1px solid ${theme.color.neutrals.light};
      &:hover,
      &:active {
        border-color: ${theme.color.neutrals.light};
        box-shadow: 0 0 3px ${theme.color.neutrals.light};
      }
      &:active {
        box-shadow: 0 0 5px 1px ${theme.color.neutrals.light};
      }
    `}
`;

export const PopperContainer = styled.div<{ css: CSSObject }>`
  ${({ theme, css: style }) => css(style)};
  z-index: 99;
`;

export const SelectOpts = styled(motion.ul)`
  min-width: 100%;
  background-color: rgba(255, 255, 255, 0.17);
  backdrop-filter: blur(5px);
  padding: 4px;
  border-radius: 4px;
  li {
    width: 100%;
    height: fit-content;
  }
`;

export const Option = styled.button`
  padding: 8px;
  width: 100%;
  text-align: left;
  font-weight: bold;
  ${({ theme }) => css`
    color: ${theme.color.neutrals.dark};
    text-shadow: 0.5px 0.5px 2px ${theme.color.neutrals.lightest};
    &:hover {
      color: ${theme.color.neutrals.darkest};
      text-shadow: 0.5px 0.5px 2px ${theme.color.neutrals.lightest},
        1px 1px 2.5px ${theme.color.neutrals.lightest},
        2px 2px 3.5px ${theme.color.neutrals.lightest};
    }
    &:active {
      text-shadow: 0 0 2px ${theme.color.neutrals.darker},
        0 0 10px ${theme.color.neutrals.lightest},
        0 0 15px ${theme.color.neutrals.lightest},
        0 0 21px ${theme.color.neutrals.lightest},
        0 0 35px ${theme.color.primary}, 0 0 50px ${theme.color.primary},
        0 0 75px ${theme.color.primary}, 0 0 95px ${theme.color.primary},
        0 0 125px ${theme.color.primary};
    }
  `}
`;
