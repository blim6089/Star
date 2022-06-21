import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  HelperText,
  IconContainer,
  Input,
  InputContainer,
  Label,
  LockIconContainer,
  TextFieldContainer,
} from "./styles";
import useIsMobile from "../../../hooks/useIsMobile";

interface TextFieldProps {
  type?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  mb?: number;
  icon?: any;
  helperText?: string;
  status?: "default" | "error" | "success";
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const isMobile = useIsMobile();
  const {
    type = "text",
    label,
    name,
    icon,
    placeholder,
    value,
    readonly = false,
    onChange = () => {},
    mb = isMobile ? 32 : 40,
    helperText,
    status = "default",
  } = props;

  return (
    <TextFieldContainer mb={mb}>
      {label && <Label>{label}</Label>}
      <InputContainer>
        <IconContainer>
          {icon && (
            <Image src={icon} width={24} height={24} alt=":( Not Found" />
          )}
        </IconContainer>
        <Input
          type={type}
          name={name}
          readOnly={readonly}
          hasIcon={icon ? true : false}
          placeholder={placeholder || (label && `Enter ${label}`)}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
        {readonly && (
          <LockIconContainer>
            <Image
              src="/assets/images/icons/lock.svg"
              width={24}
              height={24}
              alt=":( Not Found"
            />
          </LockIconContainer>
        )}
      </InputContainer>
      {helperText && <HelperText status={status}>{helperText}</HelperText>}
    </TextFieldContainer>
  );
};

export default TextField;
