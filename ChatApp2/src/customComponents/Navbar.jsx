import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm  w-full z-10">
            <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 items-center">
                <div className="text-3xl text-indigo-600">
                    ChatApp
                </div>
                <div className="flex gap-5 text-lg ">
                    <NavLink to='/' className='hover:text-indigo-500'>Chat</NavLink>
                    <NavLink to='/login' className='hover:text-indigo-500'>Login</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar