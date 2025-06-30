import React from 'react'
import { MdSend } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { setReceiver } from '@/features/ChatSlice';

const ChatArea = () => {
    const dispatch = useDispatch();

    const { receiver } = useSelector((state) => state.Chat);
    console.log(receiver);

    if (!receiver) {
        return (
            <div className="grid place-items-center h-full">
                <p>Select a user to start chatting</p>
            </div>
        )
    }


    return (
        <div className="flex flex-col rounded-3xl h-full">
            {/* Chat Header */}
            {receiver && (
                <div className="p-3 border-b border-gray-300 bg-gray-100 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                    <div>
                        <p className="font-medium">{receiver.userName}</p>
                        <p className="text-xs text-gray-500">Online</p>
                    </div>
                </div>
            )}

            {/* Messages (Placeholder) */}
            <div className="flex-1 p-4 overflow-y-auto rounded-t-3xl bg-gray-50">
                {/* Incoming Message */}
                <div className="flex mb-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                    <div className="bg-white p-2 rounded-lg max-w-xs">
                        <p>Hi! ZaidKhan </p>
                        <p className="text-xs text-gray-500 text-right mt-1">12:30 PM</p>
                    </div>
                </div>

                {/* Outgoing Message */}
                <div className="flex mb-3 justify-end">
                    <div className="bg-blue-500 text-white p-2 rounded-lg max-w-xs">
                        <p>Hi! How's it going?</p>
                        <p className="text-xs text-blue-100 text-right mt-1">12:32 PM</p>
                    </div>
                </div>
            </div>

            {/* Input Box (Disabled) */}
            <div className="p-3 border-t border-gray-300 bg-white flex items-center gap-2 rounded-b-3xl">
                {/* Input + Button Container */}
                <div className="flex flex-1 items-center border border-indigo-600 rounded-3xl overflow-hidden">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="w-full p-2 px-4 focus:outline-none bg-transparent"
                    />

                    {/* Send Button (attached to input) */}
                    <button
                        className="p-2 text-indigo-600 hover:text-indigo-800 pr-4 cursor-pointer"
                        onClick={() => console.log('Send message')}
                    >
                        <MdSend className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatArea