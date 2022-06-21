import React, { useState } from "react";
import AddNewButton from "../../components/AddNewButton";
import Badge from "../../components/common/Badge";
import Breadcrumb from "../../components/common/Breadcrumb";
import Button from "../../components/common/Button";
import Tab from "../../components/common/Tab";
import Filter from "../../components/common/Filter";
import SortBy from "../../components/common/SortBy";
import DataGrid, { Row, Col } from "../../components/common/DataGrid";
import CardView from "../../components/common/CardView";
import Trivia from "../../components/Trivia";
import DeleteModal from "../../components/DeleteModal";
import {
  Actions,
  DetailViewContainer,
  Header,
  TriviaContainer,
  TableContainer,
  Title,
  Toolbar,
  TriviaTitle,
} from "./trivia.styles";
import { Tab as TabType, Trivia as TriviaType } from "../../types";
import Router from "next/router";
import useIsMobile from "../../hooks/useIsMobile";

const Trivias: React.FC = () => {
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
  const rows: TriviaType[] = [
    {
      id: 1,
      title: "Milky Way Galaxy Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 2,
      title: "Planets and Stars Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 3,
      title: "Milky Way Galaxy Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 4,
      title: "Planets and Stars Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 5,
      title: "Milky Way Galaxy Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 6,
      title: "Planets and Stars Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 7,
      title: "Milky Way Galaxy Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 8,
      title: "Planets and Stars Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 9,
      title: "Milky Way Galaxy Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 10,
      title: "Planets and Stars Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 11,
      title: "Milky Way Galaxy Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 12,
      title: "Planets and Stars Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 13,
      title: "Milky Way Galaxy Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 14,
      title: "Planets and Stars Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 15,
      title: "Milky Way Galaxy Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 16,
      title: "Planets and Stars Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 17,
      title: "Milky Way Galaxy Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 18,
      title: "Planets and Stars Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 19,
      title: "Milky Way Galaxy Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 20,
      title: "Planets and Stars Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
    {
      id: 21,
      title: "Milky Way Galaxy Trivia",
      author: "Chris Tate",
      date: "May 23, 2022",
      status: "Live",
      questionCount: 20,
      publishedAt: "Discoard",
    },
  ];
  const cols: string[] = ["Title", "Author", "Date", "Status", "Settings"];

  const handleChangeTab = (id: string) => setSelectedTab(id);
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    rowID: number
  ) => {
    event.stopPropagation();
    Router.push(`/trivia/${rowID}/edit`);
  };
  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(true);
  };
  const handleDelete = () => {
    setIsOpen(false);
  };

  const handleRedirect = (id: number) => {
    Router.push(`/trivia/${id}/view`);
  };

  const renderRow = (row: TriviaType) => {
    return (
      <Row onClick={() => handleRedirect(row.id)}>
        <Col>
          <TriviaTitle>{row.title}</TriviaTitle>
        </Col>
        <Col>{row.author}</Col>
        <Col>{row.date}</Col>
        <Col>
          <Badge color={row.status === "Live" ? "success" : "warning"}>
            {row.status}
          </Badge>
        </Col>
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

  const breadcrumbs = ["Home", "Trivia"];

  return (
    <TriviaContainer>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Header>
        <Title>Trivia</Title>
        <AddNewButton url="/trivia/new/create" />
      </Header>
      <Toolbar>
        <Actions>
          <Filter />
          <SortBy />
        </Actions>
        {!isMobile && (
          <Tab tabs={tabs} active={selectedTab} onChange={handleChangeTab} />
        )}
      </Toolbar>
      {isMobile ? (
        <DetailViewContainer>
          <CardView rows={rows} renderCard={Trivia} />
        </DetailViewContainer>
      ) : (
        <>
          {selectedTab !== "list" ? (
            <DetailViewContainer>
              <CardView rows={rows} renderCard={Trivia} />
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
    </TriviaContainer>
  );
};

export default Trivias;
