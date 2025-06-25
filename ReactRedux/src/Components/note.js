// ✅ Final Summary (Very Short)
// Concept	Redux	Redux Toolkit
// Boilerplate	High	Low
// Async Logic	Manual setup	Built-in (createAsyncThunk)
// Store Setup	Complex	Easy (configureStore)
// Reducer Writing	Manual + verbose	Simple with createSlice
// Used Today?	Rarely used directly	Yes, 90%+ in modern apps


// useSelector is a hook provided by React Redux that allows functional components to extract and access data from the Redux store.


// Memoization = Caching function results.
// Stores output for given inputs.
// Skips re-calculation if inputs don't change.


// Mutable are 
// objects and arrays function are mutable we can change them after they are created 

// Immutable are Primitive dataTypes 
// number, string, 
// they are immutable once created then we can not change them 

// Redux-Toolkit using immer.js

// state.todos.push(newTodo); // ❌ Looks mutable (but safe in RTK)

// // What Immer does internally:
// return {
//   ...state,
//   todos: [...state.todos, newTodo] // ✅ Real immutable update
// };