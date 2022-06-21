import React, { useEffect } from "react";
import Image from "next/image";
import { Backdrop, CloseButton, ModalContainer, ModalContent } from "./styles";

interface ModalProps {
  isOpen: boolean;
  size?: number;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  size = 400,
}) => {
  return (
    <>
      {isOpen && (
        <ModalContainer>
          <Backdrop onClick={onClose} />
          <ModalContent size={size}>
            <CloseButton onClick={onClose}>
              <Image
                src="/assets/images/icons/close.svg"
                width={20}
                height={20}
                alt=":("
              />
            </CloseButton>
            {children}
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
