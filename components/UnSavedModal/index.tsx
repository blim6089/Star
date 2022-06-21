import React from "react";
import Image from "next/image";
import Button from "../common/Button";
import Modal from "../common/Modal";
import { Description, ModalContainer, SubTitle, Title } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  onCancel: () => void;
}

const UnSavedModal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, onSave, onCancel } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContainer>
        <Image
          src="/assets/images/icons/warning.svg"
          width={128}
          height={128}
          alt=":( Not Found"
        />
        <Title>Oh no...</Title>
        <SubTitle>You have unsaved changes</SubTitle>
        <Description>
          Do you want to save your changes before leaving?
        </Description>
        <Button fullWidth mb={12} color="white" onClick={onSave}>
          Save changes
        </Button>
        <Button fullWidth color="link" onClick={onCancel}>
          Cancel and exit
        </Button>
      </ModalContainer>
    </Modal>
  );
};

export default UnSavedModal;
