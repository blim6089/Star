import styled from "styled-components";

export const BadgeContainer = styled.span<{ color: "success" | "warning" }>`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => (props.color === `success` ? `#4fbf67` : `#FF9F38`)};
  background: ${(props) =>
    props.color === `success`
      ? `rgba(79, 191, 103, 0.1)`
      : `rgba(255, 159, 56, 0.1)`};
  padding: 6px 8px;
  border-radius: 4px;
`;
