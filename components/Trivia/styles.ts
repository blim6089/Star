import styled from "styled-components";

export const TriviaContainer = styled.div`
  width: 100%;
  background: #292d36;
  border: 2px solid #31343f;
  border-radius: 12px;
  padding: 30px 30px 10px;
  cursor: pointer;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 12px;
    padding: 30px 30px 122px;
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

export const Title = styled.p`
  max-width: 274px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 125%;
  text-transform: capitalize;
  color: #ffffff;

  @media (max-width: 768px) {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    left: 30px;
    right: 30px;
    bottom: 18px;
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
    margin-bottom: 12px;
  }
`;

export const FormItem = styled.div`
  width: 50%;
  display: flex;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Label = styled.span`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  color: #7f8596;
  margin-right: 4px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Value = styled.span`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: #fcfcf9;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-bottom: 12px;
`;
