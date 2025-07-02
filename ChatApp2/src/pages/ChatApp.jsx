import React from 'react'
import Sidebar from '../customComponents/Sidebar'
import ChatArea from '../customComponents/ChatArea'

const ChatApp = () => {
    return (
        <div className="flex gap-5 h-[90vh] max-w-7xl mx-auto m-5 p-5 bg-gray-100">
            <div className="w-1/3 border-2 border-gray-300 rounded-3xl">
                <Sidebar />
            </div>
            <div className='w-2/3 flex flex-col'>
                <ChatArea />
            </div>
        </div>
    )
}

export default ChatApp