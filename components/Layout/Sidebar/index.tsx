import React from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import SendCrypto from "./SendCrypto";
import useIsMobile from "../../../hooks/useIsMobile";
import { Route } from "../../../types";
import {
  Backdrop,
  CloseButton,
  LogoContainer,
  Menu,
  MenuContainer,
  SidebarContainer,
} from "./styles";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const isMobile = useIsMobile();
  const routes: Route[] = [
    {
      id: "home",
      label: "Home",
      path: "/",
      icon: "/assets/images/icons/sidebar/home.svg",
    },
    {
      id: "spaceobjs",
      label: "Space Objects",
      path: "/objects",
      icon: "/assets/images/icons/sidebar/star.svg",
      children: [
        {
          id: "objs",
          label: "Objects",
          path: "/objects",
        },
        {
          id: "tyes",
          label: "Types",
          path: "/objects/types",
        },
        {
          id: "attributes",
          label: "Attributes",
          path: "/objects/attributes",
        },
      ],
    },
    {
      id: "nfts",
      label: "NFT’s",
      path: "/nfts",
      icon: "/assets/images/icons/sidebar/image.svg",
      children: [
        {
          id: "stars",
          label: "Stars",
          path: "/nfts",
        },
      ],
    },
    {
      id: "news_articles",
      label: "News Articles",
      path: "/articles",
      icon: "/assets/images/icons/sidebar/paper.svg",
      children: [
        {
          id: "articles",
          label: "Articles",
          path: "/articles",
        },
        {
          id: "categories",
          label: "Categories",
          path: "/articles/categories",
        },
      ],
    },
    {
      id: "trivia",
      label: "Trivia",
      path: "/trivia",
      icon: "/assets/images/icons/sidebar/game.svg",
      children: [
        {
          id: "games",
          label: "Games",
          path: "/trivia",
        },
      ],
    },
    // {
    //   id: "settings",
    //   label: "Settings",
    //   path: "/settings",
    //   icon: SettingsIcon,
    // },
  ];

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <MenuContainer>
          <LogoContainer>
            <Image
              src="/assets/images/logo.svg"
              width={isMobile ? 164 : 178}
              height={isMobile ? 30 : 32}
              alt=":( Not Found"
            />
          </LogoContainer>
          <Menu>
            {routes.map((route: Route) => (
              <MenuItem key={route.id} {...route} onClose={onClose} />
            ))}
          </Menu>
        </MenuContainer>
        {isMobile ? (
          <MenuItem
            id="logout"
            label="Log Out"
            icon="/assets/images/icons/logout.svg"
            path="/"
            onClose={onClose}
          />
        ) : (
          <SendCrypto />
        )}
      </SidebarContainer>
      {isOpen && isMobile && (
        <>
          <CloseButton onClick={onClose}>
            <Image
              src="/assets/images/icons/dismiss.svg"
              width={24}
              height={24}
              alt=":( Not Found"
            />
          </CloseButton>
          <Backdrop />
        </>
      )}
    </>
  );
};

export default Sidebar;
