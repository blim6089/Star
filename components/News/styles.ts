import styled from "styled-components";

export const NewsContainer = styled.div`
  width: 100%;
  height: 444px;
  background: radial-gradient(
    103.03% 103.03% at 0% 0%,
    #d080ff 0%,
    #6c5dd3 100%
  );
  border-radius: 24px;
  padding: 32px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 20px;
    margin-bottom: 60px;
  }
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background: #242731;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  top: 16px;
  right: 16px;
`;

export const Role = styled.p`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 8px;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.p`
  max-width: 282px;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    margin-bottom: 12px;
  }
`;

export const Description = styled.p`
  max-width: 245px;
  font-family: "Montserrat";
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const Bold = styled.b`
  font-weight: 800;
`;

export const ImageContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
`;
