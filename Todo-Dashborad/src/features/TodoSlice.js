import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "TodoSlice",
    initialState: {
        todos: [],
        filteredTodos: []
    },
    reducers: {
        setTodo: (state, action) => {
            state.todos = action.payload;
            state.filteredTodos = action.payload;
        },
        searchTodo: (state, action) => {
            const query = action.payload.toLowerCase();
            if (query === "") {
                state.filteredTodos = state.todos;
            } else {
                state.filteredTodos = state.todos.filter((item) =>
                    item?.title.toLowerCase().includes(query)
                );
            }
        }
    }
});

export default TodoSlice.reducer;
export const { setTodo, searchTodo } = TodoSlice.actions;
