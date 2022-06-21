import React, { Children } from "react";
import { ColContainer } from "./styles";

interface ColProps {
  sm?: number;
  lg?: number;
  spacing?: number;
  children: React.ReactNode;
}

const Col: React.FC<ColProps> = ({
  sm = 12,
  lg = 12,
  spacing = 20,
  children,
}) => {
  return (
    <ColContainer sm={sm} lg={lg} spacing={spacing}>
      {children}
    </ColContainer>
  );
};

export default Col;
