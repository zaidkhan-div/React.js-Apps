import React, { useEffect, useState } from 'react'
import { MdSend } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from '@/features/ChatSlice';

const ChatArea = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('')

    const { currentUser, messages, receiver } = useSelector((state) => state.Chat);
    let messageArray = Object.values(messages).flat();
    // const currentChatMessages = messageArray.filter((msg)=>
    // (msg.senderId === currentUser.id && msg.receiverId === receiver?.id) ||
    // (msg.senderid === receiver?.id && msg.receiverId === currentUser.id)
    // );

    const currentChatId = [currentUser?.id, receiver?.id].sort().join('_');
    const currentChatMessages = messageArray.filter(
        (msg) => [msg.senderId, msg.receiverId].sort().join('_') === currentChatId
    );

    // const currentChatMessages = messages[currentChatId] || [];
    console.log(currentChatMessages, " CurrentMessages");
    console.log(messageArray, " Stil messages are in the MessageArray")

    if (!receiver) {
        return (
            <div className="grid place-items-center h-full">
                <p>Select a user to start chatting</p>
            </div>
        )
    }

    const handleChange = () => {
        if (inputValue.trim()) {
            dispatch(sendMessage(inputValue))
            setInputValue("");
        }
    }

    // const messages = useSelector((state) => state.Chat.messages);
    // const messagesArray = Object.values(messages);
    // console.log(messagesArray);

    // const lsData = JSON.parse(localStorage.getItem('persist:chatApp1'));
    // const savedMessages = lsData?.Chat ? JSON.parse(lsData.Chat).messages : {};
    // console.log(savedMessages)


    return (
        <div className="flex flex-col rounded-3xl h-full">
            {/* Chat Header */}
            {receiver && (
                <div className="p-3 border-b border-gray-300 bg-gray-100 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center">
                        {receiver.userName.charAt(0).toUpperCase()}</div>
                    <div>
                        <p className="font-medium">{receiver.userName}</p>
                        <p className="text-xs text-gray-500">Online</p>
                    </div>
                </div>
            )}

            {/* Messages (Placeholder) */}
            < div className="flex-1 p-4 overflow-y-auto  bg-gray-50">
                {/* Incoming Message */}
                {currentChatMessages.map((message) => (
                    <div key={message.id}
                        className={`flex mb-3 ${message.senderId === currentUser.id ? "justify-end" : ""
                            }`}>
                        <div className={`p-2 rounded-lg max-w-xs text-white ${message.senderId === currentUser.id ? "bg-blue-500" : "bg-gray-400"}`}>
                            <p>{message?.text}</p>
                        </div>
                    </div>
                ))}
                {/* <div className="flex mb-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                    <div className="bg-white p-2 rounded-lg max-w-xs">
                        <p>Hi! ZaidKhan</p>
                    </div>
                </div>
                <div className="flex mb-3 justify-end">
                    <div className="bg-blue-500 text-white p-2 rounded-lg max-w-xs">
                        <p>Hi! How's it going?</p>
                    </div>
                </div> */}
            </div>


            {/* Input Box (Disabled) */}
            < div className="p-3 border-t border-gray-300 bg-white flex items-center gap-2 rounded-b-3xl" >
                < div className="flex flex-1 items-center border border-indigo-600 rounded-3xl overflow-hidden" >
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="w-full p-2 px-4 focus:outline-none bg-transparent"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                        className="p-2 text-indigo-600 hover:text-indigo-800 pr-4 cursor-pointer"
                        onClick={handleChange}
                    >
                        <MdSend className="w-5 h-5" />
                    </button>
                </div>
            </div >
        </div >
    );
};

export default ChatArea