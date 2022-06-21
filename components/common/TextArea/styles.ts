import styled from "styled-components";

export const TextAreaContainer = styled.div<{ mb: number }>`
  margin-bottom: ${(props) => props.mb}px;
`;

export const Label = styled.label`
  display: flex;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #fcfcf9;
  margin-bottom: 12px;
`;

export const Text = styled.textarea<{ readOnly: boolean; height: number }>`
  width: 100%;
  height: ${(props) => props.height}px;
  background: rgba(49, 52, 63, 0.5);
  border: 2px solid rgba(73, 78, 91, 0.15);
  border-radius: 12px;
  outline: none;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fcfcf9;
  padding: 20px;
  padding-right: ${(props) => (props.readOnly ? 64 : 20)}px;

  &::placeholder {
    color: #7f8596;
  }

  &:read-only {
    color: #7f8596;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const LockIconContainer = styled.div`
  position: absolute;
  display: flex;
  right: 20px;
  top: 20px;
`;
