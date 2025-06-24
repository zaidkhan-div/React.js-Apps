import { createSelector } from "@reduxjs/toolkit";

const selectProfile = (state) => state.profile; // this is from store.js
const selectCounter = (state) => state.counter; // this is from store.js
const todosLength = (state) => state.todos;

export const selectName = createSelector(
    [selectProfile, selectCounter],
    // (profile) => profile.info.names,
    // (counter) => counter.value * 4 // we can create another Selector
    (profile, counter, todos) => {
        return {
            name: profile.info.names,
            counter: counter.value * 3,
        }
    }
)

export const selectTotalTodos = createSelector(
    [todosLength],
    (todos) => todos.todos.length;
    // createSelector is for derived/computed data (e.g., totals, filtered lists).
)

// Why Use createSelector?
// It memoizes results → returns cached value unless the state changes
// Prevents unnecessary re-renders
// Ideal for derived/computed data (like filtering, sorting, combining)
