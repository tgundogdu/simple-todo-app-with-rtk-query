import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3003" }),
  tagTypes: ["tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      transformResponse: (response) => response.sort((a, b) => b.id - a.id),
      providesTags: ["tasks"],
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["tasks"],
    }),
    updateTask: builder.mutation({
      query: (task) => ({
        url: `/tasks/${task.id}`,
        method: "PATCH",
        body: task,
      }),
      invalidatesTags: ["tasks"],
    }),
    deleteTask: builder.mutation({
      query: ({ id }) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = apiSlice;
