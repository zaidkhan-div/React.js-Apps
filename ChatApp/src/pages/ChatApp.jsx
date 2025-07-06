import ChatArea from '@/customComponents/ChatArea'
import SideBar from '@/customComponents/SideBar'
import { selectCurrentUser } from '@/features/ChatSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ChatApp = () => {
    const { id } = useParams();
    const user = useSelector(selectCurrentUser(id))
    console.log(id, user);

    return (
        <div className="flex gap-5 h-[90vh] max-w-7xl mx-auto m-5 p-5 bg-gray-100">
            {/* SideBar */}
            <div className="w-1/3 border-r border-gray-300 rounded-3xl bg-white">
                <SideBar />
            </div>
            {/* ChatArea */}
            <div className="w-2/3 flex flex-col">
                <ChatArea />
            </div>
        </div>
    )
}

export default ChatApp