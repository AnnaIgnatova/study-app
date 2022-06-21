import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  signInOpen: boolean;
  signUpOpen: boolean;
}

const initialState: ModalState = {
  signInOpen: false,
  signUpOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    changeSignInModalOpen: (state) => {
      state.signInOpen = !state.signInOpen;
    },
    changeSignUpModalOpen: (state) => {
      state.signUpOpen = !state.signUpOpen;
    },
  },
});

export const { changeSignInModalOpen, changeSignUpModalOpen } = modalSlice.actions;

export default modalSlice.reducer;
