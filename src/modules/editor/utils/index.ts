import { TValue } from '@/modules/editor/types';

export const getBooleanValue = (value: boolean) => (value ? 'Yes' : 'No');

export const getFormValue = (value: FormDataEntryValue): TValue => {
  const parsedValue = isNaN(Number(value)) ? value : Number(value);

  switch (parsedValue) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return parsedValue as TValue;
  }
};
