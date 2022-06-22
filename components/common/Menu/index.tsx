import React from "react";
import Image from "next/image";
import { Action } from "../../../types";
import { IconContainer, Label, MenuContainer, MenuItem } from "./styles";

interface MenuProps {
  label?: string;
  actions: Action[];
}

const Menu: React.FC<MenuProps> = ({ actions, label }) => {
  return (
    <MenuContainer>
      {label && <Label>{label}</Label>}
      {actions.map((action: Action, index: React.Key) => (
        <MenuItem onClick={() => action.action()} key={index}>
          {action.icon && (
            <IconContainer>
              <Image src={action.icon} width={24} height={24} alt=":( Not Found" />
            </IconContainer>
          )}
          {action.label}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default Menu;
