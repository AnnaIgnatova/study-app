import { createSlice } from '@reduxjs/toolkit';

export interface TestingState {
  type: string;
  isPracticeChecked: boolean;
}

const initialState: TestingState = {
  type: 'general',
  isPracticeChecked: false,
};

export const testingSlice = createSlice({
  name: 'testing',
  initialState,
  reducers: {
    changeTest: (state, action) => {
      state.type = action.payload;
    },
    changePractise: (state, action) => {
      state.isPracticeChecked = action.payload;
    },
  },
});

export const { changeTest, changePractise } = testingSlice.actions;

export default testingSlice.reducer;
