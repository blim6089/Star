import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 278px;
  background: #1f2128;
  border: 2px solid #2c2f39;
  box-shadow: 0px 32px 64px -16px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 12px;
`;

export const Label = styled.span`
  display: flex;
  padding: 6px 12px 18px;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #fcfcf9;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #7f8596;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 12px;
`;
