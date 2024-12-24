import { type JSX, type HTMLAttributes, useState, useEffect } from 'react';

import { StyledFormInput } from './styles';

export type TextInputProps = {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
} & HTMLAttributes<HTMLInputElement>;

export const TextInput = ({ name, defaultValue, value, onChange }: TextInputProps): JSX.Element => {
  const [internalValue, setInternalValue] = useState<string>(defaultValue || '');

  const currentValue = value !== undefined ? value : internalValue;

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <StyledFormInput>
      <input name={name} value={currentValue} onChange={(event) => handleChange(event.target.value)} type="text" />
    </StyledFormInput>
  );
};
