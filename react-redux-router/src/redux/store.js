import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import usersReducer from './slices/userSlice'
import todosReducer from './slices/todoSlice'



export const store = configureStore({
  reducer: {
    counter:counterReducer,
    users:usersReducer,
    todos:todosReducer
  },
})