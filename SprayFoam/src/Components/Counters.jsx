import React from 'react'

const Counters = () => {
    return (
        <div className='mt-20 mb-[160px] flex flex-col gap-10 items-center justify-around font-inter md:flex-row'>
            <div className='flex flex-col text-center w-[190px] border-b-4 border-btn_color gap-[30px] pb-12'>
                <h2 className='text-btn_color text-[62px] font-bold leading-[65px]'>500+</h2>
                <p className="text-lg ">Projects Completed</p>
            </div>
            <div className='flex flex-col text-center w-[190px] border-b-4 border-btn_color gap-[30px] pb-12'>
                <h2 className='text-btn_color text-[62px] font-bold leading-[65px]'>97%</h2>
                <p className='text-lg '>Trusted Clients</p>
            </div>
            <div className='flex flex-col text-center w-[190px] border-b-4 border-btn_color gap-[30px] pb-12'>
                <h2 className='text-btn_color text-[62px] font-bold leading-[65px]'>100+</h2>
                <p className='text-lg '>Trained Staff</p>
            </div>
            <div className='flex flex-col text-center w-[190px] border-b-4 border-btn_color gap-[30px] pb-12'>
                <h2 className='text-btn_color text-[62px] font-bold leading-[65px]'>25+</h2>
                <p className='text-lg '>Years of Experience</p>
            </div>
        </div>
    )
}

export default Counters