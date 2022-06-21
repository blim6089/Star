import styled from "styled-components";

export const LatestActivitiesContainer = styled.div`
  @media (max-width: 1024px) {
    margin-bottom: 60px;
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-family: "Montserrat";
    font-weight: 800;
    font-size: 24px;
    line-height: 100%;
  }
`;

export const MoreButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
`;

export const Body = styled.div`
  padding: 16px 0;

  & > div:last-child {
    border-bottom: 0;
  }
`;

export const Footer = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
`;

export const Link = styled.span`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #ebcd81;
  margin-left: 28px;
`;
