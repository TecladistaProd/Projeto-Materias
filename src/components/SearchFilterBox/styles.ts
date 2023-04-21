import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  max-width: calc(100vw - 32px);
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: ${({ theme }) => theme.color.opacityWhite};
  backdrop-filter: blur(10px);
  border-radius: 4px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Row = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  z-index: 1;
  justify-content: space-between;
  div.col {
    display: inline-flex;
  }
`;

export const MarkBtn = styled.button`
  background-color: ${({ theme }) => theme.color.neutrals.lightest};
  padding: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.5;
  }
  * {
    color: ${({ theme }) => theme.color.neutrals.darkest};
  }
`;

export const RemoveBtn = styled.button`
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.5;
  }
  svg {
    margin-right: 2px;
    margin-top: 1.5px;
  }
`;
