import { createSlice } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
    name: 'counter', // name used in action types
    initialState: { value: 0 },
    reducers: { // reducer is just a object where each key is a function
        increament: (state) => {
            state.value = 1;
            // state	Current value of your slice
            // action	Object with type and optional payload sent when dispatching
        },
        updateValue: (state, action) => {
            state.value = action.payload
        },
        resetValue: (state) => {
            state.value = 0
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
export const { increament, updateValue, resetValue } = CounterSlice.actions // In components to dispatch actions


