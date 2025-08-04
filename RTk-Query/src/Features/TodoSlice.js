import { createSelector, createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "TodoSlice",
    initialState: {
        todos: []
    },
    reducers: {
        setTodo: (state, action) => {
            state.todos = action.payload;
        },
        addTodo: (state, { payload }) => {
            let obj = {
                id: randomId,
                text: payload
            }
            state.todos.push(obj);
        },
        deleteTodo: () => { }
    }
});

export default TodoSlice.reducer;
export const { setTodo, addTodo, deleteTodo } = TodoSlice.actions;

// const selectTodo = (state) => state.todo;
// export const todosSelector = createSelector(
//     [selectTodo], // it is called inputSelector
//     (todo) => todo
// )