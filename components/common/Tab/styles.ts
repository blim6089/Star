import styled from "styled-components";

export const TabContainer = styled.div<{ size: "small" | "large" }>`
  display: flex;
  padding: ${(props) => (props.size === `small` ? `none` : `6px 4px`)};
  background: ${(props) => (props.size === `small` ? `none` : `#282a33`)};
  border-radius: 250px;
  margin-left: ${(props) => (props.size === `small` ? -6 : 0)}px;
  margin-right: ${(props) => (props.size === `small` ? -6 : 0)}px;
`;

export const TabItem = styled.div<{ active: Boolean; size: "small" | "large" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${(props) => (props.size === `small` ? `auto` : `167.5px`)};
  height: ${(props) => (props.size === `small` ? 28 : 36)}px;
  padding: ${(props) => (props.size === `small` ? `0 12px` : `0 20px`)};
  margin: ${(props) => (props.size === `small` ? `0 6px` : `0`)};
  font-family: ${(props) => (props.size === `small` ? `Montserrat` : `Inter`)};
  font-weight: 600;
  font-size: 14px;
  line-height: ${(props) => (props.size === `small` ? 16 : 24)}px;
  color: ${(props) => (props.active ? `#FCFCF9` : `#7f8596`)};
  cursor: pointer;
  box-shadow: ${(props) =>
    props.active && props.size === "large"
      ? `0px 2px 4px -2px rgba(0, 0, 0, 0.31),
    inset 0px 1px 1px rgba(255, 255, 255, 0.05)`
      : `none`};
  background: ${(props) => (props.active ? `#31343f` : `none`)};
  border-radius: 250px;
`;
