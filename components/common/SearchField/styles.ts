import styled from "styled-components";

export const SearchFieldContainer = styled.div`
  position: relative;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
`;

export const Input = styled.input`
  width: 336px;
  height: 48px;
  background: #31343f;
  border-radius: 250px;
  padding: 0 8px 0 44px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
  border: none;
  outline: none;

  &::placeholder {
    color: #7f8596;
  }
`;
