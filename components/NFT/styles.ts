import styled from "styled-components";

export const NFTContainer = styled.div`
  width: 100%;
  background: #292d36;
  border: 2px solid #31343f;
  border-radius: 12px;
  padding: 30px 30px 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 12px;
    padding: 30px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 32px;
  }
`;

export const DetailInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  text-transform: capitalize;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const Owner = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  text-transform: capitalize;
  color: #ffffff;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const AvatarContainer = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const ActionContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    margin-left: -6px;
    margin-right: -6px;
  }
`;

export const EditButton = styled.button`
  width: 56px;
  height: 56px;
  border: 2px solid #353945;
  border-radius: 48px;
  background: none;
  margin-right: 16px;
`;

export const DeleteButton = styled.button`
  width: 56px;
  height: 56px;
  background: rgba(255, 49, 58, 0.1);
  border-radius: 48px;
  border: none;
`;

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FormItem = styled.div`
  width: 50%;
  display: flex;
  margin-bottom: 20px;
`;

export const Label = styled.span`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  color: #7f8596;
  margin-right: 4px;
`;

export const Value = styled.span`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: #fcfcf9;
`;

export const ButtonContainer = styled.div`
  width: 50%;
  padding-left: 6px;
  padding-right: 6px;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #ffffff;
`;

export const LinkIcon = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  flex-shrink: 0;
`;
