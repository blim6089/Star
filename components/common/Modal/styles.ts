import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  background: #22252d;
  opacity: 0.97;
  position: absolute;
`;

export const ModalContent = styled.div<{ size: number }>`
  width: ${(props) => props.size || 400}px;
  position: relative;
  z-index: 1;
  background: #1f2128;
  border: 1px solid #2c2f39;
  box-shadow: 0px 40px 64px -24px rgba(0, 0, 0, 0.12);
  border-radius: 24px;
  min-height: 100px;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  position: absolute;
  top: 20px;
  right: 20px;
`;
