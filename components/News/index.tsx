import React from "react";
import Image from "next/image";
import {
  Bold,
  CloseButton,
  Content,
  Description,
  ImageContainer,
  NewsContainer,
  Role,
  Title,
} from "./styles";
import useIsMobile from "../../hooks/useIsMobile";

const News: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <NewsContainer>
      <CloseButton>
        <Image
          src="/assets/images/icons/remove.svg"
          width={12}
          height={12}
          alt=":( Not Found"
        />
      </CloseButton>
      <Content>
        <Role>starledger admin</Role>
        <Title>
          Welcome back, <Bold>Chris Tate!</Bold>
        </Title>
        <Description>
          You’ve completed 80% of your tasks for this week! Keep it up and
          improve your score!
        </Description>
      </Content>
      <ImageContainer>
        <Image
          src="/assets/images/news-bg.png"
          width={isMobile ? 300 : 520}
          height={isMobile ? 256 : 444}
          alt=":( Not Found"
        />
      </ImageContainer>
    </NewsContainer>
  );
};

export default News;
