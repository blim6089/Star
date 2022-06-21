import React, { useState } from "react";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import Menu from "../Menu";
import ArrowDownIcon from "../../../assets/images/icons/chevron-down.svg";
import {
  ArrowContainer,
  SortByContainer,
  MenuContainer,
  Value,
  Selector,
} from "./styles";
import { Action } from "../../../types";

const SortBy: React.FC = () => {
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
      <SortByContainer>
        <Selector onClick={handleToggle}>
          <Image
            src="/assets/images/icons/sort.svg"
            width={24}
            height={24}
            alt=":( Not Found"
          />
          <Value>Sort by</Value>
          <ArrowContainer>
            <Image
              src={ArrowDownIcon}
              width={24}
              height={24}
              alt=":( Not Found"
            />
          </ArrowContainer>
        </Selector>
        {isOpen && (
          <MenuContainer>
            <Menu actions={actions} label="Name" />
          </MenuContainer>
        )}
      </SortByContainer>
    </OutsideClickHandler>
  );
};

export default SortBy;
