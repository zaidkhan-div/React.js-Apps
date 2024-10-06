// import { createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
// const initialState = {
//     usersList: [],
//     errorState:null
//   }


//   export const userSlice = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {
//       getUsers: (state) => {
//         axios.get('https://fakestoreapi.com/users',  {
//             headers: {
//            'Content-Type': 'application/json' // Specify the content type
//        }},)
//          .then(function (response) {
//            const {data} = response
//         //    setUsersData(data)
//         //    setIsDataLoaded(false)
//          console.log(state.usersList);
        
//          state.usersList.push(data);
//          console.log(state.usersList);
//          })
//          .catch(function (error) {
//            console.log(error);
//            state.errorState = error
//            //return error;
//            //setIsDataLoaded(false)
     
//          });
//       },
//     //   decrement: (state) => {
//     //     state.value -= 1
//     //   },
//     //   incrementByAmount: (state, action) => {
//     //     state.value += action.payload
//     //   },
//     },
//   })


// // Action creators are generated for each case reducer function
// export const { getUsers } = userSlice.actions

// export default userSlice.reducer





import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    usersList: [],
    errorState: null,
};

const getUsers = createAsyncThunk('users/getUsers', async () => {
    const response = await axios.get('https://fakestoreapi.com/users', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
});

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                // Assign the fetched users data to usersList
                state.usersList = action.payload;
                state.errorState = null; // Clear any previous error
            })
            .addCase(getUsers.rejected, (state, action) => {
                // Handle error
                state.errorState = action.error.message;
            });
    },
});

// Export the async action creator
export { getUsers };

// Export the reducer
export default userSlice.reducer;
