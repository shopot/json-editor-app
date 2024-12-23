import { type JSX } from 'react';

import { StyledEditField, StyledFormInput, StyledFormLabel, StyledRadioButton } from './styles';
import { TValue } from '../../../types';

const getFormInput = (name: string, value: TValue): JSX.Element => {
  switch (typeof value) {
    case 'boolean': {
      return (
        <StyledRadioButton>
          <label>
            <input type="radio" name={name} value="true" defaultChecked={value} /> Yes
          </label>
          <label>
            <input type="radio" name={name} value="false" defaultChecked={!value} /> No
          </label>
        </StyledRadioButton>
      );
    }

    default: {
      return (
        <StyledFormInput>
          <input name={name} type={'text'} defaultValue={value} />
        </StyledFormInput>
      );
    }
  }
};

export type EditFieldProps = {
  label: string;
  value: TValue;
};

export const EditField = ({ label, value }: EditFieldProps): JSX.Element => {
  const formInput = getFormInput(label, value);

  return (
    <StyledEditField>
      <StyledFormLabel>{label}</StyledFormLabel>
      {formInput}
    </StyledEditField>
  );
};
