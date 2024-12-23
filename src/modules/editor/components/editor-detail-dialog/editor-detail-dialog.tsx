import { JSX, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/app';
import { Box, IconButton, CloseIcon, Panel, Colors, Button } from '@/core/components';
import { setSelectedItem, updateItem } from '../../stores';
import { StyledJsonFieldsList } from './styles';
import { DetailField } from './detail-field';
import { EditField } from './edit-field';
import { TValue } from '../../types';
import { getFormValue } from '../../utils';

export const EditorDetailDialog = (): JSX.Element | null => {
  const dispatch = useAppDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const item = useAppSelector((s) => s.editor.selectedItem);
  const itemIndex = useAppSelector((s) => s.editor.selectedRowIndex);

  const handleClose = (): void => {
    dispatch(setSelectedItem(null));
  };

  const handleSave = () => {
    if (!formRef.current || itemIndex === null) {
      return;
    }

    const result: { [key: string]: TValue } = {};

    const formData = new FormData(formRef.current);

    for (const [key, value] of formData.entries()) {
      result[key] = getFormValue(value);
    }

    dispatch(
      updateItem({
        itemIndex,
        item: result,
      }),
    );

    setIsEditMode(false);
  };

  if (item === null) {
    return null;
  }

  const headers = Object.keys(item).filter((header) => header !== '_id' && header !== 'guid');

  const fields = headers.map((header, index) =>
    isEditMode ? (
      <EditField key={index} label={header} value={item[header]} />
    ) : (
      <DetailField key={index} label={header} value={item[header]} />
    ),
  );

  const dialogTitle = isEditMode ? 'Edit' : 'Detail';

  return (
    <Panel>
      <Box sx={{ width: '480px', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <h4>{dialogTitle}</h4>
            <div>
              <IconButton color={Colors.Gray500} onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
          </Box>
          <StyledJsonFieldsList>
            <form ref={formRef}>{fields}</form>
          </StyledJsonFieldsList>
        </Box>

        <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          {!isEditMode && <Button onClick={() => setIsEditMode(true)}>Edit</Button>}
          {isEditMode && <Button onClick={handleSave}>Save</Button>}
          <Button variant={'secondary'} onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Panel>
  );
};
