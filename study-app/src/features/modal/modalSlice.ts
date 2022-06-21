import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  signInOpen: boolean;
  signUpOpen: boolean;
  isCourseCreated: boolean;
}

const initialState: ModalState = {
  signInOpen: false,
  signUpOpen: false,
  isCourseCreated: false,
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
    changeCourseCreated: (state) => {
      state.isCourseCreated = !state.isCourseCreated;
    },
  },
});

export const { changeSignInModalOpen, changeSignUpModalOpen, changeCourseCreated } =
  modalSlice.actions;

export default modalSlice.reducer;
