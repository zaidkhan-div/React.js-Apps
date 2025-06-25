import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchUsersApi } from '../Features/ThunkSlice2';
import { unwrapResult } from '@reduxjs/toolkit';

const ApiCallingWithThunk = () => {
    const dispath = useDispatch();

    dispath(fetchUsersApi())
        .then(unwrapResult)
        .then(data => console.log(data))
        .catch(err => console.log("Error", err))

    return (
        <div>ApiCallingWithThunk</div>
    )
}

export default ApiCallingWithThunk