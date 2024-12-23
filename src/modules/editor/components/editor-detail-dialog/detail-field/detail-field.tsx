import { type JSX } from 'react';

import { getBooleanValue } from '../../../utils';
import { StyledDetailField } from './styles';

export type DetailFieldProps = {
  label: string;
  value: string | number | boolean;
};

export const DetailField = ({ label, value }: DetailFieldProps): JSX.Element => {
  const sanitizedValue = typeof value === 'boolean' ? getBooleanValue(value) : value;

  return (
    <StyledDetailField>
      <span>{label}: </span>
      <span>{sanitizedValue}</span>
    </StyledDetailField>
  );
};
