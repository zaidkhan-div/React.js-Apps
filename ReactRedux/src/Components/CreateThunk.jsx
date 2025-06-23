import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../Features/CreateThunkSlice'

const CreateThunk = () => {
    const dispatch = useDispatch()

    const handlFetch = () => {
        dispatch(fetchUser(1))
            .unwrap()
            .then((user) => console.log('Success:', user))
            .catch((error) => console.error('Error:', error));
    }

    return (
        <div>
            CreateAyncThunk
            <button onClick={handlFetch}>Load User</button>
        </div>
    )
}

export default CreateThunk