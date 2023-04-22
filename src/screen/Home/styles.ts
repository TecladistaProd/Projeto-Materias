import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  flex: 1;
  padding: 48px;
  @media screen and (max-width: 1086px) {
    padding-top: 130px;
  }
  @media screen and (max-width: 800px) {
    padding: 24px;
    padding-top: 130px;
  }
  @media screen and (max-width: 560px) {
    padding-top: 180px;
  }
  @media screen and (max-width: 592px) {
    padding-top: 210px;
  }
  @media screen and (max-width: 375px) {
    padding-top: 240px;
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
