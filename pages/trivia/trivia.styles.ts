import styled from "styled-components";

export const TriviaContainer = styled.div`
  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  color: #fcfcfd;

  @media (max-width: 768px) {
    margin-bottom: 32px;
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
    margin-bottom: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
    flex-direction: column;
  }
`;

export const TableContainer = styled.div``;

export const DetailViewContainer = styled.div`
  display: flex;
`;

export const AvatarContainer = styled.div`
  width: 53px;
  height: 53px;
  border-radius: 30px;
  overflow: hidden;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    & > div {
      margin-right: 0;
    }
  }
`;

export const TriviaTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
`;
