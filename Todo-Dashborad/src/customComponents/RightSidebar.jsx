import React from 'react'
import { useSelector } from 'react-redux';

const RightSidebar = () => {

    const todosData = useSelector((state) => state.todo.todos);

    return (
        <div className='border-l border-gray-300 bg-[#f7f6fb] py-5 px-5 h-full'>
            <div className='flex flex-col gap-5'>
                <p className='text-lg font-bold'>Analytics Dashboard</p>
                <div className='shadow-2xl bg-white h-auto w-full rounded-lg px-5 py-5 flex flex-col gap-2'>
                    <p className='text-purple-500 text-2xl font-bold'>{todosData.length}</p>
                    <p className='text-gray-500 uppercase text-[14px]'>Total Tasks</p>
                    <div className='bg-[#f0eef9] rounded-lg w-full py-15 flex items-center justify-center'>
                        <span className='text-xs '>Weekly Progress</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar
