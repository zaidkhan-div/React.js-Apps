import { createSlice, nanoid } from "@reduxjs/toolkit";

const TodosSlice = createSlice({
    name: "todoSlice",
    initialState: {
        todos: [],
        editIndex: null
    },
    reducers: {
        addTodo: (state, action) => {
            // state.todos.push(action.payload)
            const NewTodo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(NewTodo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        startEditing: (state, action) => {
            state.editIndex = action.payload
        },
        editTodo: (state, action) => {
            // state.todos = action.payload
            // state.todos.find
            const updatedTodo = state.todos.find(item => item.id === state.editIndex)
            if (updatedTodo) {
                updatedTodo.text = action.payload;
                state.editIndex = null
            }
        }
    }
})

export default TodosSlice.reducer;
export const { addTodo, deleteTodo, editTodo, startEditing } = TodosSlice.actions