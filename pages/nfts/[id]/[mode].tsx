import React, { useState } from "react";
import { useRouter } from "next/router";
import Breadcrumb from "../../../components/common/Breadcrumb";
import Col from "../../../components/common/Col";
import Dropzone from "../../../components/common/Dropzone";
import Row from "../../../components/common/Row";
import TextField from "../../../components/common/TextField";
import Button from "../../../components/common/Button";
import UnSavedModal from "../../../components/UnSavedModal";
import DeleteModal from "../../../components/DeleteModal";
import {
  Body,
  Footer,
  DetailContainer,
  DropzoneContainer,
  NFTContainer,
  Title,
} from "./nft.styles";
import { NFT as NFTType } from "../../../types";
import useIsMobile from "../../../hooks/useIsMobile";

const NFT: React.FC = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const { id, mode } = router.query;
  const readonly = !(mode === "create" || mode === "edit");
  const initialForm: NFTType =
    mode === "create"
      ? {
          id: 1,
          name: "",
          owner: "",
          chain: "",
          ranking: "",
          rarity: "",
          link: "",
          image: null,
        }
      : {
          id: 1,
          name: "Antares",
          owner: "12e45dee8po9ed5...",
          chain: "Ethereum",
          ranking: "#10",
          rarity: "#10",
          link: "https://member.starledger.org/d245jdk/",
          image: "/assets/images/star.png",
        };
  const [isOpenUnSaveModal, setIsOpenUnSaveModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [pastForm, setPastForm] = useState<NFTType>({
    id: 1,
    name: "",
    owner: "",
    chain: "",
    ranking: "",
    rarity: "",
    link: "",
    image: null,
  });
  const [form, setForm] = useState<NFTType>(initialForm);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target)
      setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleChangeFile = (file: string | null) => {
    setForm({ ...form, image: file });
  };

  const handleEdit = () => {
    setPastForm(form);
    router.push(`/nfts/${id}/edit`);
  };
  const handleDelete = () => {
    setIsOpenDeleteModal(false);
  };
  const handleSave = () => {
    router.push(`/nfts/${id}/view`);
    setIsOpenUnSaveModal(false);
  };
  const handleCancelSave = () => {
    setForm(pastForm);
    router.push(`/nfts/${id}/view`);
    setIsOpenUnSaveModal(false);
  };
  const breadcrumbs = ["Home", "NFT’s", "Add New"];

  return (
    <NFTContainer>
      <Breadcrumb redirectURL="/nfts" breadcrumbs={breadcrumbs} />
      <Title>{isMobile && "Edit"} NFTs</Title>
      <Body>
        <DropzoneContainer>
          <Dropzone
            label="Star Image"
            value={form.image}
            readonly={readonly}
            onChange={(file) => handleChangeFile(file)}
          />
        </DropzoneContainer>
        <DetailContainer>
          <Row>
            <Col>
              <TextField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col>
              <TextField
                label="Owner"
                name="owner"
                icon="/assets/images/icons/alternate-email.svg"
                value={form.owner}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col lg={6} sm={12}>
              <TextField
                label="Ranking"
                name="ranking"
                value={form.ranking}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col lg={6} sm={12}>
              <TextField
                label="Rarity"
                name="rarity"
                value={form.rarity}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col>
              <TextField
                label="Link to related Space Object"
                name="link"
                value={form.link}
                onChange={handleChange}
                readonly={readonly}
                icon="/assets/images/icons/link.svg"
              />
            </Col>
          </Row>
        </DetailContainer>
      </Body>
      <Footer>
        {mode === "edit" && (
          <>
            <Button onClick={() => setIsOpenUnSaveModal(true)}>
              Cancel changes
            </Button>
            <Button color="success" onClick={handleSave}>
              Save changes
            </Button>
          </>
        )}
        {mode === "create" && (
          <Button color="success" onClick={handleSave}>
            Create NFT
          </Button>
        )}
        {mode === "view" && (
          <>
            <Button onClick={handleEdit}>Edit NFT</Button>
            <Button
              color="light-danger"
              onClick={() => setIsOpenDeleteModal(true)}
            >
              Delete NFT
            </Button>
          </>
        )}
      </Footer>
      <UnSavedModal
        isOpen={isOpenUnSaveModal}
        onClose={() => setIsOpenUnSaveModal(false)}
        onSave={handleSave}
        onCancel={handleCancelSave}
      />
      <DeleteModal
        isOpen={isOpenDeleteModal}
        onClose={() => setIsOpenDeleteModal(false)}
        onDelete={handleDelete}
      />
    </NFTContainer>
  );
};

export default NFT;
