import { createSlice } from "@reduxjs/toolkit";

const ExtraReducerThunk = createSlice({
    name: "extraReducer",
    initialState: {},
    reducers: {}, // Sync Reducers (Optionals)
    extraReducers: {}
});

export default ExtraReducerThunk.actions