import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  TextAreaContainer,
  Text,
  TextContainer,
  Label,
  LockIconContainer,
} from "./styles";

interface TextAreaProps {
  label?: string;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  value?: string | number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  mb?: number;
  height?: number;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  const {
    label,
    name,
    placeholder,
    value,
    readonly = false,
    onChange,
    mb = 40,
    height = 484,
  } = props;

  return (
    <TextAreaContainer mb={mb}>
      {label && <Label>{label}</Label>}
      <TextContainer>
        <Text
          name={name}
          readOnly={readonly}
          placeholder={placeholder || (label && `Enter ${label}`)}
          value={value}
          height={height}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
        />
        {readonly && (
          <LockIconContainer>
            <Image src="/assets/images/icons/lock.svg" width={24} height={24} alt=":( Not Found" />
          </LockIconContainer>
        )}
      </TextContainer>
    </TextAreaContainer>
  );
};

export default TextArea;
