import { createAsyncThunk } from "@reduxjs/toolkit"

// createAsyncThunk will take three parameters 
// type, payloadCreator, options
export const fetchUser = createAsyncThunk(
    'user/fetchUser', // Action type prefix (must be unique)
    // this type argument will generate three action types
    // 'user/fetchUser/pending'
    // 'user/fetchUser/fulfilled'
    // 'user/fetchUser/rejected'

    async (userId, thunkAPI) => { // Payloadcreator
        try {
            const response = await fetch(`https://dummyjson.com/users/${userId}`);
            if (!response.ok) throw new Error('Failed to fetch');
            return await response.json(); // Becomes `action.payload` in `fulfilled`
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message); // Becomes `action.error`
        }
    }
);

// createAsyncThunk is mainly for API calls (or any async ops).
// Parameters:
// typePrefix (e.g., 'todos/fetchTodos' → generates todos/fetchTodos/pending|fulfilled|rejected).

// payloadCreator (async function with (arg, thunkAPI)).

// options (rarely used, for customizing thunk behavior).
 

// A function that accepts a Redux action type string and a callback function that should return a promise. It generates promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator that will run the promise callback and dispatch the lifecycle actions based on the returned promise.

// It does not generate any reducer functions, since it does'nt know what data you're fetching, how you want to track loading state, or how the data you return needs to be processed. You should write your own reducer logic that handles these actions, with whatever loading state and processing logic is appropriate for your own app.