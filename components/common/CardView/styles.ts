import styled from "styled-components";

export const CardViewContainer = styled.div`
  width: 100%;
`;

export const CardItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -16px -18px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 12px;
  }
`;

export const CardItemContainer = styled.div`
  width: 50%;
  padding: 16px 18px;

  @media (max-width: 1024px) {
    padding: 0;
    width: 100%;
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
