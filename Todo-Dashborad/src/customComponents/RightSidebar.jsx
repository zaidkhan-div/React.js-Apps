import React from 'react'
import { useSelector } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';
import ProgressBar from './ProgressBar';

const RightSidebar = ({ isVisible, onClose }) => {
    const todosData = useSelector((state) => state.todo.todos);

    const completionScore = todosData.filter((item) => item?.completed);
    console.log(completionScore, "Rate");

    const calculateRate = (completionScore.length / todosData.length) * 100;

    return (
        <div className={`fixed top-0 right-0 h-full w-full z-50 bg-[#f7f6fb] p-5 border-r border-gray-300
            transform transition-transform duration-300 ease-in-out overflow-y-auto removeScroll
            ${isVisible ? 'translate-x-0' : 'translate-x-full'} md:static md:translate-x-0 md:block`}>
            <div
                onClick={onClose}
                className='block md:hidden absolute left-1'>
                <RxCross2 size="25" />
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col mt-7 md:mt-0 gap-1'>
                    <p className='text-lg font-bold'>Analytics Dashboard</p>
                    <div className='shadow-2xl bg-white h-auto w-full rounded-lg px-5 py-5 flex flex-col gap-2'>
                        <p className='text-purple-500 text-2xl font-bold'>{todosData.length}</p>
                        <p className='text-gray-500 uppercase text-[14px]'>Total Tasks</p>
                        <div className='bg-[#f0eef9] rounded-lg w-full py-15 flex items-center justify-center'>
                            <span className='text-xs '>Weekly Progress</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-10 md:mt-0 gap-5'>
                    <div className='shadow-2xl bg-white h-auto w-full rounded-lg px-5 py-5 flex flex-col gap-2'>
                        <div className='rounded-lg w-full py-2  px-10 flex flex-col gap-2 items-center justify-center'>
                            <ProgressBar completionRate={calculateRate.toFixed(0)} />
                            <p className='text-base uppercase text-gray-400'>Completion Rate</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-7 md:mt-0 gap-5'>
                    <div className='shadow-2xl bg-white h-auto w-full rounded-lg px-5 py-2 flex flex-col gap-2'>
                        <p className='text-purple-500 text-2xl font-bold'>{calculateRate.toFixed(0)}</p>
                        <p className='text-gray-500 uppercase text-[14px]'>Productivity Score</p>
                        <div className='bg-[#f0eef9] rounded-lg w-full py-10 flex items-center justify-center'>
                            <span className='text-xs '>Daily Activity Heatmap</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-7 md:mt-0 gap-5'>
                    <div className='shadow-2xl bg-white h-auto w-full rounded-lg px-5 py-1 flex flex-col gap-2'>
                        <p className='text-purple-500 text-2xl font-bold'>7</p>
                        <p className='text-gray-500 uppercase text-[14px]'>day streak</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RightSidebar
