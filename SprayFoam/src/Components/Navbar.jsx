import React, { useState } from 'react'
import { FaPhone, FaSearch, FaTimes } from 'react-icons/fa'
import Logo from '../assets/Images/Logo.png'
import { TiThMenu } from 'react-icons/ti'

const Navbar = () => {
    const [isMenuOpen, setIsOpenMenu] = useState(false);
    
    const toggleMenu = () => {
        setIsOpenMenu(!isMenuOpen)
    }

    return (
        <div>
            <nav className='flex justify-between items-center px-3 md:px-1 lg:px-20 py-9'>
                <div className="w-[200px] h-[45px]">
                    <img src={Logo} alt="LogoImage" className='w-full h-full' />
                </div>
                
                {/* Mobile Menu Button */}
                <div className='forMenu:hidden'>
                    <div>
                        <TiThMenu size='30px' color='white' onClick={toggleMenu} />
                    </div>
                    
                    {/* Mobile Menu */}
                    <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        {/* Overlay */}
                        <div
                            className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0'}`}
                            onClick={toggleMenu}
                        ></div>

                        {/* Menu Panel */}
                        <div className={`absolute top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                            {/* Close Button */}
                            <div className="p-4 flex justify-start">
                                <FaTimes
                                    size="30px"
                                    className="cursor-pointer text-gray-800 hover:text-red-500 transition-colors duration-200"
                                    onClick={toggleMenu}
                                />
                            </div>

                            {/* Menu Items */}
                            <div className="flex flex-col gap-4 p-4 text-lg font-inter">
                                {['Home', 'About', 'Services Areas', "FAQ's", 'Recent Articles', 'Contact Us'].map((item) => (
                                    <span 
                                        key={item}
                                        className="cursor-pointer py-2 px-3 rounded hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Desktop Navigation */}
                <div className='flex-row items-center text-white text-lg font-inter justify-center gap-1 md:gap-6 hidden forMenu:flex'>
                    {['Home', 'About', 'Services Areas', "FAQ's", 'Recent Articles', 'Contact Us'].map((item) => (
                        <span 
                            key={item}
                            className="cursor-pointer hover:text-btn_color transition-colors duration-200"
                        >
                            {item}
                        </span>
                    ))}
                </div>
                
                {/* Desktop Contact */}
                <div className='gap-10 items-center hidden xl:flex text-white'>
                    <div className="icon-wrapper bg-btn_color p-[15px] rounded-full text-white hover:bg-opacity-80 transition-colors duration-200">
                        <FaSearch />
                    </div>
                    <span className='text-lg font-inter hover:text-btn_color transition-colors duration-200'>
                        <FaPhone className='inline mr-2' /> (516) 715-5706
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar