import React from 'react'
import { createSlice, nanoid } from '@reduxjs/toolkit'

const ChatSlice = createSlice({
    name: "ChatSlice",
    initialState: {
        currentUser: null,
        receiver: null, // here i will store the selected user for chatting
        users: {},
        messages: {}
    },
    reducers: {
        addUserToCurrentUser: (state, action) => {
            const userName = action.payload;
            const alreadyExists = Object.values(state.users).find((user) => user.userName === userName);
            if (alreadyExists) {
                throw new Error('User Already Exist');
            }
            const randomId = nanoid();
            state.currentUser = {
                id: randomId,
                userName: action.payload,
            }
            state.users[randomId] = state.currentUser;
        },
        setRecevier: (state, action) => {
            state.receiver = action.payload;
        },
        sendMessage: (state, action) => { }
    }
})

export default ChatSlice.reducer;
export const { addUserToCurrentUser } = ChatSlice.actions;