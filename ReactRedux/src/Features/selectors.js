import { createSelector } from "@reduxjs/toolkit";
// This is automatically draft-safe
// what is Draft ?
// Draft = Immer’s Temporary "Fake" State
// When you use Immer(like in Redux Toolkit reducers), it creates a proxy copy of your state called a "draft".
// This draft lets you write mutable - style code(like state.todos.push()), but under the hood, Immer records changes and generates an immutable update.


const selectProfile = (state) => state.profile; // this is from store.js
const selectCounter = (state) => state.counter; // this is from store.js
const todosLength = (state) => state.todos;

// Derived data is new information created by processing and transforming existing data.

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
// createSelector + useSelector = "Only update when any specific data changes."


export const selectTotalTodos = createSelector(
    [todosLength],
    (todos) => todos.todos.length
    // createSelector is for derived/computed data (e.g., totals, filtered lists).
)

// Why Use createSelector?
// It memoizes results → returns cached value unless the state changes
// Prevents unnecessary re-renders
// Ideal for derived/computed data (like filtering, sorting, combining)


// createDraftSelector()
// A Redux Toolkit internal utility that makes createSelector work safely with Immer draft states (temporary mutable state during updates).
// Normal createSelector breaks if you pass it an Immer draft (e.g., inside reducers).

// what is createDraftSelector ?
// createDraftSafeSelector
// Redux Toolkit’s invisible bodyguard that makes createSelector work safely inside reducers (where state is a temporary "draft").
// Key Points to Remember:
// You NEVER use it directly—RTK handles it automatically.
// Why? Normal selectors break with Immer’s draft state.
// Result: Your createSelector just works everywhere.