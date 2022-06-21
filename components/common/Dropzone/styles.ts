import styled from "styled-components";

export const DropzoneContainer = styled.div``;

export const Label = styled.label`
  display: flex;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #fcfcf9;
  margin-bottom: 12px;
`;

export const File = styled.input`
  display: none;
`;

export const ImagePicker = styled.div`
  display: flex;
  min-height: 364px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #22252d;
  border: 2px dashed #31343f;
  border-radius: 12px;

  @media (max-width: 768px) {
    min-height: 244px;
    background: none;
  }
`;

export const IconContainer = styled.div`
  margin-bottom: 16px;
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #fcfcf9;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #7f8596;
`;

export const Previewer = styled.div`
  display: flex;
  border-radius: 12px;
  overflow: hidden;

  & > img {
    width: 100%;
    min-height: 364px;
    object-fit: cover;

    @media (max-width: 768px) {
      min-height: 244px;
    }
  }
`;

export const Form = styled.div<{ hover: boolean }>`
  opacity: ${(props) => (props.hover ? 0.5 : 1)};
  cursor: pointer;
  position: relative;
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
