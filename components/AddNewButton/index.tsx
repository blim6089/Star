import React from "react";
import Image from "next/image";
import Router from "next/router";
import Button from "../common/Button";
import { Container, AddText } from "./styles";

interface AddNewButtonProps {
  url: string;
}

const AddNewButton: React.FC<AddNewButtonProps> = ({ url }) => {
  return (
    <Button size="md" color="yellow" onClick={() => Router.push(url)}>
      <Container>
        <AddText>Add new</AddText>
        <Image
          src="/assets/images/icons/plus.svg"
          width={24}
          height={24}
          alt=":( Not Found"
        />
      </Container>
    </Button>
  );
};

export default AddNewButton;
