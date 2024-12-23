import { type JSX, useEffect } from 'react';

import { Box, Button, Panel } from '@/core/components';
import { useAppDispatch, useAppSelector } from '@/app';
import { EditorDetailDialog, EditorJsonTable, EditorJsonDownloader, EditorFileUploader } from '../components';
import { setItems } from '../stores';

import jsonData from '../__mock__/users-data.json';

export const EditorPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const selectedItem = useAppSelector((s) => s.editor.selectedItem);
  const total = useAppSelector((s) => s.editor.items.length);

  useEffect(() => {
    dispatch(setItems(jsonData as JSONValue[]));
  }, [dispatch]);

  const handleClear = () => dispatch(setItems([]));

  const isDetailDialogOpen = selectedItem !== null;

  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <h1>JSON Array Parser</h1>
        <h2>Total rows: {total}</h2>
      </Box>
      <Panel sx={{ display: 'flex', gap: '8px' }}>
        <EditorFileUploader />
        <EditorJsonDownloader />
        <Button variant={'secondary'} onClick={handleClear}>
          Clear
        </Button>
      </Panel>
      <Box
        sx={{
          display: 'flex',
          gap: '8px',
          marginTop: '8px',
        }}
      >
        <EditorJsonTable />
        {isDetailDialogOpen && <EditorDetailDialog />}
      </Box>
    </>
  );
};
