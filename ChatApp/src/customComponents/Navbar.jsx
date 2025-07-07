import { selectUsers } from "@/features/ChatSlice";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

const Navbar = () => {
    // const { currentUser } = useSelector((state) => state.Chat);
    // const currentUser = useSelector(selectUsers)
    // console.log(currentUser);
    const { userNamesById } = useSelector((state) => state.Chat);
    const checkId = Object.keys(userNamesById);
    let result = checkId[0];
    console.log(result, "currentUser");



    return (
        <nav className="bg-white shadow-sm  w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/*  Right side logo  */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="ml-2 text-xl font-bold text-indigo-600">
                                <NavLink to={`/home/${result}`}>
                                    ChatApp
                                </NavLink>
                            </span>
                        </div>
                    </div>
                    {/* Left side menu items */}
                    <div className="flex items-center space-x-8">
                        {/* {
                            currentUser &&
                            <div className="text-black">
                                {currentUser.userName}
                            </div>
                        } */}

                        <NavLink
                            to={`/home/${userNamesById.id}`}
                            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                        >
                            Chat
                        </NavLink>
                        <NavLink
                            to="/login"
                            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;