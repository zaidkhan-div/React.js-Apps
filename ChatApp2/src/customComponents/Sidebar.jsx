import React, { use, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Sidebar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const user = useSelector((state) => state.Chat.users);
    const usersToArray = Object.values(user);

    const FilerUsers = usersToArray.filter((item) => {
        return item.userName.toLowerCase().includes(searchTerm.toLowerCase())
    })


    return (
        <div className="h-full p-3 bg-white border border-gray-200 rounded-3xl flex flex-col">
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
            {/* List of CurrentUser */}
            <div className='p-5 h-full overflow-y-auto rounded-b-3xl'>
                {FilerUsers.map((user, index) => (
                    <div key={index} className='flex items-center p-3 cursor-pointer' onClick={() => toast.success(user.userName)}>
                        <div className='bg-gray-300 text-lg text-indigo-500 w-10 h-10 rounded-full flex items-center justify-center mr-3'>
                            <div>{user.userName.charAt(0).toUpperCase()}</div>
                        </div>
                        <div>
                            <p className='font-medium'>{user.userName}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar