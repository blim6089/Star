import React from "react";
import Image from "next/image";
import Button from "../common/Button";
import Modal from "../common/Modal";
import { Description, ModalContainer, Title } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const UnSavedModal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, onDelete } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContainer>
        <Image
          src="/assets/images/icons/danger.svg"
          width={128}
          height={128}
          alt=":( Not Found"
        />
        <Title>You’re about to delete an object</Title>
        <Description>
          This will delete your item from our database. Are you sure?
        </Description>
        <Button fullWidth mb={12} color="danger" onClick={onDelete}>
          Delete object
        </Button>
        <Button fullWidth color="link" onClick={onClose}>
          Cancel and exit
        </Button>
      </ModalContainer>
    </Modal>
  );
};

export default UnSavedModal;
