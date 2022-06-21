import React from "react";
import Image from "next/image";
import { SendCryptoContainer, CloseButton, Typography, Button } from "./styles";

const SendCrypto: React.FC = () => {
  return (
    <SendCryptoContainer>
      <CloseButton>
        <Image
          src="/assets/images/icons/remove.svg"
          width={12}
          height={12}
          alt=":( Not Found"
        />
      </CloseButton>
      <Typography>Send Cryto to An Email Address</Typography>
      <Button>Send Now</Button>
    </SendCryptoContainer>
  );
};

export default SendCrypto;
