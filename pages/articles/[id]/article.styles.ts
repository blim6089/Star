import styled from "styled-components";

export const ArticleContainer = styled.div`
  padding-top: 32px;
  color: #fff;
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  color: #fcfcfd;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid #31343f;
  }
`;

export const Body = styled.div`
  display: flex;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;

  & > button {
    margin-left: 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    & > button {
      width: 100%;
      margin-left: 0;
      margin-bottom: 16px;
    }
  }
`;
