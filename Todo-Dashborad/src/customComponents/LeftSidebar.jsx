import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const LeftSidebar = () => {
    const allTasks = useSelector((state) => state.todo.todos);
    const [active, setActive] = useState("All Tasks");

    return (
        <div className='border-r border-gray-300 bg-[#f7f6fb] py-5 px-3 h-full flex flex-col gap-10'>

            <div className='flex flex-col gap-5'>
                <p className='text-xs text-gray-600 font-medium uppercase'>Navigation</p>
                <div className='flex flex-col gap-3'>
                    <div
                        onClick={() => setActive("All Tasks")}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${active === "All Tasks" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black'}`}>
                        <p>All Tasks</p>
                        <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px] flex items-center justify-center'>{allTasks.length}</span>
                    </div>
                    <div
                        onClick={() => setActive("Important")}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${active === "Important" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black '}`}>
                        <p>Important</p>
                        <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px] flex items-center justify-center'>5</span>
                    </div>
                    <div
                        onClick={() => setActive("Today")}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${active === "Today" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black '}`}>
                        <p>Today</p>
                        <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px] flex items-center justify-center'>8</span>
                    </div>
                    <div
                        onClick={() => setActive("Aanalytic")}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${active === "Aanalytic" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black '}`}>
                        <p>Aanalytic</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <p className='text-xs text-gray-600 font-medium uppercase'>Categories</p>
                <div className='flex flex-col gap-3'>
                    <div
                        onClick={() => setActive("Work")}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${active === "Work" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black'}`}>
                        <p>Work</p>
                        <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px]'>23</span>
                    </div>
                    <div
                        onClick={() => setActive("Personal")}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${active === "Personal" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black '}`}>
                        <p>Personal</p>
                        <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px]'>5</span>
                    </div>
                    <div
                        onClick={() => setActive("Learning")}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${active === "Learning" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black '}`}>
                        <p>Learning</p>
                        <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px]'>8</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar
