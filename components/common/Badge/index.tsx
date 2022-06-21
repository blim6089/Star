import React from "react";
import { BadgeContainer } from "./styles";

interface BadgeProps {
  color: "success" | "warning";
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ color = "success", children }) => {
  return <BadgeContainer color={color}>{children}</BadgeContainer>;
};

export default Badge;
