import styled from "styled-components";

const styles = () => {}
export default styles;

export const ArrowContainer = styled.div`
  cursor: default;
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

export const MenuItemContainer = styled.li<{
  active: boolean;
  isChild: boolean;
}>`
  position: relative;
  width: 100%;
  height: ${(props) => (props.isChild ? 42 : 56)}px;
  border-radius: ${(props) => (props.isChild ? 8 : 12)}px;
  list-style: none;
  margin: 4px 0;
  background: ${(props) =>
    props.isChild && props.active ? `#31343f` : `#1F2128`};
  display: flex;
  align-items: center;
  padding: 0 12px 0 16px;
  transition: 0.2s;
  cursor: pointer;

  @media (max-width: 768px) {
    padding-left: ${(props) => (props.isChild ? `16px` : `0`)};
  }

  &:hover {
    background: ${(props) => props.isChild && `#31343f`};

    @media (max-width: 768px) {
      background: #1f2128;
    }
    & > div {
      filter: brightness(100);
    }

    & > span {
      color: #fff;
    }
  }
`;

export const ChildMenuContainer = styled.div<{
  length: number;
  isOpen: boolean;
}>`
  display: flex;
  flex-direction: column;
  margin-left: 27px;
  padding-left: 24px;
  border-left: 1px solid rgba(228, 228, 228, 0.1);
  height: ${(props) => (props.isOpen ? props.length * 50 : 0)}px;
  overflow: hidden;
  transition: 0.2s;

  @media (max-width: 768px) {
    margin-left: 12px;
  }
`;

export const IconContainer = styled.div<{ active: boolean }>`
  width: 24px;
  height: 24px;
  filter: ${(props) => (props.active ? `brightness(100)` : `none`)};
  margin-right: 16px;
`;

export const Label = styled.span<{ active: boolean; isChild: boolean }>`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: ${(props) => (props.isChild ? 12 : 14)}px;
  line-height: ${(props) => (props.isChild ? 20 : 24)}px;
  color: ${(props) => (props.active ? `#FFF` : `#777e90`)};
  @media (max-width: 768px) {
    margin-left: 12px;
  }
`;
