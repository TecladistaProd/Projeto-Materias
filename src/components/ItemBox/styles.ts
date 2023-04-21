import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  flex-shrink: 0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.neutrals.darker_1};
  padding: 20px;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  height: 390px;
  max-width: calc(100vw - 96px);
  --max-w: calc(100vw - 96px);
  --w: 330px;
  z-index: 1;
  @media screen and (min-width: 826px) {
    &:not(.expanded) {
      max-width: 330px;
      --max-w: 330px;
    }
  }
  @media screen and (max-width: 825px) {
    &:not(.expanded) {
      width: calc(100vw - 96px);
      --w: calc(100vw - 96px);
      flex: 1;
    }
  }
  &.expanded {
    height: 520px;
    flex-direction: row;
    @media screen and (max-width: 1039px) {
      height: fit-content;
      flex-direction: column;
      * {
        flex: 1 0;
      }
    }
    * {
      flex-shrink: 0;
    }
  }
  &:hover:not(.expanded) {
    box-shadow: 0 0 20px 1px ${({ theme }) => theme.color.neutrals.dark},
      0 0 10px 0 ${({ theme }) => theme.color.neutrals.medium};
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 8px;
  opacity: 1;
  z-index: 10;
  &:not(.expanded) {
    opacity: 0;
  }
  ${({ theme }) => css`
    border: 1px solid ${theme.color.neutrals.light};
    &:hover {
      background-color: ${theme.color.neutrals.light};
    }
    &:active {
      background-color: ${theme.color.neutrals.light};
      opacity: 0.6;
    }
  `}
`;

export const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
  display: flex;
  .thumbs {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
    opacity: 0;
    .img {
      padding: 10px;
      background: ${({ theme }) => theme.color.neutrals.dark};
      border-radius: 8px;
      &.active {
        background: ${({ theme }) => theme.color.neutrals.medium};
      }
      &:hover:not(.active) {
        background: ${({ theme }) => theme.color.neutrals.darker};
        box-shadow: 0 0 2px ${({ theme }) => theme.color.neutrals.light};
      }
      img {
        width: 65px;
        object-fit: cover;
      }
    }
  }
  .row {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 6px;
    opacity: 0;
  }
  .row,
  .thumbs {
    transition-delay: 100ms;
    transition-duration: 200ms;
  }
  &:not(.expanded) {
    width: 100%;
  }
  &.expanded {
    width: 42vw;
    height: 100%;
    flex-direction: column;
    @media screen and (max-width: 1039px) {
      width: 100%;
    }
    .thumbs,
    .row {
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  width: 270px;
  margin: 0 auto;
  &.expanded {
    width: auto;
    height: calc(100% - 60px);
    @media screen and (max-width: 1039px) {
      width: calc(100% - 60px);
    }
    object-fit: cover;
    margin: auto;
  }
`;

export const ImgArrowBtn = styled.button`
  padding: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.neutrals.darkest};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.color.neutrals.darker};
  }
  &:active {
    background-color: ${({ theme }) => theme.color.neutrals.darker};
    opacity: 0.6;
  }
`;

export const Col = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  &:not(.expanded) {
    width: 100%;
    *.only-expanded {
      opacity: 0;
    }
  }
  *.only-expanded {
    opacity: 1;
  }
  @media screen and (max-width: 1039px) {
    width: 100%;
    height: fit-content;
  }
  &.expanded {
    padding: 20px;
    padding-bottom: 10px;
    height: 100%;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.neutrals.lightest};
  font-size: 14px;
  max-width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 20px;
  text-transform: lowercase;
  &.expanded {
    text-transform: unset;
    font-size: 24px;
    margin-bottom: 10px;
  }
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: auto;
  flex: 1;
  max-height: 100%;
  height: 100%;
  @media screen and (max-width: 1039px) {
    margin-bottom: 32px;
  }
  &.only-expanded:not(.expanded) {
    height: 0;
    overflow: hidden;
    padding: 0;
    margin: 0;
    flex: 0;
  }
  div.info-row {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    width: fit-content;
    &.is-2 {
      margin-bottom: 10px;
    }
  }
  p.is-2 {
    font-size: 14px;
  }
  p.info-name {
    font-weight: 300;
  }
  p.info-text {
    font-weight: 600;
  }
  h3.info-title {
    font-size: 16px;
    font-weight: 500;
    margin-top: 24px;
    margin-bottom: 18px;
  }
  ${({ theme }) => css`
    ul.info-list {
      display: flex;
      margin-top: 20px;
      gap: 20px;
      width: fit-content;
      li {
        position: relative;
        &:not(:first-child)::before {
          position: absolute;
          left: -12px;
          top: 50%;
          transform: translate(0, -50%);
          content: "";
          width: 3.7px;
          height: 3.7px;
          border-radius: 50%;
          background-color: ${theme.color.neutrals.lighter};
        }
        padding: 10px 8px;
        border-top: 1px solid ${theme.color.neutrals.medium};
        border-bottom: 1px solid ${theme.color.neutrals.medium};
        font-size: 13px;
        font-weight: 300;
        display: inline-flex;
        align-items: center;
        span {
          margin-left: 5px;
          margin-right: 4px;
        }
      }
    }
  `}
`;

export const BtnRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  &:not(.expanded) .col,
  & {
    justify-content: space-between;
    width: 100%;
  }
  &.expanded .col {
    flex: 1 0;
    width: 100%;
  }
  .col {
    flex: 1
    max-width: max-content;
    &,
    .i-col {
      gap: 8px;
      display: inline-flex;
      align-items: center;
    }
    .i-col {
      max-width: fit-content;
    }
  }
`;

export const IconBtn = styled.button<{ "is-down"?: boolean }>`
  ${({ theme, "is-down": isDown }) => css`
    outline: 1px solid ${theme.color.neutrals.light};
    gap: 4px;
    border-radius: 2px;
    padding: 4px 6px;
    max-width: fit-content;
    display: flex;
    &,
    span {
      align-items: center;
      justify-content: center;
    }
    span {
      display: inline-flex;
    }
    &:not(.expanded) .only-expanded,
    &:not(.expanded).only-expanded {
      display: none;
    }
    &.expanded {
      padding: 15px 13px;
      font-size: 14px;
      .icon * {
        font-size: 18px;
      }
      ${isDown &&
      css`
        flex: 0 0 !important;
        min-width: 150px;
        max-width: max-content;
        width: auto;
        height: fit-content;
        background-color: ${theme.color.primary};
        outline-color: ${theme.color.primary};
        * {
          color: ${theme.color.neutrals.darkest} !important;
        }
        &:hover {
          background-color: ${theme.color.primary};
          outline: 1px solid ${theme.color.primary};
          opacity: 0.7;
        }
        &:active {
          background-color: ${theme.color.neutrals.light};
          outline: 1px solid ${theme.color.neutrals.lighter};
        }
      `}
      span:not(.icon) {
        display: none;
      }
    }
    .icon {
      flex: 0 0;
      * {
        font-size: 14px;
        color: ${isDown ? theme.color.primary : theme.color.neutrals.lightest};
      }
    }
    &:hover {
      background-color: ${theme.color.neutrals.medium};
      outline: 1px solid ${theme.color.neutrals.medium};
    }
    &:active {
      background-color: ${theme.color.neutrals.light};
      outline: 1px solid ${theme.color.neutrals.lighter};
    }
  `}
`;
