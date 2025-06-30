import { createSlice, nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
            const randomid = nanoid();
            state.currentUser = {
                id: randomid,
                userName: action.payload
            }
            state.users[randomid] = state.currentUser
            // users: {
            //     key: "XQ4kL9-randomId": { id: "XQ4kL9", userName: "Alice" }
            // }
        },
        setReceiver: (state, action) => {
            state.receiver = action.payload;
        },
        sendMessage: (state, action) => {
            const randomId = nanoid();
            const { text } = action.payload;
            const chatId = [state.currentUser.id, state.receiver.id].sort().join('_');
            state.messages[chatId] = [
                ...(state.messages[chatId] || []),
                { id: randomId, sender: state.currentUser.id, text }
            ];
        }
    }

})

export default ChatSlice.reducer;
export const { addUserToCurrentUser, setReceiver, sendMessage } = ChatSlice.actions;