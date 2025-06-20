import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { currentProfile, updateProfile } from '../Features/Counter/ProfileSlice'

const Profile = () => {
    const { currentProfile, updateProfile } = useSelector((state) => state.profile);
    const dispatch = useDispatch()
    const results = dispatch(updateProfile({ name: "Saad", email: "Email" }))

    console.log(currentProfile.name);
    console.log(currentProfile.email);


    return (
        <div>Profile</div>
    )
}

export default Profile