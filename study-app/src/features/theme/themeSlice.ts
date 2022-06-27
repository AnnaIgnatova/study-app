import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  themeColor: string;
}

const initialState: ThemeState = {
  themeColor: localStorage.getItem('study-app-theme') || 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      const theme = state.themeColor === 'light' ? 'dark' : 'light';
      localStorage.setItem('study-app-theme', theme);
      state.themeColor = theme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
