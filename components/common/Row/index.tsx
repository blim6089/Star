import React, { Children } from "react";
import { RowContainer } from "./styles";

interface RowProps {
  spacing?: number;
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ spacing = 20, children }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { spacing });
    }
    return child;
  });
  return <RowContainer spacing={spacing}>{childrenWithProps}</RowContainer>;
};

export default Row;
