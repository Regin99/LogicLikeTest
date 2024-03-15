import { configureStore } from '@reduxjs/toolkit';
import { coursesApi } from './api/courses';

export const store = configureStore({
  reducer: {
    [coursesApi.reducerPath]: coursesApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesApi.middleware)
});
