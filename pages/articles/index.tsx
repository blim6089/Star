import React, { useState } from "react";
import AddNewButton from "../../components/AddNewButton";
import Breadcrumb from "../../components/common/Breadcrumb";
import Button from "../../components/common/Button";
import Tab from "../../components/common/Tab";
import Filter from "../../components/common/Filter";
import DataGrid, { Row, Col } from "../../components/common/DataGrid";
import CardView from "../../components/common/CardView";
import Article from "../../components/Article";
import DeleteModal from "../../components/DeleteModal";
import {
  ArticlesContainer,
  DetailViewContainer,
  Header,
  TableContainer,
  Title,
  Toolbar,
} from "./articles.styles";
import { Tab as TabType, Article as ArticleType } from "../../types";
import Router from "next/router";
import useIsMobile from "../../hooks/useIsMobile";

const Articles: React.FC = () => {
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
  const rows: ArticleType[] = [
    {
      id: 1,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 2,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 3,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 4,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 5,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 6,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 7,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 8,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 9,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 10,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 11,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 12,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 13,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 14,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 15,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 16,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 17,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 18,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 19,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 20,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 21,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
  ];
  const cols: string[] = ["Title", "Author", "Date", "Status"];

  const handleChangeTab = (id: string) => setSelectedTab(id);
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    rowID: number
  ) => {
    event.stopPropagation();
    Router.push(`/articles/${rowID}/edit`);
  };
  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(true);
  };
  const handleDelete = () => {
    setIsOpen(false);
  };

  const handleRedirect = (id: number) => {
    Router.push(`/articles/${id}/view`);
  };

  const renderRow = (row: ArticleType) => {
    return (
      <Row onClick={() => handleRedirect(row.id)}>
        <Col>{row.title}</Col>
        <Col>{row.author}</Col>
        <Col>{row.date}</Col>
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

  const breadcrumbs = ["Home", "News Articles"];

  return (
    <ArticlesContainer>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Header>
        <Title>News Articles</Title>
        <AddNewButton url="/articles/new/create" />
      </Header>
      <Toolbar>
        <Filter />
        {!isMobile && (
          <Tab tabs={tabs} active={selectedTab} onChange={handleChangeTab} />
        )}
      </Toolbar>
      {isMobile ? (
        <DetailViewContainer>
          <CardView rows={rows} renderCard={Article} />
        </DetailViewContainer>
      ) : (
        <>
          {selectedTab !== "list" ? (
            <DetailViewContainer>
              <CardView rows={rows} renderCard={Article} />
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
    </ArticlesContainer>
  );
};

export default Articles;
