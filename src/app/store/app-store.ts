import { configureStore } from '@reduxjs/toolkit';

import { editorSliceStore } from '@/modules/editor';

export const appStore = configureStore({
  reducer: {
    editor: editorSliceStore.reducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
