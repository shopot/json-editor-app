import { type JSX, memo } from 'react';

import { DataGrid } from '@/core/components';
import { useAppDispatch, useAppSelector } from '@/app';
import { setSelectedItem } from '../../stores';

export const EditorJsonTable = memo((): JSX.Element => {
  const dispatch = useAppDispatch();
  const selectedRowIndex = useAppSelector((state) => state.editor.selectedRowIndex);
  const items = useAppSelector((state) => state.editor.items);

  const handleRowClick = (itemIndex: number): void => {
    const value = itemIndex === selectedRowIndex ? null : itemIndex;

    dispatch(setSelectedItem(value));
  };

  return <DataGrid data={items} selectedRowIndex={selectedRowIndex} onRowClick={handleRowClick} />;
});
