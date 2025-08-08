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


const LeftSidebar = ({ isVisible, onClose, activeFilter, setActiveFilter }) => {

    const allTasks = useSelector((state) => state.todo.todos);

    const todayTask = allTasks.filter((todo) => {
        let today = new Date().toISOString().split("T")[0];
        return todo?.dueDate === today;
    });
    const importantTask = allTasks.filter((todo) => {
        return todo?.priority === "high";
    });


    let calculateRate = 0;
    function calculationRate(input, output) {
        return (input.length / output.length) * 100;
    }
    if (activeFilter === "All Tasks") {
        let completedTaks = allTasks.filter((item) => item?.completed);
        // let calculateAllTasks = (completedTaks.length / todosData.length) * 100;
        let calculateAllTasks = calculationRate(completedTaks, allTasks);
        calculateRate = calculateAllTasks;
    } if (activeFilter === "Important") {
        let completedTasks = allTasks.filter((item) => {
            return item?.priority === "high" ? item?.completed : ""
        });
        let priorityTasks = allTasks.filter((item) => item?.priority === "high");
        var importantRate = calculationRate(completedTasks, priorityTasks);
        calculateRate = importantRate
    } if (activeFilter === "Today") {
        let today = new Date().toISOString().split("T")[0];
        let todayTasksCompleted = allTasks.filter((item) => {
            return item?.dueDate === today ? item?.completed : ""
        });
        let todayTasks = allTasks.filter(item => item?.dueDate === today)
        let todayRates = calculationRate(todayTasksCompleted, todayTasks);
        calculateRate = todayRates;
    } else {
        calculateRate;
    }

    return (
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
                        onClick={() => {
                            setActiveFilter("All Tasks");
                            onClose()
                        }}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${activeFilter === "All Tasks" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black'}`}>
                        <div className='w-[30px] flex items-center justify-start gap-2'>
                            <img src={RoblexImg} alt="" className='w-full' />
                            <p>AllTasks</p>
                        </div>
                        <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px] flex items-center justify-center'>
                            {allTasks.length}
                        </span>
                    </div>
                    <div
                        onClick={() => {
                            setActiveFilter("Important");
                            onClose();
                        }}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${activeFilter === "Important" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black '}`}>
                        <div className='w-[30px] flex items-center justify-start gap-2'>
                            <img src={ReactImg} alt="" className='w-full' />
                            <p>Important</p>
                        </div>
                        <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px] flex items-center justify-center'>{importantTask.length}</span>
                    </div>
                    <div
                        onClick={() => setActiveFilter("Today")}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${activeFilter === "Today" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black '}`}>
                        <div className='w-[30px] flex items-center justify-start gap-2 '>
                            <img src={CalendrImg} alt="" />
                            <p>Today</p>
                        </div>
                        <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px] flex items-center justify-center'>
                            {todayTask.length}
                        </span>
                    </div>
                    <div
                        onClick={() => setActiveFilter("Aanalytic")}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${activeFilter === "Aanalytic" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black '}`}>
                        <div className='w-[30px] flex items-center justify-start gap-2 '>
                            <img src={AnalyticImg} alt="" />
                            <p>Aanalytic</p>
                        </div>
                    </div>
                </div>
            </div>

            < div className='flex flex-col gap-5 mt-10' >
                <p className='text-xs text-gray-600 font-medium uppercase'>Categories</p>
                <div className='flex flex-col gap-3'>
                    <div
                        onClick={() => {
                            setActiveFilter("Work");
                            onClose()
                        }}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${activeFilter === "Work" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black'}`}>
                        <div className='w-[30px] flex items-center justify-start gap-2'>
                            <img src={Bagimg} alt="" />
                            <p>Work</p>
                        </div>
                        {/* <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px]'>23</span> */}
                    </div >
                    <div
                        onClick={() => {
                            setActive("Personal");
                            onClose()
                        }}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${activeFilter === "Personal" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black '}`}>
                        <div className='w-[30px] flex items-center justify-start gap-2'>
                            <img src={ManImg} alt="" />
                            <p>Personal</p>
                        </div>
                        {/* <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px]'>5</span> */}
                    </div>
                    <div
                        onClick={() => {
                            setActiveFilter("Learning");
                            onClose();
                        }}
                        className={`flex items-center justify-between rounded-xl py-3 px-3 cursor-pointer
                        ${activeFilter === "Learning" ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600' : 'text-black '}`}>
                        <div className='w-[30px] flex items-center justify-start gap-2'>
                            <img src={KnowledgeImg} alt="" />
                            <p>Learning</p>
                        </div>
                        {/* <span className='bg-red-500 text-[10px] font-bold text-white rounded-full px-2 py-[1px]'>8</span> */}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default LeftSidebar
