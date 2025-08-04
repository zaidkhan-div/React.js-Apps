import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from "./Features/ApiSlice";
import TodoReducer from './Features/TodoSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        api: ApiSlice.reducer,
        todo: TodoReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ApiSlice.middleware),
});

setupListeners(store.dispatch);
