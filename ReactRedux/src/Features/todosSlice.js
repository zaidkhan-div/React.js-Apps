import { createSlice } from "@reduxjs/toolkit";

const TodosSlice = createSlice({
    name: "todoSlice",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo !== action.payload)
        }
    }
})

export default TodosSlice.reducer;
export const { addTodo, deleteTodo } = TodosSlice.actions