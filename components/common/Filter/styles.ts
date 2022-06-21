import styled from "styled-components";

export const FilterContainer = styled.div`
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 12px;
  }
`;

export const Selector = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 156px;
  height: 48px;
  border-radius: 250px;
  border: 2px solid #494e5b;
  padding: 12px;
  cursor: pointer;

  @media (max-width: 768px) {
    min-width: auto;
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  z-index: 10;
  bottom: -12px;
  transform: translateY(100%);
`;

export const Value = styled.span`
  padding: 0 8px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #7f8596;
`;

export const ArrowContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`;
