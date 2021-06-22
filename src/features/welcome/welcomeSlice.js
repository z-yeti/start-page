import { createSlice } from '@reduxjs/toolkit';

const welcomes = ['hello', 'suh', 'welcome'];

const initialState = {
  value: welcomes[Math.floor(Math.random() * welcomes.length)],
};

export const welcomeSlice = createSlice({
  name: 'welcome',
  initialState,
  reducers: {
    setWelcome: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { setWelcome } = welcomeSlice.actions;

export const selectWelcome = (state) => state.welcome.value;

export default welcomeSlice.reducer;
