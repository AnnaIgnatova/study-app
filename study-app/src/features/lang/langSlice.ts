import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  currentLang: string;
}

const initialState: ThemeState = {
  currentLang: 'ru',
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang: (state) => {
      state.currentLang = state.currentLang === 'ru' ? 'en' : 'ru';
    },
  },
});

export const { changeLang } = langSlice.actions;

export default langSlice.reducer;
