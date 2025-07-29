import { useDispatch } from 'react-redux'
import { fetchUser } from '../Features/CreateThunkSlice'
import { unwrapResult } from '@reduxjs/toolkit'

const CreateThunk = () => {
    const dispatch = useDispatch()

    let counter = 0;

    const handlFetch = () => {
        counter += 1;
        dispatch(fetchUser(counter))
            //.then(unwrapResult)
            // Using the attached .unwrap() property is preferred in most cases, however Redux Toolkit also exports an unwrapResult function that can be used for a similar purpose:
            .unwrap()
            .then((user) => console.log(user))
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