import React, { useState } from "react";
import Image from "next/image";
import Router from "next/router";
import Button from "../common/Button";
import DeleteModal from "../DeleteModal";
import { NFT as NFTProps } from "../../types";
import {
  ActionContainer,
  AvatarContainer,
  Body,
  ButtonContainer,
  Owner,
  DeleteButton,
  DetailContainer,
  DetailInfo,
  EditButton,
  FormItem,
  Header,
  Label,
  Link,
  LinkContainer,
  LinkIcon,
  NFTContainer,
  Title,
  Value,
} from "./styles";
import useIsMobile from "../../hooks/useIsMobile";

const NFT: React.FC<NFTProps> = (props) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const handleRedirect = () => {
    Router.push(`/nfts/${props.id}/view`);
  };

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    Router.push(`/nfts/${props.id}/edit`);
  };
  const handleDelete = () => setIsOpen(true);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  return (
    <NFTContainer onClick={handleRedirect}>
      <Header>
        <DetailContainer>
          <AvatarContainer>
            <Image
              src={props.image}
              width={86}
              height={86}
              alt=":( Not Found"
            />
          </AvatarContainer>
          <DetailInfo>
            <Title>{props.name}</Title>
            <Owner>{props.owner}</Owner>
            {isMobile && (
              <LinkContainer>
                <LinkIcon>
                  <Image
                    src="/assets/images/icons/link.svg"
                    width={24}
                    height={24}
                    alt=":( Not Found"
                  />
                </LinkIcon>
                <Link>{props.link}</Link>
              </LinkContainer>
            )}
          </DetailInfo>
        </DetailContainer>
        <ActionContainer>
          {isMobile ? (
            <>
              <ButtonContainer>
                <Button
                  size="sm"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleEdit(e)
                  }
                  fullWidth
                >
                  Edit card
                </Button>
              </ButtonContainer>
              <ButtonContainer>
                <Button
                  size="sm"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleOpen(e)
                  }
                  fullWidth
                  color="light-danger"
                >
                  Remove card
                </Button>
              </ButtonContainer>
            </>
          ) : (
            <>
              <EditButton
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleEdit(e)
                }
              >
                <Image
                  src="/assets/images/icons/edit.svg"
                  width={24}
                  height={24}
                  alt=":( Not Found"
                />
              </EditButton>
              <DeleteButton onClick={handleOpen}>
                <Image
                  src="/assets/images/icons/trash.svg"
                  width={24}
                  height={24}
                  alt=":( Not Found"
                />
              </DeleteButton>
            </>
          )}
        </ActionContainer>
      </Header>
      <Body>
        <FormItem>
          <Label>Ranking</Label>
          <Value>{props.ranking}</Value>
        </FormItem>
        <FormItem>
          <Label>Rarity</Label>
          <Value>{props.rarity}</Value>
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <Label>Link to ralated Space Object</Label>
          <Value>{props.link}</Value>
        </FormItem>
      </Body>
      <DeleteModal
        isOpen={isOpen}
        onClose={() => alert(123)}
        onDelete={handleDelete}
      />
    </NFTContainer>
  );
};

export default NFT;
