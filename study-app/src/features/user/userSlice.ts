import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  email: string;
  pass: string;
  avatar: string;
}

const initialState: UserState = {
  name: 'Анна',
  email: 'missjellx@gmail.com',
  pass: '1234567',
  avatar: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePass: (state, action) => {
      state.pass = action.payload;
    },
    changeAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
});

export const { changeName, changeEmail, changePass, changeAvatar } = userSlice.actions;

export default userSlice.reducer;
