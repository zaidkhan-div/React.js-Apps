import SideBar from '@/customComponents/SideBar'
import React from 'react'

const ChatApp = () => {
    return (
        <div className="flex h-[100vh] m-5 p-5 bg-gray-100 border-2 border-red-500 rounded-3xl">
            {/* SideBar */}
            <div className="w-1/3 border-r border-gray-300 rounded-3xl bg-white">
                <SideBar />
            </div>
            {/* ChatArea */}
            <div className="w-2/3 flex flex-col">
            </div>
            ChatApp
        </div>
    )
}

export default ChatApp