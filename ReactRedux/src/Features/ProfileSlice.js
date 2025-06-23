import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
    name: "profile",
    initialState: { // this is my state which holds data
        info: {
            name: null,
            email: null
        }// nested states
    },
    reducers: {
        currentProfile: (state, action) => {
            state.info.name = 'ZaidKhan-info';
            state.info.email = "zaid@gmail.com";
        },
        updateProfile: (state, action) => {
            state.info.name = action.payload.name;
            state.info.email = action.payload.email;
        }
    }
})

export default ProfileSlice.reducer
export const { currentProfile, updateProfile } = ProfileSlice.actions
