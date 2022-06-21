import styled from "styled-components";

export const AvatarUploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AvatarContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;

  & > img {
    width: 128px;
    height: 128px;
    border-radius: 128px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const File = styled.input`
  display: none;
`;

export const Description = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #7f8596;
  margin-bottom: 20px;
`;

export const Footer = styled.div`
  & > button {
    margin-bottom: 12px;
  }
`;
