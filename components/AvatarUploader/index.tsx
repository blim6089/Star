import React, { useRef, useState } from "react";
import Image from "next/image";
import Button from "../common/Button";
import {
  AvatarContainer,
  AvatarUploaderContainer,
  Description,
  File,
  Footer,
} from "./styles";
import Avatar from "/assets/images/avatar.png";

const AvatarUploader: React.FC = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<any>();

  const handleClick = () => {
    if (fileRef.current !== null) fileRef.current.click();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <AvatarUploaderContainer>
      <File
        type="file"
        ref={fileRef}
        onChange={handleChange}
        accept="image/*"
      />
      <AvatarContainer>
        <Image src={Avatar} width={128} height={128} alt=":( Not Found" />
        {file && <img src={file} alt=":( Not Found" />}
      </AvatarContainer>
      <Description>
        We recommended an image of at least 800x800px. Max 2mb.
      </Description>
      <Footer>
        <Button color="warning" fullWidth onClick={handleClick}>
          Upload image
        </Button>
        <Button fullWidth>Choose 3rd party NFT</Button>
      </Footer>
    </AvatarUploaderContainer>
  );
};

export default AvatarUploader;
