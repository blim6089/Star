import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
`;

export const MainContainer = styled.div`
  width: 100%;
  padding: 0 64px;
  padding-left: 320px;

  @media (max-width: 768px) {
    padding: 0 25px;
    padding-top: 72px;
  }
`;

export const PageContent = styled.div`
  padding-bottom: 64px;
  @media (max-width: 768px) {
    padding-bottom: 24px;
  }
`;
