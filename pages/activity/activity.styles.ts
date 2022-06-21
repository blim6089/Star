import styled from "styled-components";

export const ActivityContainer = styled.div`
  padding-top: 60px;
`;

export const Title = styled.p`
  width: 100%;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  color: #fcfcfd;

  @media (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const TableContainer = styled.div``;

export const ActivityTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const ActivityAuthor = styled.p`
  font-size: 14px;
  line-height: 24px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const ActivityDate = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #808191;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
  }
`;
