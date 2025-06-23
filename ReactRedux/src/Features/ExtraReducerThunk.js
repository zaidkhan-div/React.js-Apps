import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from './CreateThunkSlice'

const ExtraReducerThunk = createSlice({
    name: "extraReducer",
    initialState: {
        loading: false,
        error: null,
        data: null
    },
    reducers: {}, // Sync Reducers (Optionals)
    extraReducers: (builder) => {
        // extraReducers is ONLY for: Handling auto-generated actions from: createAsyncThunk (e.g., fetchTodos.pending/fulfilled/rejected).
        builder
            // Pending: API call started
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error
            })
            // Fulfilled: API call succeeded
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // API response
            })
            // Rejected: API call failed
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Unknown error';
            });
    }
});

export default ExtraReducerThunk.reducer