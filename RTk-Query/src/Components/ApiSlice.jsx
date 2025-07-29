import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// createApi is the core of RTK Query's functionality.


const ApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/users" }),
    endpoints: (build) => ({
    })
})

// RTK Query is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.
// RTK Query is an optional addon included in the Redux Toolkit package, and its functionality is built on top of the other APIs in Redux Toolkit.


export default ApiSlice;
