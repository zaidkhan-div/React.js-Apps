import React, { useEffect, useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { useGetAllTodosQuery, useUpdateCompletedMutation } from '../features/ApiSlice';
import { setTodo } from '../features/TodoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const Content = () => {
    const [active, setActive] = useState("All");
    const { data, isLoading, isSuccess, isError } = useGetAllTodosQuery();
    const [updateTodoCheck] = useUpdateCompletedMutation();

    const todosData = useSelector((state) => state.todo.filteredTodos); // getting data from the TodoSlice
    const dispatch = useDispatch();

    const toggleList = [
        "All",
        "High Priority",
        "Due Date",
        "Completed",
        "React",
        "Design",
    ];

    useEffect(() => {
        if (isSuccess) {
            dispatch(setTodo(data));
        }
    }, [isSuccess, data]);

    const filteredTodos = todosData.filter((todo) => {
        if (active === "Completed") {
            return todo?.completed === true
        } else if (active === 'High Priority') {
            return todo?.priority === "high"
        } else if (active === "Due Date") {
            let today = new Date().toISOString().split("T")[0];
            return todo?.dueDate > today
        }
        else {
            return todo
        }
    })

    console.log(filteredTodos, "Completed");

    const handleCheckbox = async (value, item) => {
        try {
            let obj = {
                id: item?.id,
                body: {
                    ...item,
                    completed: value
                }
            }
            await updateTodoCheck(obj);
        } catch (error) {
            toast(error.message);
        }
    }

    let today = new Date().toISOString().split("T")[0];
    console.log(today, "today")

    return (
        <div className='py-5 px-5 h-full'>
            <h2 className='text-black text-3xl font-semibold font-serif'>All Tasks</h2>

            <div className='flex flex-wrap gap-5 mt-5'>
                <div className="flex flex-wrap gap-5 mt-5">
                    {toggleList.map((item) => (
                        <div
                            key={item}
                            onClick={() => setActive(item)}
                            className={`flex items-center justify-between border border-[#0000001f] rounded-xl py-0.5 px-3 cursor-pointer text-[14px]
                             ${active === item ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600'
                                    : 'text-black  bg-[#e1e3f9]'}`}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* All Tasks are rendered Here */}

            <div className='mt-5 h-full flex flex-col gap-5'>

                {isLoading ?
                    <h2 className='text-center text-2xl'>Loading...</h2>
                    : filteredTodos?.map((item, index) => (
                        <div key={index} className='bg-white shadow-lg w-full rounded-lg flex items-start justify-start px-3 py-5 gap-4'>
                            <div>
                                <Checkbox
                                    checked={item?.completed}
                                    onCheckedChange={(value) => handleCheckbox(value, item)}
                                    className="border border-[#0000002b] cursor-pointer " />
                            </div >
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-black text-lg font-medium '>{item?.title}</h2>
                                <p className='text-gray-500 text-[14px]'>{item?.description}</p>
                                <div className='flex flex-wrap gap-5 items-center'>
                                    <span className={`${item?.priority === "high" ? "bg-red-100 text-red-400" : "bg-gray-100 text-gray-500"}  text-xs px-2 py-0.5 rounded-full cursor-pointer`}>
                                        {item?.priority}
                                    </span>
                                    <span className='bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full cursor-pointer'>
                                        Due: {item?.dueDate}
                                    </span>
                                    <span className='bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full cursor-pointer'>
                                        Estimated: {item?.estimatedHours}
                                    </span>
                                </div>
                                {/* <div className='flex flex-wrap gap-5 items-center'>
                                    <span className='bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full cursor-pointer'>
                                        {item?.tags[0]}
                                    </span>
                                    <span className='bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full cursor-pointer'>
                                        {item?.tags[1]}
                                    </span>
                                    <span className='bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full cursor-pointer'>
                                        {item?.tags[2]}
                                    </span>
                                </div> */}
                            </div>
                        </div>
                    ))
                }
            </div>

        </div >
    )
}

export default Content

{/* <div className='bg-white shadow-lg w-full rounded-lg flex items-start justify-start px-3 py-5 gap-4'>
                    <div>
                        <Checkbox
                            onCheckedChange={(value) => setIsChecked(value)}
                            className="border border-[#0000002b] cursor-pointer " />
                    </div >
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-black text-lg font-medium '>Implement Redux Toolkit with RTK Query</h2>
                        <p className='text-gray-500 text-[14px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias expedita corporis asperiores similique ab? Similique deserunt soluta cupiditate rem, sunt magni illo quas laudantium ullam. Impedit delectus odit assumenda aliquid recusandae esse, officia voluptate adipisci?</p>
                        <div className='flex flex-wrap gap-5 items-center'>
                            <span className='bg-red-100 text-red-400 text-xs px-2 py-0.5 rounded-full cursor-pointer'>
                                High
                            </span>
                            <span className='bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full cursor-pointer'>
                                Due Date
                            </span>
                            <span className='bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full cursor-pointer'>
                                Estimated Hours
                            </span>
                            <span className='bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full cursor-pointer'>
                                High
                            </span>
                        </div>
                        <div className='flex flex-wrap gap-5 items-center'>
                            <span className='bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full cursor-pointer'>
                                react
                            </span>
                            <span className='bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full cursor-pointer'>
                                redux
                            </span>
                            <span className='bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full cursor-pointer'>
                                toolkit
                            </span>
                        </div>
                    </div>
</div> */}