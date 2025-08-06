import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const ApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        getAllTodos: builder.query({
            query: () => "todos",
            providesTags: ["Todos"]
        }),
        addTodo: builder.mutation({
            query: (body) => ({
                url: 'todos',
                method: "POST",
                body
            }),
            invalidatesTags: ["Todos"]
        }),
        updateCompleted: builder.mutation({
            query: ({ id, body }) => ({
                url: `todos/${id}`,
                method: "put",
                body
            }),
            invalidatesTags: ["Todos"]
        })
    })
})
export const { useGetAllTodosQuery, useAddTodoMutation, useUpdateCompletedMutation } = ApiSlice
export default ApiSlice
