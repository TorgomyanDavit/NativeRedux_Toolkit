import { configureStore } from '@reduxjs/toolkit';
import appSlices from './appSlices';

export const store = configureStore({
  reducer: {
    app: appSlices,
  }
});