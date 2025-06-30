import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const ChatAlice = createSlice({
    name: "ChatSlice",
    initialState: {
        currentUser: null,
        receiver: null, // here i will store the selected user for chatting
        users: {},
        messages: {}
    },
    reducers: {}
})