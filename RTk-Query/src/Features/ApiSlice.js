import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// createApi is the core of RTK Query's functionality.


const ApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    // Endpoints are a set of operations that you want to perform against your server. You define them as an object using the builder syntax. 
    // Tags in Query 
    tagTypes: ["Posts"],
    endpoints: (builder) => ({
        getPosts: builder.query({ // for getRequest we use query and for the rest of operation we use "mutation"
            query: () => "posts",
            providesTags: ["Posts"]
        }),
        getSinglePost: builder.query({
            query: (id) => ({
                url: `posts/${id}`,
                method: "GET"
            })

        }),
        newPost: builder.mutation({
            query: (body) => ({
                url: "posts",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Posts"]
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Posts"]
        })
    })
})

// RTK Query is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.
// RTK Query is an optional addon included in the Redux Toolkit package, and its functionality is built on top of the other APIs in Redux Toolkit.


export const { useGetPostsQuery, useGetSinglePostQuery, useNewPostMutation, useDeletePostMutation } = ApiSlice; // Auto-generated hooks

export default ApiSlice;
