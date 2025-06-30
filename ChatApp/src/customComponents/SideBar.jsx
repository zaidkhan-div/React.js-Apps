import React, { useState } from 'react'

const SideBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="h-full bg-white border-r border-gray-200 rounded-3xl flex flex-col">
            {/* Search Bar */}
            <div className="p-3 bg-gray-50 rounded-3xl">
                <input
                    type="text"
                    placeholder="Search contacts..."
                    className="w-full p-2 border border-indigo-600 rounded-3xl  focus:outline-none
                    focus:ring-1 focus:ring-indigo-600"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Contacts List */}
            <div className="flex-1 overflow-y-auto rounded-3xl">
                {/* {filteredUsers.map((user) => ( */}
                <div
                    // key={user.id}
                    className="p-3 hover:bg-gray-100 cursor-pointer flex items-center"
                // onClick={() => onUserClick(user)}
                >
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                        {/* {user.userName.charAt(0).toUpperCase()} */}
                    </div>
                    <div>
                        {/* <p className="font-medium">{user.userName}</p> */}
                        <p className="font-medium">UserName</p>
                        <p className="text-xs text-gray-500">Last seen today</p>
                    </div>
                </div>
                {/* ))} */}
            </div>
        </div>
    )
}

export default SideBar