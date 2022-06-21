import styled from "styled-components";

export const TopbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 0 36px;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Profile = styled.div`
  cursor: pointer;
  position: relative;
`;

export const MenuContainer = styled.div`
  position: absolute;
  z-index: 10;
  right: -10px;
  bottom: -10px;
  transform: translateY(100%);
`;
