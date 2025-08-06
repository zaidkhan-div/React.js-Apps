import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const ApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        getAllTodos: builder.query({
            query: () => "todos"
        }),
        addTodo: builder.mutation({
            query: (body) => ({
                url: 'todos',
                method: "POST",
                body
            })
        })
    })
})
export const { useGetAllTodosQuery, useAddTodoMutation } = ApiSlice
export default ApiSlice
