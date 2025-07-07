import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
    name: "ChatSlice",
    initialState: {
        currentUser: null,
        receiver: null, // here i will store the selected user for chatting
        users: {},
        userNamesById: {},
        messages: {},
    },
    reducers: {
        addUserToCurrentUser: (state, action) => {
            const { userName } = action.payload;
            // const alreadyExists = state.users[userName];
            // const alreadyExists = Object.values(state.users).find((user) => user.userName === userName);
            // if (!alreadyExists) {
            state.users[userName] = action.payload
            state.userNamesById[action.payload.id] = userName;
            // state.currentUser = action.payload
            // }
            // else {
            //     throw new Error('User already exist!')
            // }
        },
        setReceiver: (state, action) => {
            state.receiver = action.payload;
        },
        sendMessage: (state, action) => {
            const chatId = [state.currentUser.id, state.receiver.id].sort().join('_');
            if (!state.messages[chatId]) {
                state.messages[chatId] = []
            }
            state.messages[chatId].push({
                id: nanoid(),
                text: action.payload,
                senderId: state.currentUser.id,
                receiverId: state.receiver.id,
            })
        }
    }

})

export default ChatSlice.reducer;
export const { addUserToCurrentUser, setReceiver, sendMessage } = ChatSlice.actions;

// state.messages[chatId].push({
//     id: nanoid(),
//     text: action.payload
// })


export const selectUsers = state => state.Chat.users;

export const selectCurrentUser = (userId) => createSelector(
    [selectUsers, state => state.Chat.userNamesById],
    (users, userIds) => {
        return users?.[userIds?.[userId]]
    })

// addUserToCurrentUser: (state, action) => {
//     const userName = action.payload;
//     const alreadyExists = Object.values(state.users).find((user) => user.userName === userName);
//     if (alreadyExists) {
//         throw new Error('User Already Exist');
//     }
//     const randomid = nanoid();
//     state.currentUser = {
//         id: randomid,
//         userName: action.payload
//     }
//     state.users[randomid] = state.currentUser
//     // users: {
//     //     key: "XQ4kL9-randomId": { id: "XQ4kL9", userName: "Alice" }
//     // }
// },