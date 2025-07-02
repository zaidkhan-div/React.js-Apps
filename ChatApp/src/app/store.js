import { configureStore } from "@reduxjs/toolkit";
import ChatSlice from './../features/ChatSlice'
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisConfig = {
    key: 'chatApp1',
    version: 1,
    storage,
    whitelist: ['currentUser', 'users', 'messages'],
}

const persisReducer = persistReducer(persisConfig, ChatSlice);

export const store = configureStore({
    reducer: {
        Chat: persisReducer,
    }
})

export const Persistore = persistStore(store);
