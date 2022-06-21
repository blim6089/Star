import React from "react";
import { ColContainer } from "./styles";

interface ColProps {
  children: any;
}

const Col: React.FC<ColProps> = ({ children }) => {
  return <ColContainer>{children}</ColContainer>;
};

export default Col;
