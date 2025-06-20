import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
    name: "profile",
    initialState: {
        profile: {
            name: "",
            email: ""
        }// nested states
    },
    reducers: {
        currentProfile: (state, action) => {
            state.profile.name = 'ZaidKhan',
                state.profile.email = "zaid@gmail.com"
        },
        updateProfile: (state, action) => {
            state.profile.name = action.payload.name;
            state.profile.email = action.payload.email
        }
    }
})

export default ProfileSlice.reducer
export const { currentProfile, updateProfile } = ProfileSlice.actions