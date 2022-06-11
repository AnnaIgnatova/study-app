import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import themeReducer from './../features/theme/themeSlice'

const rootReducer = combineReducers({
  themeReducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
