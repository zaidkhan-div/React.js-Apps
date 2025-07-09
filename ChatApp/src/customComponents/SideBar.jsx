import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, setReceiver } from '@/features/ChatSlice';
import { useParams } from 'react-router-dom';

const SideBar = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const { receiver, messages, userNamesById } = useSelector((state) => state.Chat);
    console.log(receiver, " Receiver Id")

    const users = useSelector((state) => state.Chat.users);
    const { id } = useParams();

    const currentUser = useSelector(selectCurrentUser(id))
    console.log(currentUser, 'user');

    let result = Object.values(users); // converts Objects to an array

    const filterUsers = result.filter((element) => {
        return element.id !== currentUser.id
    })
    console.log(filterUsers, "filtered Users")



    const now = new Date();
    const timeString = `${now.getHours()}:${now.getMinutes()}`;
    const dateString = `${now.getDate()}
    ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][now.getMonth()]}`;

    // const filterUsers = result.filter((item) =>
    //     item.userName.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    // )


    return (
        <div className="h-full bg-white border border-gray-200 rounded-3xl flex flex-col">
            <div className="p-3 bg-gray-50 rounded-3xl">
                <p className='text-blue-800 py-2'>Current User: {currentUser.userName}</p>
                <input
                    type="text"
                    placeholder="Search contacts..."
                    className="w-full p-2 border border-indigo-600 rounded-3xl  focus:outline-none
                    focus:ring-1 focus:ring-indigo-600"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex-1 overflow-y-auto">
                {filterUsers.map((user) => (
                    // <div
                    //     key={user.id}
                    //     className="p-3 hover:bg-gray-100 cursor-pointer flex items-center"
                    //     onClick={() => dispatch(setReceiver(user))}
                    // >
                    <div
                        key={user.id}
                        className="p-3 hover:bg-gray-100 cursor-pointer flex items-center"
                        onClick={() => dispatch(setReceiver(user))}
                    >
                        <div className="w-10 h-10  rounded-full bg-gray-300 flex items-center justify-center mr-3">
                            {/* This is like a profile pic */}
                            {user.userName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <p className="font-medium">{user.userName}</p>
                            <p className="text-xs text-gray-500">{`${dateString} ${timeString}`}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideBar