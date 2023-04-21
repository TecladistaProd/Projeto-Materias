import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  flex: 1;
  padding: 48px;
  @media screen and (max-width: 1086px) {
    padding-top: 130px;
  }
`;

export const ItemContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 28px 0;
  flex-flow: row wrap;
  z-index: 1;
`;
