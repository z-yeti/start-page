import { configureStore } from '@reduxjs/toolkit';
import welcomeReducer from '../features/welcome/welcomeSlice';

export const store = configureStore({
  reducer: {
    welcome: welcomeReducer,
  },
});
