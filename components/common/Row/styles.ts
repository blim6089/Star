import styled from "styled-components";

const styles = () => {}
export default styles;

export const RowContainer = styled.div<{ spacing: number }>`
  width: ${(props) => `calc(100% + ${props.spacing}px)`};
  display: flex;
  flex-wrap: wrap;
  margin-left: -${(props) => props.spacing}px;
`;
