import { createSlice } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
    name: 'counter', // name used in action types
    initialState: { value: 0 },
    reducer: { // reducer is just a object where each key is a function
        increament: (state) => {
            state.value = 1;
            // state	Current value of your slice
            // action	Object with type and optional payload sent when dispatching
        },
        updateValue: (state, action) => {
            state.value = action.payload
        }
        // You always get state, but you only need action when you want to use data passed from the component.
    }
})

export default CounterSlice.reducer   // In the store to handle state updates
export const { increament, updateValue } = CounterSlice.actions // In components to dispatch actions


