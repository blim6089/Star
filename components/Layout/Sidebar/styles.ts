import styled from "styled-components";

const styles = () => {}
export default styles;

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: 256px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid rgba(228, 228, 228, 0.1);
  padding: 20px;
  padding-top: 48px;
  flex-shrink: 0;
  z-index: 1000;
  background: #1f2128;
  overflow-y: overlay;
  position: fixed;
  top: 0;
  left: 0;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: #292d36;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 312px;
    padding-top: 32px;
    transform: translateX(${(props) => (props.isOpen ? 0 : -100)}%);
    transition: 0.3s;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  margin-bottom: 36px;
  @media (max-width: 768px) {
    height: auto;
    margin-bottom: 32px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: -4px 0;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const MenuContainer = styled.div`
  margin-bottom: 64px;
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  outline: none;
  position: fixed;
  top: 24px;
  left: 332px;
  padding: 0;
  z-index: 1000;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 15;
  background: rgba(49, 52, 63, 0.24);
  backdrop-filter: blur(18px);
`;
