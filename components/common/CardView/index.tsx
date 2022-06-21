import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  CardViewContainer,
  CardItems,
  CardItemContainer,
  PaginationContainer,
  Pagination,
  PaginationItem,
  PaginationActionContainer,
  PaginationAction,
} from "./styles";

interface CardViewProps {
  rows: object[];
  renderCard: any;
  pageRowCount?: number;
}

const CardView: React.FC<CardViewProps> = ({
  rows,
  renderCard,
  pageRowCount = 10,
}) => {
  const dataLength = rows.length;
  const [index, setIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(
    pageRowCount > dataLength ? dataLength : pageRowCount
  );
  const pageCount: number = Math.ceil(dataLength / pageRowCount);
  const handleBack = () => {
    setIndex(index !== 0 ? index - 1 : 0);
  };

  const handleNext = () => {
    setIndex(index !== pageCount - 1 ? index + 1 : index);
  };

  useEffect(() => {
    setStartIndex(index * pageRowCount);
    const end = (index + 1) * pageRowCount;
    setEndIndex(end > dataLength ? dataLength : end);
  }, [index]);

  return (
    <CardViewContainer>
      <CardItems>
        {rows.slice(startIndex, endIndex).map((row: object, index: number) => (
          <CardItemContainer key={index}>{renderCard(row)}</CardItemContainer>
        ))}
      </CardItems>
      <PaginationContainer>
        <Pagination>
          {Object.keys(Array.from(Array(pageCount))).map((item: string) => (
            <PaginationItem
              key={item}
              active={Number(item) === index}
              onClick={() => setIndex(Number(item))}
            >
              {Number(item) + 1}
            </PaginationItem>
          ))}
        </Pagination>
        <PaginationActionContainer>
          <PaginationAction active={index !== 0} onClick={handleBack}>
            <Image
              src="/assets/images/icons/arrow-left-light.svg"
              width={24}
              height={24}
              alt=":( Not Found"
            />
          </PaginationAction>
          <PaginationAction
            active={index !== pageCount - 1}
            onClick={handleNext}
          >
            <Image
              src="/assets/images/icons/arrow-right-light.svg"
              width={24}
              height={24}
              alt=":( Not Found"
            />
          </PaginationAction>
        </PaginationActionContainer>
      </PaginationContainer>
    </CardViewContainer>
  );
};

export default CardView;
