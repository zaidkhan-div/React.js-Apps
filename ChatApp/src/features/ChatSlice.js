import { createSlice, nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const ChatSlice = createSlice({
    name: "ChatSlice",
    initialState: {
        currentUser: null,
        receiver: null,
        users: {},
        messages: {}
    },
    reducers: {
        addUserToCurrentUser: (state, action) => {
            const randomid = nanoid();
            state.currentUser = {
                id: randomid,
                userName: action.payload
            }
            // cons t alreadyExists = Object.values(state.users).some((user) => user.userName === action.payload);
            state.users[randomid] = state.currentUser
            // users: {
            //     key "XQ4kL9-randomId": { id: "XQ4kL9", userName: "Alice" }
            // }
        }
    }

})

export default ChatSlice.reducer;
export const { addUserToCurrentUser } = ChatSlice.actions;