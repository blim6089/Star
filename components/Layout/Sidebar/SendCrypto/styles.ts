import styled from "styled-components";

export const SendCryptoContainer = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(223.58deg, #86e1a0 12.52%, #4fbf67 75.73%);
  border-radius: 24px;
  padding: 24px;
`;

export const Typography = styled.p`
  max-width: 128px;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  height: 40px;
  background: #ffffff;
  border-radius: 12px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #11142d;
  border: none;
  outline: none;
  padding: 0 24px;
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background: #242731;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  top: 16px;
  right: 16px;
`;
