import styled from "styled-components";

export const MobileTopbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: #1f2128;
  z-index: 10;
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
  padding: 0;
`;

export const MenuButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
  padding: 0;
`;

export const Notification = styled.div`
  position: relative;
  display: flex;
`;

export const Count = styled.span`
  width: 16px;
  height: 16px;
  background: #e45f35;
  border-radius: 24px;
  font-family: "Inter";
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #fcfcf9;
  position: absolute;
  top: -4px;
  right: -4px;
  z-index: 10;
  cursor: pointer;
`;
