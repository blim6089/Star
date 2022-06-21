import React, { useState } from "react";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import SearchField from "../../common/SearchField";
import Notification from "./Notification";
import Menu from "../../common/Menu";
import {
  MenuContainer,
  Profile,
  RightContainer,
  TopbarContainer,
} from "./styles";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);
  const actions = [
    {
      id: 1,
      label: "Log Out",
      icon: "/assets/images/icons/logout.svg",
      action: handleClose,
    },
  ];

  return (
    <TopbarContainer>
      <SearchField />
      <RightContainer>
        <Notification />
        <OutsideClickHandler onOutsideClick={handleClose}>
          <Profile>
            <Image
              src="/assets/images/avatar.png"
              width={48}
              height={48}
              alt=":( Not Found"
              onClick={handleToggle}
            />
            {isOpen && (
              <MenuContainer>
                <Menu actions={actions} />
              </MenuContainer>
            )}
          </Profile>
        </OutsideClickHandler>
      </RightContainer>
    </TopbarContainer>
  );
};

export default Topbar;
