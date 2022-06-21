import React, { useState } from "react";
import Image from "next/image";
import AddNewButton from "../../components/AddNewButton";
import Breadcrumb from "../../components/common/Breadcrumb";
import Button from "../../components/common/Button";
import Tab from "../../components/common/Tab";
import Filter from "../../components/common/Filter";
import DataGrid, { Row, Col } from "../../components/common/DataGrid";
import CardView from "../../components/common/CardView";
import NFT from "../../components/NFT";
import DeleteModal from "../../components/DeleteModal";
import {
  AvatarContainer,
  DetailViewContainer,
  Header,
  NFTsContainer,
  TableContainer,
  Title,
  Toolbar,
} from "./nfts.styles";
import { Tab as TabType, NFT as NFTType } from "../../types";
import Router from "next/router";
import useIsMobile from "../../hooks/useIsMobile";

const NFTs: React.FC = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("list");
  const tabs: TabType[] = [
    {
      id: "list",
      name: "List View",
    },
    {
      id: "detail",
      name: "Detail View",
    },
  ];
  const rows: NFTType[] = [
    {
      id: 1,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 2,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 3,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 4,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 5,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 6,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 7,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 8,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 9,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 10,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 11,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 12,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 13,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 14,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 15,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 16,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 17,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 18,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 19,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 20,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
    {
      id: 21,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: "/assets/images/material.png",
    },
  ];
  const cols: string[] = ["Image", "Name", "Owner", "Chain", "Status"];

  const handleChangeTab = (id: string) => setSelectedTab(id);
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    rowID: number
  ) => {
    event.stopPropagation();
    Router.push(`/nfts/${rowID}/edit`);
  };
  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(true);
  };
  const handleDelete = () => {
    setIsOpen(false);
  };

  const handleRedirect = (id: number) => {
    Router.push(`/nfts/${id}/view`);
  };

  const renderRow = (row: NFTType) => {
    return (
      <Row onClick={() => handleRedirect(row.id)}>
        <Col>
          <AvatarContainer>
            <Image src={row.image} width={53} height={53} alt=":( Not Found" />
          </AvatarContainer>
        </Col>
        <Col>{row.name}</Col>
        <Col>{row.owner}</Col>
        <Col>{row.chain}</Col>
        <Col>
          <Button
            size="xs"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              handleEdit(event, row.id)
            }
            style={{ marginRight: "10px" }}
          >
            Edit
          </Button>
          <Button size="xs" color="light-danger" onClick={handleOpenModal}>
            Delete
          </Button>
        </Col>
      </Row>
    );
  };

  const breadcrumbs = ["Home", "NFT’s"];

  return (
    <NFTsContainer>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Header>
        <Title>NFTs</Title>
        <AddNewButton url="/nfts/new/create" />
      </Header>
      <Toolbar>
        <Filter />
        {!isMobile && (
          <Tab tabs={tabs} active={selectedTab} onChange={handleChangeTab} />
        )}
      </Toolbar>
      {isMobile ? (
        <DetailViewContainer>
          <CardView rows={rows} renderCard={NFT} />
        </DetailViewContainer>
      ) : (
        <>
          {selectedTab !== "list" ? (
            <DetailViewContainer>
              <CardView rows={rows} renderCard={NFT} />
            </DetailViewContainer>
          ) : (
            <TableContainer>
              <DataGrid cols={cols} rows={rows} renderRow={renderRow} />
            </TableContainer>
          )}
        </>
      )}
      <DeleteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleDelete}
      />
    </NFTsContainer>
  );
};

export default NFTs;
