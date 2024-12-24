import { type JSX } from 'react';

import { Box, FormLabel, SwitchRadioButton, TextInput } from '@/core/components';
import { TValue } from '../../../types';

const getFormInput = (name: string, value: TValue): JSX.Element => {
  switch (typeof value) {
    case 'boolean': {
      return <SwitchRadioButton name={name} defaultChecked={value} />;
    }

    default: {
      return <TextInput name={name} defaultValue={`${value}`} />;
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
    <Box sx={{ display: 'contents' }}>
      <FormLabel>{label}</FormLabel>
      {formInput}
    </Box>
  );
};
