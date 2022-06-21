import React from "react";
import { RowContainer } from "./styles";

interface RowProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ onClick, children }) => {
  return <RowContainer onClick={onClick}>{children}</RowContainer>;
};

export default Row;
