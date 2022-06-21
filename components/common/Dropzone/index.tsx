import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  CloseButton,
  Description,
  DropzoneContainer,
  Form,
  File,
  IconContainer,
  ImagePicker,
  Label,
  Previewer,
  Title,
} from "./styles";
import useIsMobile from "../../../hooks/useIsMobile";

interface DropzoneProps {
  value?: any;
  label?: string;
  icon?: any;
  title?: string;
  description?: string;
  readonly?: boolean;
  onChange: (file: string | null) => void;
}

const Dropzone: React.FC<DropzoneProps> = (props) => {
  const isMobile = useIsMobile();
  const {
    label,
    icon,
    title,
    description,
    value,
    readonly = false,
    onChange,
  } = props;
  const fileRef = useRef<HTMLInputElement>(null);
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    if (!readonly && fileRef.current !== null) fileRef.current.click();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      onChange(URL.createObjectURL(event.target.files[0]));
    }
  };
  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    if (!readonly) {
      stopEvent(event);
      setHover(false);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    if (!readonly) {
      stopEvent(event);
      setHover(true);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    if (!readonly) {
      stopEvent(event);
      if (event.dataTransfer)
        onChange(URL.createObjectURL(event.dataTransfer.files[0]));
      setHover(false);
    }
  };

  const stopEvent = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onChange(null);
  };

  return (
    <DropzoneContainer>
      {label && <Label>{label}</Label>}
      <File
        type="file"
        ref={fileRef}
        onChange={handleChange}
        accept="image/*"
      />
      <Form
        onClick={handleClick}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        hover={hover}
      >
        {value ? (
          <>
            <Previewer>
              {typeof value !== "string" ? (
                <Image src={value} />
              ) : (
                <img src={value} />
              )}
            </Previewer>
            {!readonly && (
              <CloseButton onClick={handleRemove}>
                <Image
                  src="/assets/images/icons/remove.svg"
                  width={12}
                  height={12}
                  alt=":( Not Found"
                />
              </CloseButton>
            )}
          </>
        ) : (
          <ImagePicker>
            {readonly ? (
              <Title>No Image</Title>
            ) : (
              <>
                <IconContainer>
                  <Image
                    src={icon || "/assets/images/icons/upload.svg"}
                    width={40}
                    height={40}
                    alt=":( Not Found"
                  />
                </IconContainer>
                <Title>
                  {title ||
                    (isMobile ? "Press to upload" : "Drag and drop to upload")}
                </Title>
                <Description>
                  {description || "Size recommend 800x800. Max 2mb."}
                </Description>
              </>
            )}
          </ImagePicker>
        )}
      </Form>
    </DropzoneContainer>
  );
};

export default Dropzone;
