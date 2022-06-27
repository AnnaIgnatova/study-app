import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  currentLang: string;
}

const initialState: ThemeState = {
  currentLang: localStorage.getItem('study-app-lang') || 'ru',
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang: (state) => {
      const lang = state.currentLang === 'ru' ? 'en' : 'ru';
      state.currentLang = lang;
      localStorage.setItem('study-app-lang', lang);
    },
  },
});

export const { changeLang } = langSlice.actions;

export default langSlice.reducer;
