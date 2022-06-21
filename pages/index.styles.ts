import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 768px) {
    padding-top: 12px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  margin-bottom: 64px;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const LatestActivitiesContainer = styled.div`
  flex-shrink: 0;
  width: 362px;
  padding-left: 64px;

  @media (max-width: 1024px) {
    width: 100%;
    padding-left: 0;
  }
`;
