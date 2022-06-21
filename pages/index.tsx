import React from "react";
import News from "../components/News";
import CreateNew from "../components/CreateNew";
import LatestActivities from "../components/LatestActivities";
import {
  Container,
  TopContainer,
  LatestActivitiesContainer,
} from "./index.styles";
import useIsMobile from "../hooks/useIsMobile";
import { Activity } from "../types";

const Home: React.FC = () => {
  const isMobile = useIsMobile();
  const latestActivities: Activity[] = [
    {
      id: 1,
      title: "New NFT Listed",
      date: "May 23, 2022",
      status: "Completed",
      author: "Chris Tate",
    },
    {
      id: 2,
      title: "News Article Edited",
      date: "May 23, 2022",
      status: "Pending",
      author: "Chris Tate",
    },
    {
      id: 3,
      title: "New Space Object Created",
      date: "May 23, 2022",
      status: "Completed",
      author: "Chris Tate",
    },
  ];

  return (
    <Container>
      <TopContainer>
        <News />
        {isMobile && <CreateNew />}
        <LatestActivitiesContainer>
          <LatestActivities data={latestActivities} />
        </LatestActivitiesContainer>
      </TopContainer>
      {!isMobile && <CreateNew />}
    </Container>
  );
};

export default Home;
