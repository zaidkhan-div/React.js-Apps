import React from 'react'
import ContactImg from '../assets/Images/ContactImage.png'
import Container from './Container'
import ButtonComp from './ButtonComp'
import { MdKeyboardArrowRight } from 'react-icons/md'

const ContactSection = () => {
    return (
        <div className='mt-[100px] font-inter px-5 lg:px-0 pt-7 bg-cover bg-center bg-no-repeat h-auto' style={{ background: `url(${ContactImg})`, backgroundPosition: "right", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className='flex flex-col items-center justify-center gap-10 max-w-[1440px] mx-auto lg:flex-row md:items-center'>
                {/* Here are two child */}

                <div className='flex flex-col gap-12 w-full text-white text-left px-5 lg:w-[50%] md:pl-20'>
                    <h2 className='text-heading text-center md:text-left font-bold'>Insulation, Fireproofing & Drywall Contractors location</h2>
                    <div className='flex flex-col gap-5 items-center justify-between md:pr-8 md:flex-row'>
                        <h2 className='text-lg text-center md:text-left w-[230px]'>Contractors in NY</h2>
                        <div className="hidden md:flex flex-1 justify-center">
                            <div className="flex items-center gap-0">
                                <div className="w-[120px] h-1 mr-[-16px] bg-white"></div>
                                <MdKeyboardArrowRight size="30px" className="!m-0" />
                            </div>
                        </div>
                        <ButtonComp name='location' />
                    </div>
                    <div className='flex flex-col gap-5 items-center justify-between md:pr-8 md:flex-row'>
                        <h2 className='text-lg text-center md:text-left w-[230px]'>Contractors in Brooklyn NY</h2>
                        <div className="hidden md:flex flex-1 flex-row items-center justify-center gap-0">
                            <div className="w-[120px] h-1 mr-[-16px] bg-white"></div>
                            <div className='inline'>
                                <MdKeyboardArrowRight size="30px" className="!m-0" />
                            </div>
                        </div>
                        <ButtonComp name='location' />
                    </div>
                    <div className='flex flex-col gap-5 items-center justify-between md:pr-8 md:flex-row'>
                        <h2 className='text-lg text-center md:text-left w-[230px]'>Contractors in Queens NY</h2>
                        <div className="hidden md:flex flex-1 flex-row items-center justify-center gap-0">
                            <div className="w-[120px] h-1 mr-[-16px] bg-white"></div>
                            <div className='inline'>
                                <MdKeyboardArrowRight size="30px" className="m-0" />
                            </div>
                        </div>
                        <ButtonComp name='location' />
                    </div>
                    <div className='flex flex-col gap-5 items-center justify-between md:pr-8 md:flex-row'>
                        <h2 className='text-lg text-center md:text-left w-[230px]'>Contractors in Staten Island NY</h2>
                        <div className="hidden md:flex flex-1 flex-row items-center justify-center gap-0">
                            <div className="w-[120px] h-1 mr-[-16px] bg-white"></div>
                            <div className='inline'>
                                <MdKeyboardArrowRight size="30px" className="!m-0" />
                            </div>
                        </div>
                        <ButtonComp name='location' />
                    </div>
                </div>

                {/* Second Child */}
                do you
                <div className='text-center md:text-left w-full flex flex-col gap-4 items-start  px-5 py-5  lg:w-[50%] h-auto  bg-[#FBFBFB]  rounded-[20px]  md:rounded-l-[20px]  md:rounded-r-none xl:rounded-20px] 2xl:rounded-[20px]'>
                    <h2 className='text-heading text-center md:text-left font-bold leading-[57px]'>Free Spray Foam Quote</h2>
                    <p className='text-base'>Once you've submitted your request, we will contact you within 24 hours (or the following business day for requests sent Friday – Sunday).</p>
                    <h3 className='text-2xl font-normal'>Get a free spray foam insulation quote today and start saving up to 45% on your energy bills!</h3>
                    <div className='flex flex-col gap-[27px] w-full'>
                        <input type="text" className='rounded-full w-full px-[30px] py-[15px] sm:py-[17px] text-[#B1B1B1] border-[1px] border-[#B1B1B1] outline-none' placeholder='Enter Your Name' />
                        <input type="text" className='rounded-full w-full px-[30px] py-[15px] sm:py-[17px] text-[#B1B1B1] border-[1px] border-[#B1B1B1] outline-none' placeholder='Enter Your Website' />
                        <textarea className='rounded-2xl w-full px-[30px] py-[15px] sm:py-[17px] text-[#B1B1B1] border-[1px] border-[#B1B1B1] outline-none' placeholder='Enter Your Name' />
                        <ButtonComp name='Submit' widthClass='w-[100%]' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactSection