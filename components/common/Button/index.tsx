import React from "react";
import Image from "next/image";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  color?:
    | "white"
    | "link"
    | "success"
    | "light-warning"
    | "warning"
    | "light"
    | "danger"
    | "light-danger"
    | "yellow";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "xs" | "sm" | "md" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
  style?: object;
  mb?: number;
}

const Button: React.FC<ButtonProps> = ({
  color = "light",
  onClick = () => {},
  size = "lg",
  children,
  style,
  fullWidth = false,
  mb = 0,
}) => {
  return (
    <ButtonContainer
      onClick={(e) => onClick(e)}
      color={color}
      size={size}
      style={style}
      fullWidth={fullWidth}
      mb={mb}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
