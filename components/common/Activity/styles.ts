import styled from "styled-components";

export const ActivityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid rgba(228, 228, 228, 0.1);
`;

export const AvatarContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-right: 16px;
`;
export const DetailContainer = styled.div`
  max-width: 141px;
  display: flex;
  flex-direction: column;
`;

export const LeftContainer = styled.div`
  display: flex;
`;

export const Title = styled.span`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  color: #ffffff;
  margin-bottom: 2px;
`;

export const Status = styled.span`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #4fbf67;
  margin-bottom: 8px;
`;

export const Author = styled.span`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
`;

export const Date = styled.span`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #808191;
`;
