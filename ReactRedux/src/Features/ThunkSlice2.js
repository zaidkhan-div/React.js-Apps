import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsersApi = createAsyncThunk(
    'user/fethuserApi',
    async (thunkApi) => { // payloader
        try {
            const response = await fetch('https://dummyjson.com/users');
            if (!response.ok) throw new Error('Failed to fetch');
            return await response.json()

        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
            // becomes action.error
        }
    }
)

const SliceForThunk = createSlice({
    name: "SliceForApi",
    initialState: {
        loading: null,
        error: null,
        data: null
    },
    reducers: {}, // this is for synchronous actions
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersApi.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsersApi.fulfilled, (state, action) => {
                state.loading = true;
                state.data = action.payload;
            })
            .addCase(fetchUsersApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.payload || "Unkone Error"
            })
    }
})

export default SliceForThunk.reducer;