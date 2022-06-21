import styled from "styled-components";

export const CreateNewContainer = styled.div`
  @media (max-width: 1024px) {
    margin-bottom: 0px;
  }

  @media (max-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #ffffff;
  margin-bottom: 48px;

  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 100%;
    font-weight: 800;
    margin-bottom: 32px;
  }
`;

export const Body = styled.div`
  display: flex;
  margin-left: -16px;
  margin-right: -16px;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  margin-left: 16px;
  margin-right: 16px;

  @media (max-width: 1024px) {
    margin: 0;
    margin-bottom: 16px;
  }
`;
