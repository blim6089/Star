import React from "react";
import Image from "next/image";
import Router from "next/router";
import { ItemContainer, Name, IconContainer } from "./styles";

interface Props {
  id: string;
  name: string;
  icon: any;
  path: string;
}

const Item: React.FC<Props> = (props) => {
  const { name, icon, path } = props;
  const handleRedirect = () => Router.push(path);

  return (
    <ItemContainer onClick={handleRedirect}>
      <IconContainer>
        <Image src={icon} width={112} height={112} alt=":( Not Found" />
      </IconContainer>
      <Name>{name}</Name>
    </ItemContainer>
  );
};

export default Item;
