import React, { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"

const Content = () => {
    const [active, setActive] = useState("All");
    const [isChecked, setIsChecked] = useState(false);

    const toggleList = [
        "All",
        "High Priority",
        "Due Today",
        "Overdue",
        "Completed",
        "React",
        "Design",
    ];

    return (
        <div className='bg-[#f1f1fb] py-5 px-5 h-full'>
            <h2 className='text-black text-3xl font-semibold font-serif'>All Tasks</h2>

            <div className='flex flex-wrap gap-5 mt-5'>
                <div className="flex flex-wrap gap-5 mt-5">
                    {toggleList.map((item) => (
                        <div
                            key={item}
                            onClick={() => setActive(item)}
                            className={`flex items-center justify-between rounded-xl py-0.5 px-3 cursor-pointer text-[14px]
                             ${active === item ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600'
                                    : 'text-black border bg-[#e1e3f9] border-[#0000002b]'}`}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* All Tasks are rendered Here */}

            <div className='mt-5'>
                <div className='bg-white shadow-lg w-full rounded-lg flex items-start justify-start px-3 py-5 gap-4'>
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
                </div>
            </div>

        </div>
    )
}

export default Content
