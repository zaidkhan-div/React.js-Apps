import { createSelector } from "@reduxjs/toolkit";

const selectProfile = (state) => state.profile; // this is from store.js
const selectCounter = (state) => state.counter; // this is from store.js

export const selectName = createSelector(
    [selectProfile, selectCounter],
    // (profile) => profile.info.names,
    // (counter) => counter.value * 4 // we can create another Selector
    (profile, counter) => {
        return {
            name: profile.info.names,
            counter: counter.value
        }
    }

)

// Why Use createSelector?
// It memoizes results → returns cached value unless the state changes
// Prevents unnecessary re-renders
// Ideal for derived/computed data (like filtering, sorting, combining)
