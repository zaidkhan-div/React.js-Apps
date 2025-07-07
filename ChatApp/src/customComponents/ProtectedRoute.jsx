import { selectUsers } from '@/features/ChatSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    // const { currentUser } = useSelector((state) => state.Chat)
    // const currentUser = useSelector(selectUsers);
    const { id } = useParams(); 
    const users = useSelector(selectUsers);
    const currentUser = Object.values(users).find((u) => u.id === id);

    if (!currentUser) {
        return <Navigate to="/login" />;
    }
    return children
}

export default ProtectedRoute