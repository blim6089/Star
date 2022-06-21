import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  border-radius: 20px;
  border: 1px solid #494e5b;
  padding: 32px 20px 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #242731;
    border: 1px solid #242731;
  }

  @media (max-width: 768px) {
    background: #242731;
    border: 1px solid #242731;
  }
`;
export const Name = styled.span`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  color: #ffffff;
  text-align: center;
`;

export const IconContainer = styled.div`
  width: 112px;
  height: 112px;
  border-radius: 64px;
  overflow: hidden;
  margin-bottom: 32px;
`;
