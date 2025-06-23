import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { currentProfile, updateProfile } from '../Features/ProfileSlice'

const Profile = () => {

    const dispatch = useDispatch();
    const { name, email } = useSelector((state) => state.profile.info);

    useEffect(() => {
        dispatch(currentProfile({ name, email }));
        // this the action we perform and send data in the reducer
        // we recieve like action.payload
    }, [dispatch]);

    console.log(name);


    return (
        <div>My name is {name} and here is my email: {email}</div>
    )
}

export default Profile