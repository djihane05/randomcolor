import { configureStore } from '@reduxjs/toolkit';
import colorReducerSlice from "./color-reducer-redux"

const store = configureStore({
  reducer: {
    color: colorReducerSlice,
  },
});

export default store;
