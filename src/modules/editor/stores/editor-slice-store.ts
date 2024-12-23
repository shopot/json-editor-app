import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { JsonObject } from '../types';

export type EditorSliceState = {
  items: JsonObject[];
  selectedItem: JsonObject | null;
  selectedRowIndex: number | null;
  isLoading: boolean;
};

const initialState: EditorSliceState = {
  items: [],
  selectedItem: null,
  selectedRowIndex: null,
  isLoading: false,
};

export const editorSliceStore = createSlice({
  name: 'editorSliceStore',
  initialState: { ...initialState },
  reducers: {
    setItems: (_s, action: PayloadAction<JsonObject[]>) => ({
      ...initialState,
      items: action.payload,
    }),

    setSelectedItem(state, action: PayloadAction<number | null>) {
      const byIndex = action.payload === null ? -1 : action.payload;

      const foundItem = state.items[byIndex] || null;

      if (foundItem !== null) {
        state.selectedItem = foundItem;
        state.selectedRowIndex = action.payload;
      } else {
        state.selectedItem = null;
        state.selectedRowIndex = null;
      }
    },

    updateItem: (state, action: PayloadAction<{ itemIndex: number; item: JsonObject }>) => {
      state.items[action.payload.itemIndex] = action.payload.item;

      state.selectedItem = action.payload.item;
    },

    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setItems, setSelectedItem, updateItem, setIsLoading } = editorSliceStore.actions;
