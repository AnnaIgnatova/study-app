import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ICourseData from '../../types/course.type';
import CourseDataService from './../../services/courses.service';

export interface CourseState {
  courses: ICourseData[];
  courseById: ICourseData;
  slides: number;
}

const initialState: CourseState = {
  courses: [],
  courseById: {
    name: '',
    subtitle: '',
    level: 0,
    time: 0,
    theory: '',
    practise: '',
    testing: '',
    examples: '',
    id: localStorage.getItem('study-app-course-id') || "",
    img: '',
  },
  slides: 3,
};

export const getCoursesData = createAsyncThunk(
  'course/getCoursesData',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await CourseDataService.getAll();
      dispatch(changeSlides(response.data.length < 3 ? response.data.length : 3));
      dispatch(getCourses(response.data));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getCourseDataById = createAsyncThunk(
  'course/getCourseDataById',
  async (payload: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await CourseDataService.findByPk(payload);
      dispatch(getCourseById(response.data));
      localStorage.setItem('study-app-course-id', response.data.id);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const createNewCourse = createAsyncThunk(
  'course/createNewCourse',
  async (payload: ICourseData, { dispatch, rejectWithValue }) => {
    try {
      const response = await CourseDataService.create(payload);
      dispatch(addCourse(response.data));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const searchByTitle = createAsyncThunk(
  'course/searchByTitle',
  async (payload: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await CourseDataService.findByTitle(payload);
      dispatch(getCourses(response.data));
      dispatch(changeSlides(response.data.length < 3 ? response.data.length : 3));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    getCourses: (state, action) => {
      state.courses = [...action.payload];
    },
    addCourse: (state, action) => {
      state.courses = [...state.courses, action.payload];
    },
    getCourseById: (state, action) => {
      state.courseById = action.payload;
    },
    changeSlides: (state, action) => {
      state.slides = action.payload;
    },
  },
});

export const { getCourses, addCourse, getCourseById, changeSlides } = courseSlice.actions;

export default courseSlice.reducer;
