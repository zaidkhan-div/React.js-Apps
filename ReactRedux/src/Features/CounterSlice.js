import { createSlice } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
    name: 'counter', // name used in action types
    initialState: {
        value: 0,
        Error: null,
        loading: false,
        name: "ZaidCounter"
    },
    reducers: { // reducer is just a object where each key is a function
        increment: (state) => {
            state.value += 1;
            // state	Current value of your slice
            // action	Object with type and optional payload sent when dispatching
        },
        updateValue: (state, action) => {
            state.value = action.payload // dispatch(updateValue(7))
            // State Current values in your slice
            // Action What you just dispatched
            // Action.payload The actual value you passed (like 2, "Zaid")
        },
        resetValue: (state) => {
            state.value = 0
        },
        updateName: (state, action) => {
            state.name = action.payload
        }
        // You always get state, but you only need action when you want to use data passed from the component.
    }

})

// const math = {
//     add: (x, y) => x + y,
//     divide: (x, y) => x / y
// }
// let result = math.divide(5, 5);
// console.log(result);


export default CounterSlice.reducer   // In the store to handle state updates
export const { increment, updateValue, resetValue, updateName } = CounterSlice.actions // In components to dispatch actions


