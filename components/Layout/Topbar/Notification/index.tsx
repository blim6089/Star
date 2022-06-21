import React from "react";
import Image from "next/image";
import { NotificationContainer, Dot } from "./styles";

interface NotificationProps {
  active?: boolean;
}

const Notification: React.FC<NotificationProps> = ({ active = true }) => {
  return (
    <NotificationContainer>
      <Image src="/assets/images/icons/bell.svg" width={24} height={24} alt=":( Not Found" />
      {active && <Dot />}
    </NotificationContainer>
  );
};

export default Notification;
