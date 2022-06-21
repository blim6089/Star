import React, { useRef, useState } from "react";
import { HelperText, Label, SelectContainer, SelectInput } from "./styles";
import { Option } from "../../../types";

interface SelectProps {
  label?: string;
  name?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  mb?: number;
  helperText?: string;
  status?: "default" | "error" | "success";
  options?: Option[];
}

const Select: React.FC<SelectProps> = (props) => {
  const {
    label,
    name,
    value,
    onChange,
    mb = 40,
    helperText,
    status = "default",
    options = [],
  } = props;

  return (
    <SelectContainer mb={mb}>
      {label && <Label>{label}</Label>}
      <SelectInput>
        {options.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectInput>
      {helperText && <HelperText status={status}>{helperText}</HelperText>}
    </SelectContainer>
  );
};

export default Select;
