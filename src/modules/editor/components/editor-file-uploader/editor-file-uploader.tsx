import * as React from 'react';
import type { JSX } from 'react';

import { useAppDispatch } from '@/app';
import { FileInput } from '@/core/components';

import { setItems } from '../../stores';

export const EditorFileUploader = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setItems([]));

    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const result = JSON.parse(event.target?.result as string);

        if (Array.isArray(result)) {
          dispatch(setItems(result));
        }
      } catch {
        console.log('Error parsing json file.');
      }
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <FileInput label={'Upload JSON file'} onChange={handleChangeInput} />
    </div>
  );
};
