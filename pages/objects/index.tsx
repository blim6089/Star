import React, { useState } from "react";
import Router from "next/router";
import Image from "next/image";
import AddNewButton from "../../components/AddNewButton";
import Breadcrumb from "../../components/common/Breadcrumb";
import Button from "../../components/common/Button";
import Tab from "../../components/common/Tab";
import Filter from "../../components/common/Filter";
import DataGrid, { Row, Col } from "../../components/common/DataGrid";
import CardView from "../../components/common/CardView";
import SpaceObject from "../../components/SpaceObject";
import DeleteModal from "../../components/DeleteModal";
import {
  AvatarContainer,
  DetailViewContainer,
  Header,
  SpaceObjectsContainer,
  TableContainer,
  Title,
  Toolbar,
} from "./objects.styles";
import { Tab as TabType, SpaceObject as SpaceObjectType } from "../../types";
import useIsMobile from "../../hooks/useIsMobile";

const SpaceObjects: React.FC = () => {
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
  const rows: SpaceObjectType[] = [
    {
      id: 1,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 2,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 3,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 4,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 5,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 6,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 7,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 8,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 9,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 10,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 11,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 12,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 13,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 14,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 15,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 16,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 17,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 18,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 19,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 20,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 21,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: "/assets/images/material.png",
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
  ];
  const cols: string[] = ["Image", "Name", "Constellation", "Status"];

  const handleChangeTab = (id: string) => setSelectedTab(id);
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    rowID: number
  ) => {
    event.stopPropagation();
    Router.push(`/objects/${rowID}/edit`);
  };
  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(true);
  };
  const handleDelete = () => {
    setIsOpen(false);
  };

  const handleRedirect = (rowID: number) => {
    Router.push(`/objects/${rowID}/view`);
  };

  const renderRow = (row: SpaceObjectType) => {
    return (
      <Row onClick={() => handleRedirect(row.id)}>
        <Col>
          <AvatarContainer>
            <Image src={row.image} width={53} height={53} alt=":( Not Found" />
          </AvatarContainer>
        </Col>
        <Col>{row.name}</Col>
        <Col>{row.constellation}</Col>
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

  const breadcrumbs = ["Home", "Space Objects"];
  return (
    <SpaceObjectsContainer>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Header>
        <Title>Space Objects</Title>
        <AddNewButton url="/objects/new/create" />
      </Header>
      <Toolbar>
        <Filter />
        {!isMobile && (
          <Tab tabs={tabs} active={selectedTab} onChange={handleChangeTab} />
        )}
      </Toolbar>
      {isMobile ? (
        <DetailViewContainer>
          <CardView rows={rows} renderCard={SpaceObject} />
        </DetailViewContainer>
      ) : (
        <>
          {selectedTab !== "list" ? (
            <DetailViewContainer>
              <CardView rows={rows} renderCard={SpaceObject} />
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
    </SpaceObjectsContainer>
  );
};

export default SpaceObjects;
