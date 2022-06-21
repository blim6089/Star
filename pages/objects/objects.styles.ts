import styled from "styled-components";

export const SpaceObjectsContainer = styled.div`
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
  margin-bottom: 48px;

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

export const TableContainer = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
    flex-direction: column;
  }
`;

export const DetailViewContainer = styled.div`
  display: flex;
`;

export const AvatarContainer = styled.div`
  width: 53px;
  height: 53px;
  border-radius: 30px;
  overflow: hidden;
`;
