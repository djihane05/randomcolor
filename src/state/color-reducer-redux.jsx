import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  copiedColor: '#000000',
};

const colorReducerSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setCopiedColor: (state, action) => {
      state.copiedColor = action.payload;
    },
  },
});

export const { setCopiedColor } = colorReducerSlice.actions;
export default colorReducerSlice.reducer;
