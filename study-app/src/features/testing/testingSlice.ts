import { createSlice } from '@reduxjs/toolkit';

export interface TestingState {
  type: string;
}

const initialState: TestingState = {
  type: 'general',
};

export const testingSlice = createSlice({
  name: 'testing',
  initialState,
  reducers: {
    changeTest: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { changeTest } = testingSlice.actions;

export default testingSlice.reducer;
