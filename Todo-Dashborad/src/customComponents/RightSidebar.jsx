import React from 'react'
import { useSelector } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';
import ProgressBar from './ProgressBar';
import { toast } from 'sonner';

const RightSidebar = ({ isVisible, onClose, activeFilter }) => {

    const todosData = useSelector((state) => state.todo.todos);

    // let completionScore = todosData.filter((item) => item?.completed);
    // var calculateRate = (completionScore.length / todosData.length) * 100;

    let calculateRate = 0;
    function calculationRate(input, output) {
        return (input.length / output.length) * 100;
    }

    if (activeFilter === "All Tasks") {
        let completedTaks = todosData.filter((item) => item?.completed);
        // let calculateAllTasks = (completedTaks.length / todosData.length) * 100;
        let calculateAllTasks = calculationRate(completedTaks, todosData);
        calculateRate = calculateAllTasks;
    } if (activeFilter === "Important") {
        let completedTasks = todosData.filter((item) => {
            return item?.priority === "high" ? item?.completed : ""
        });
        let priorityTasks = todosData.filter((item) => item?.priority === "high");
        var importantRate = calculationRate(completedTasks, priorityTasks);
        calculateRate = importantRate
    } if (activeFilter === "Today") {
        let today = new Date().toISOString().split("T")[0];
        let todayTasksCompleted = todosData.filter((item) => {
            return item?.dueDate === today ? item?.completed : ""
        });
        let todayTasks = todosData.filter(item => item?.dueDate === today)
        let todayRates = calculationRate(todayTasksCompleted, todayTasks);
        calculateRate = todayRates;
    } else {
        calculateRate;
    }

    return (
        <div className={`fixed top-0 right-0 h-full w-full z-50 bg-[#f7f6fb] p-5 border-l border-gray-300
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
