import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['posts'],
    endpoints: (builder) => ({
      getPosts: builder.query({
        query: () => `/posts`,
        providesTags: ['posts'],
      }),
      getPost: builder.query({
        query: (id) => ({
          url: `/posts/${id}`,
        }),
        providesTags: ['posts'],
      }),
      deletePost: builder.mutation({
        query: (id) => ({
            url: `/posts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['posts']
    }),
    }),
  })
  
  export const { useGetPostsQuery, useGetPostQuery, useDeletePostMutation } = postsApi