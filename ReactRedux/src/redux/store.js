import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Features/CounterSlice";
import ProfileSlice from '../Features/ProfileSlice'
import TodosSlice from '../Features/todosSlice'
import ExtraReducerThunk from '../Features/ExtraReducerThunk'
import SliceForThunk from '../Features/ThunkSlice2'
// persist-redux 
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
// import storageSession from 'redux-persist/lib/storage/session'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // storageSession,
  // If we want to prevent notes from persisting, the config object should look like the following:
  // blacklist:['todos']

  // And if you want the users state to always be persisted, you would indicate it in the config object like so:
  // whitelist: ['todos']
}

const persistedReducer = persistReducer(persistConfig, TodosSlice)

export const store = configureStore({
  reducer: {
    todos: persistedReducer,
    // todos: TodosSlice,
    counter: CounterSlice,
    profile: ProfileSlice,
    users: ExtraReducerThunk,
    apiCalling: SliceForThunk
  }
})

export const Persistor = persistStore(store);

// Createasynthunk createDraftSafeSelector createSelector extrareducer 

// extraReducers = ❌ only needed if you're handling API / async logic
//You don't need extraReducers unless you're doing async stuff.

// Redux is a state management framework that can be used with a number of different web technologies, including React.

// In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux store. This is the first important principle to understand when learning Redux: the Redux store is the single source of truth when it comes to application state.

// This also means that any time any piece of your app wants to update state, it must do so through the Redux store. The unidirectional data flow makes it easier to track state management in your app.

// The Redux store is an object which holds and manages application state. There is a method called createStore() on the Redux object, which you use to create the Redux store. This method takes a reducer function as a required argument. The reducer function is covered in a later challenge, and is already defined for you in the code editor. It simply takes state as an argument and returns state.

// Declare a store variable and assign it to the createStore() method, passing in the reducer as an argument.