import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Course } from './types';

const BASE_URL = process.env.REACT_APP_API_URL;

export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCourses: builder.query<Course[], void>({
      query: () => 'courses.json'
    })
  })
});

export const { useGetCoursesQuery } = coursesApi;
