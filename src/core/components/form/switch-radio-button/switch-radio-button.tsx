import { type JSX, type HTMLAttributes, useState, useEffect } from 'react';

import { StyledSwitchRadioButton } from './styles';

export type SwitchRadioButtonProps = {
  name: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
  defaultChecked?: boolean;
} & HTMLAttributes<HTMLInputElement>;

export const SwitchRadioButton = ({ name, value, defaultChecked, onChange }: SwitchRadioButtonProps): JSX.Element => {
  const [internalValue, setInternalValue] = useState<boolean>(!!defaultChecked);

  const currentValue = value !== undefined ? value : internalValue;

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleToggle = (newValue: boolean) => {
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <StyledSwitchRadioButton>
      <label>
        <input type="radio" name={name} checked={currentValue} value={'true'} onChange={() => handleToggle(true)} /> Yes
      </label>
      <label>
        <input type="radio" name={name} checked={!currentValue} value={'false'} onChange={() => handleToggle(false)} />{' '}
        No
      </label>
    </StyledSwitchRadioButton>
  );
};
