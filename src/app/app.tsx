import { type JSX } from 'react';

import { Box } from '@/core/components';
import { EditorPage } from '@/modules/editor';
import { RootProvider } from './providers';

export const App = (): JSX.Element => (
  <RootProvider>
    <Box
      sx={{
        maxWidth: '1600px',
        width: '100%',
        margin: '0 auto',
        paddingTop: '16px',
      }}
    >
      <EditorPage />
    </Box>
  </RootProvider>
);
