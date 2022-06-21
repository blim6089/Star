import styled from "styled-components";

const color = {
  default: "#FFF",
  success: "#30B28C",
  error: "#FA725F",
};

export const SelectContainer = styled.div<{ mb: number }>`
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

export const SelectInput = styled.select`
  width: 100%;
  height: 64px;
  border: 2px solid rgba(73, 78, 91, 0.15);
  border-radius: 12px;
  outline: none;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fcfcf9;
  padding: 0 20px;
  appearance: none;
  background: url("/assets/images/icons/chevron-down.svg") no-repeat rgba(49, 52, 63, 0.5);
  background-position: top 20px right 12px;
`;

export const HelperText = styled.p<{ status: "default" | "error" | "success" }>`
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  margin-top: 12px;
  color: ${(props) => color[props.status]};
`;
