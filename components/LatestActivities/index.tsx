import React from "react";
import Image from "next/image";
import Router from "next/router";
import {
  LatestActivitiesContainer,
  Header,
  Title,
  Body,
  Footer,
  Link,
  MoreButton,
} from "./styles";
import { Activity as ActivityType } from "../../types";
import Activity from "../common/Activity";

interface LatestActivitiesProps {
  data: ActivityType[];
}

const LatestActivities: React.FC<LatestActivitiesProps> = ({ data }) => {
  return (
    <LatestActivitiesContainer>
      <Header>
        <Title>Latest Activities</Title>
        <MoreButton>
          <Image src="/assets/images/icons/more.svg" width={12} height={12} />
        </MoreButton>
      </Header>
      <Body>
        {data.map((activity: ActivityType) => (
          <Activity {...activity} key={activity.id} />
        ))}
      </Body>
      <Footer onClick={() => Router.push("/activity")}>
        <Image
          src="/assets/images/icons/arrow-right-1.svg"
          alt=":( Not Found"
          width={15}
          height={10}
        />
        <Link>View all activity</Link>
      </Footer>
    </LatestActivitiesContainer>
  );
};

export default LatestActivities;
