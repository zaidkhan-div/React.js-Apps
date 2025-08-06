import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from "./features/ApiSlice";
import TodoSlice from './features/TodoSlice';

export const store = configureStore({
    reducer: {
        api: ApiSlice.reducer,
        todo: TodoSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ApiSlice.middleware),
});

