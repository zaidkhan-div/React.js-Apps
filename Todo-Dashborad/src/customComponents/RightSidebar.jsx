import React from 'react'
import { useSelector } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';

const RightSidebar = ({ isVisible, onClose }) => {

    const todosData = useSelector((state) => state.todo.todos);


    return (
        // <div className='border-l border-gray-300 bg-[#f7f6fb] py-5 px-5 h-full relative'>
        <div className={`fixed top-0 left-0 h-full z-50 bg-[#f7f6fb] p-5 border-r border-gray-300
            transform transition-transform duration-300 ease-in-out 
            ${isVisible ? 'translate-x-0' : '-translate-x-full'} md:static md:translate-x-0 md:block`}>
            <div
                onClick={onClose}
                className='block md:hidden absolute  left-1'>
                <RxCross2 size="25" />
            </div>
            <div className='flex flex-col mt-7 md:mt-0 gap-5'>
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
