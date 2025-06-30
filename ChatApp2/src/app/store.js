import { configureStore } from "@reduxjs/toolkit";
import ChatSlice from './../features/ChatAlice'
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const store = configureStore({
    reducer: {
        Chat: ChatSlice
    }
})