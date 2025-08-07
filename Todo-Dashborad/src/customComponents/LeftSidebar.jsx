import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import CalendrImg from './../assets/calendar.png'
import ReactImg from "./../assets/react.png"
import RoblexImg from "./../assets/roblox.png"
import AnalyticImg from "./../assets/analysis.png"
import Bagimg from './../assets/bag.png'
import KnowledgeImg from './../assets/knowledge.png'
import ManImg from './../assets/man.png'

const LeftSidebar = ({ isVisible, onClose }) => {
    const allTasks = useSelector((state) => state.todo.todos);
    const [active, setActive] = useState("All Tasks");


    const todayTask = allTasks.filter((todo) => {
        let today = new Date().toISOString().split("T")[0];
        return todo?.dueDate === today
    });
    const importantTask = allTasks.filter((todo) => {
        return todo?.priority === "high"
    });

    return (
        // <div className='border-r border-gray-300 bg-[#f7f6fb] py-5 px-3 h-full flex flex-col gap-10'>
        <div className={`fixed top-0 w-full left-0 h-full z-50 bg-[#f7f6fb] p-5 border-r border-gray-300
            transform transition-transform duration-300 ease-in-out overflow-y-auto removeScroll
            ${isVisible ? 'translate-x-0' : '-translate-x-full'} md:static md:translate-x-0 md:block`}>

            <div className='flex flex-col gap-5 relative'>
                <div
                    onClick={onClose}
                    className='block md:hidden absolute right-3'>
                    <RxCross2 size="25" />
                </div>
                <p className='text-xs text-gray-600 font-medium uppercase'>Navigation</p>
                <div className='flex flex-col gap-3'>
                    <div
                        onClick={() => setActive("All Tasks")}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${active === "All Tasks" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black'}`}>
                        <div className='w-[30px] flex items-center justify-start gap-2'>
                            <img src={RoblexImg} alt="" className='w-full' />
                            <p>AllTasks</p>
                        </div>
                        <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px] flex items-center justify-center'>
                            {allTasks.length}
                        </span>
                    </div>
                    <div
                        onClick={() => setActive("Important")}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${active === "Important" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black '}`}>
                        <div className='w-[30px] flex items-center justify-start gap-2'>
                            <img src={ReactImg} alt="" className='w-full' />
                            <p>Important</p>
                        </div>
                        <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px] flex items-center justify-center'>{importantTask.length}</span>
                    </div>
                    <div
                        onClick={() => setActive("Today")}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${active === "Today" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black '}`}>
                        <div className='w-[30px] flex items-center justify-start gap-2 '>
                            <img src={CalendrImg} alt="" />
                            <p>Today</p>
                        </div>
                        <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px] flex items-center justify-center'>
                            {todayTask.length}
                        </span>
                    </div>
                    <div
                        onClick={() => setActive("Aanalytic")}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${active === "Aanalytic" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black '}`}>
                        <div className='w-[30px] flex items-center justify-start gap-2 '>
                            <img src={AnalyticImg} alt="" />
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
                            <div className='w-[30px] flex items-center justify-start gap-2'>
                                <img src={Bagimg} alt="" />
                                <p>Work</p>
                            </div>
                            <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px]'>23</span>
                        </div>
                        <div
                            onClick={() => setActive("Personal")}
                            className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${active === "Personal" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black '}`}>
                            <div className='w-[30px] flex items-center justify-start gap-2'>
                                <img src={ManImg} alt="" />
                                <p>Personal</p>
                            </div>
                            <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px]'>5</span>
                        </div>
                        <div
                            onClick={() => setActive("Learning")}
                            className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${active === "Learning" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black '}`}>
                            <div className='w-[30px] flex items-center justify-start gap-2'>
                                <img src={KnowledgeImg} alt="" />
                                <p>Learning</p>
                            </div>
                            <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px]'>8</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LeftSidebar
