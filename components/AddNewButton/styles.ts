import styled from "styled-components";

export const AddText = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  margin-right: 12px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
