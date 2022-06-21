import styled from "styled-components";

export const DataGridContainer = styled.div``;

export const DataTable = styled.table`
  width: 100%;
  border-collapse: separate;
  margin-bottom: 64px;
  border-spacing: 0 12px;

  @media (max-width: 768px) {
    margin-bottom: 36px;
  }
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody`
  & tr {
    td {
      &:first-child {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
      }

      &:last-child {
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
      }
    }
    &:nth-child(even) {
      & > td {
        background: rgba(40, 42, 51, 0.32);
      }
    }
    &:nth-child(odd) {
      & > td {
        background: rgba(36, 39, 49, 0.2);
      }
    }
  }
`;
export const TableHeadRow = styled.tr`
  background: #353945;
  height: 60px;
  position: relative;
`;
export const TableHeadCol = styled.td`
  position: relative;
  z-index: 2;
  padding: 0 24px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #777e90;
  text-transform: uppercase;
  background: #23252c;

  &:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Pagination = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

export const PaginationItem = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 250px;
  background: ${(props) => (props.active ? `#EBCD81` : `none`)};
  list-style: none;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  border: ${(props) => (props.active ? `none` : `2px solid #353945 `)};
  color: ${(props) => (props.active ? `#353945` : `#fcfcf9`)};
  cursor: pointer;
  margin-right: 8px;
`;

export const PaginationActionContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

export const PaginationAction = styled.button<{ active: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  cursor: pointer;
  background: none;
  outline: none;
  border: ${(props) => (props.active ? `2px solid #FCFCF9` : `none`)};
  opacity: ${(props) => (props.active ? 1 : 0.7)};
  margin-left: 24px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
