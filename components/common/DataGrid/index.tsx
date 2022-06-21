import React, { useEffect, useState } from "react";
import Image from "next/image";
import Row from "./Row";
import Col from "./Col";
import {
  DataGridContainer,
  DataTable,
  TableHead,
  TableBody,
  TableHeadRow,
  TableHeadCol,
  PaginationContainer,
  Pagination,
  PaginationItem,
  PaginationActionContainer,
  PaginationAction,
} from "./styles";

interface DataGridProps {
  rows: object[];
  cols: string[];
  renderRow: any;
  pageRowCount?: number;
}

const DataGrid: React.FC<DataGridProps> = ({
  rows,
  cols,
  renderRow,
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
    <DataGridContainer>
      <DataTable>
        <TableHead>
          <TableHeadRow>
            {cols.map((col: string, index: number) => (
              <TableHeadCol key={index}>{col}</TableHeadCol>
            ))}
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(startIndex, endIndex)
            .map((row: object, index: number) => (
              <React.Fragment key={index}>{renderRow(row)}</React.Fragment>
            ))}
        </TableBody>
      </DataTable>
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
            />
          </PaginationAction>
          <PaginationAction active={index !== pageCount - 1}>
            <Image
              src="/assets/images/icons/arrow-right-light.svg"
              width={24}
              height={24}
              onClick={handleNext}
            />
          </PaginationAction>
        </PaginationActionContainer>
      </PaginationContainer>
    </DataGridContainer>
  );
};

export default DataGrid;
export { Col, Row };
