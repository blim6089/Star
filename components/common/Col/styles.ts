import styled from "styled-components";

export const ColContainer = styled.div<{
  sm: number;
  lg: number;
  spacing: number;
}>`
  flex-basis: ${(props) => (props.lg / 12) * 100}%;
  padding-left: ${(props) => props.spacing}px;

  @media (max-width: 1280px) {
    flex-basis: ${(props) => (props.sm / 12) * 100}%;
  }
`;
