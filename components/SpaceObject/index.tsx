import React, { useState } from "react";
import Image from "next/image";
import Router from "next/router";
import DeleteModal from "../DeleteModal";
import Button from "../common/Button";
import { SpaceObject as SpaceObjectProps } from "../../types";
import {
  ActionContainer,
  Abbreviation,
  AbbreviationLabel,
  AbbreviationValue,
  AvatarContainer,
  Body,
  ButtonContainer,
  Constellation,
  DeleteButton,
  DetailContainer,
  DetailInfo,
  EditButton,
  FormItem,
  Header,
  Label,
  SpaceObjectContainer,
  Title,
  Value,
} from "./styles";
import useIsMobile from "../../hooks/useIsMobile";

const SpaceObject: React.FC<SpaceObjectProps> = (props) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const handleRedirect = () => {
    Router.push(`/objects/${props.id}/view`);
  };
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    Router.push(`/objects/${props.id}/edit`);
  };
  const handleDelete = () => setIsOpen(true);
  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <SpaceObjectContainer onClick={handleRedirect}>
      <Header>
        <DetailContainer>
          <AvatarContainer>
            <Image
              src={props.image}
              width={isMobile ? 60 : 86}
              height={isMobile ? 60 : 86}
              alt=":( Not Found"
            />
          </AvatarContainer>
          <DetailInfo>
            <Title>{props.name}</Title>
            <Constellation>{props.constellation}</Constellation>
            <Abbreviation>
              <AbbreviationLabel>Abbreviation</AbbreviationLabel>
              <AbbreviationValue>{props.abbreviation}</AbbreviationValue>
            </Abbreviation>
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
              <DeleteButton
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleOpen(e)
                }
              >
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
          <Label>Right Accession</Label>
          <Value>{props.rightAccession}</Value>
        </FormItem>
        <FormItem>
          <Label>Declination</Label>
          <Value>{props.declination}</Value>
        </FormItem>
        <FormItem>
          <Label>Stellar Constellation</Label>
          <Value>{props.stellar}</Value>
        </FormItem>
        <FormItem>
          <Label>BV Color</Label>
          <Value>{props.bvColor}</Value>
        </FormItem>
      </Body>
      <DeleteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleDelete}
      />
    </SpaceObjectContainer>
  );
};

export default SpaceObject;
