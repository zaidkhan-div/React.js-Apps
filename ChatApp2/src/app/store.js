import { configureStore } from "@reduxjs/toolkit";
import ChatSlice from './../features/ChatAlice'
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisconfig = {
    key: "NewChatApp",
    version: 1,
    storage,
    Whitelist: []
}

const PersistedReducer = persistReducer(persisconfig, ChatSlice);

export const store = configureStore({
    reducer: {
        Chat: PersistedReducer
    }
});

export const Persistore = persistStore(store);
