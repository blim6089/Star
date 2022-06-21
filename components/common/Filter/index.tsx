import React, { useState } from "react";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import Menu from "../Menu";
import {
  ArrowContainer,
  FilterContainer,
  MenuContainer,
  Value,
  Selector,
} from "./styles";
import { Action } from "../../../types";

const Filter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);
  const actions: Action[] = [
    {
      id: 1,
      label: "Placeholder",
      action: handleClose,
      icon: "/assets/images/icons/star.svg",
    },
    {
      id: 2,
      label: "Placeholder",
      action: handleClose,
      icon: "/assets/images/icons/star.svg",
    },
    {
      id: 3,
      label: "Placeholder",
      action: handleClose,
      icon: "/assets/images/icons/star.svg",
    },
    {
      id: 4,
      label: "Placeholder",
      action: handleClose,
      icon: "/assets/images/icons/star.svg",
    },
    {
      id: 5,
      label: "Placeholder",
      action: handleClose,
      icon: "/assets/images/icons/star.svg",
    },
  ];

  return (
    <OutsideClickHandler onOutsideClick={handleClose}>
      <FilterContainer>
        <Selector onClick={handleToggle}>
          <Image
            src="/assets/images/icons/filter.svg"
            width={24}
            height={24}
            alt=":( Not Found"
          />
          <Value>All</Value>
          <ArrowContainer>
            <Image
              src="/assets/images/icons/chevron-down.svg"
              width={24}
              height={24}
              alt=":( Not Found"
            />
          </ArrowContainer>
        </Selector>
        {isOpen && (
          <MenuContainer>
            <Menu actions={actions} label="Consellation" />
          </MenuContainer>
        )}
      </FilterContainer>
    </OutsideClickHandler>
  );
};

export default Filter;
