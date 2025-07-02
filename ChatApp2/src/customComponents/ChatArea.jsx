import React from 'react'
import { useState } from 'react'
import { MdSend } from 'react-icons/md'

function ChatArea() {
    const [inputValue, setInputValue] = useState('')

    return (
        <div className="flex flex-col rounded-3xl h-full">
            {/* ChatHeader */}
            <div>
                
            </div>

            {/* ChatArea */}
            <div className='flex-1 p-4 overflow-y-auto bg-gray-50'>

            </div>

            {/* InputBox */}
            <div className=" p-3 border-t border-gray-300 bg-white flex items-center gap-2 rounded-b-3xl" >
                <div className="flex flex-1 items-center border border-indigo-600 rounded-3xl overflow-hidden" >
                    <input
                        type="text"
                        placeholder='Type a message...'
                        className='w-full p-2 px-4 focus:outline-none bg-transparent'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className='p-2 text-indigo-500 pr-4 cursor-pointer'>
                        <MdSend className='w-5 h-5' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatArea