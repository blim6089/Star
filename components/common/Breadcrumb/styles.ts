import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BackText = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-left: 12px;
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.span<{ active: boolean }>`
  cursor: default;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => (props.active ? `#fcfcfd` : `#777E91`)};
`;

export const Icon = styled.div`
  display: flex;
  margin-left: 24px;
  margin-right: 24px;
`;
