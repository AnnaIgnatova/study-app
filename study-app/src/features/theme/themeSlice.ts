import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  isLight: boolean;
}

const initialState: ThemeState = {
  isLight: true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.isLight = !state.isLight;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
