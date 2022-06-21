import styled from "styled-components";

export const SettingsContainer = styled.div``;

export const Header = styled.div`
  position: relative;
  margin-bottom: 48px;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 48px;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #353945;
  border-radius: 90px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #fcfcfd;
  background: none;

  & > span {
    display: flex !important;
    margin-right: 12px !important;
  }
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  color: #fcfcf9;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #7f8596;
`;

export const TabContainer = styled.div`
  padding: 10px 0;
  margin-bottom: 48px;
`;

export const Body = styled.div`
  display: flex;
  padding: 48px 0;
  border-top: 1px solid #31343f;
`;

export const Form = styled.div`
  padding-right: 90px;
  width: 100%;
`;

export const Avatar = styled.div`
  width: 256px;
  flex-shrink: 0;
`;

export const SocialLinkLabel = styled.label`
  display: flex;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #fcfcf9;
  margin-bottom: 12px;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialItems = styled.div`
  display: flex;
  margin: 0 -12px;

  & > button {
    margin: 0 12px;

    & > span {
      margin-right: 8px !important;
    }
  }
`;
