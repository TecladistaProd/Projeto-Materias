import styled, { css } from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  flex: 1;
  background-color: ${({ theme }) => theme.color.neutrals.dark};
  border-radius: 4px;
  padding: 8px;
  gap: 8px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  flex: 1;
  &::placeholder {
    text-shadow: ${({ theme }) =>
      `0 0 1px ${theme.color.opacityWhite}, 0 0 1.5px ${theme.color.opacityWhite}, 0 0 2px ${theme.color.opacityWhite}`};
  }
`;

export const Btn = styled.button<{ isSearch?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.5;
  }
  ${({ theme, isSearch }) =>
    !isSearch &&
    css`
      border-radius: 2px;
      background-color: ${theme.color.neutrals.medium};
      width: 20px;
      height: 20px;
    `}
`;
