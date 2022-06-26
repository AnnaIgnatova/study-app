import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserDataService from './../../services/user.service';

export interface UserState {
  name: string;
  email: string;
  avatar: string;
  accessToken: string;
  courses: string;
  level: number;
  id: string;
  progress: string;
}

const initialState: UserState = {
  id: localStorage.getItem('user_id') || '',
  name: '',
  email: '',
  avatar: '',
  accessToken: localStorage.getItem('token_study_app') || '',
  courses: '',
  level: 0,
  progress: '',
};

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload extends SignInPayload {
  name: string;
  img: string;
  progress: string;
  level: number;
  courses: string;
}

export const createUser = createAsyncThunk(
  'user/createUser',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const id = localStorage.getItem('user_id');
      const token = localStorage.getItem('token_study_app');

      if (token && id) {
        const response = await UserDataService.findUser(id);
        dispatch(getUser({ ...response.data }));
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const signIn = createAsyncThunk(
  'user/signIn',
  async (payload: SignInPayload, { dispatch, rejectWithValue }) => {
    try {
      const response = await UserDataService.signIn({ ...payload });
      localStorage.setItem('token_study_app', response.data.accessToken || '');
      localStorage.setItem('user_id', response.data.id || '');
      dispatch(getUser(response.data));
      dispatch(
        logIn({
          token: localStorage.getItem('token_study_app'),
          id: localStorage.getItem('user_id'),
        })
      );
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const signUp = createAsyncThunk(
  'user/signUp',
  async (payload: SignUpPayload, { dispatch, rejectWithValue }) => {
    try {
      await UserDataService.signUp({ ...payload });
      const response = await UserDataService.signIn({
        email: payload.email,
        password: payload.password,
      });
      dispatch(getUser(response.data));
      dispatch(
        logIn({
          token: response.data.accessToken,
          id: response.data.id,
        })
      );
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.courses = action.payload.courses;
      state.level = action.payload.level;
      state.progress = action.payload.progress;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changeAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    logOut: (state) => {
      localStorage.setItem('token_study_app', '');
      localStorage.setItem('user_id', '');
      state.accessToken = '';
      state.id = '';
    },
    logIn: (state, action) => {
      localStorage.setItem('token_study_app', action.payload.token);
      localStorage.setItem('user_id', action.payload.id);
      state.accessToken = action.payload.token;
      state.id = action.payload.id;
    },
  },
});

export const { changeName, changeEmail, changeAvatar, getUser, logOut, logIn } = userSlice.actions;

export default userSlice.reducer;
