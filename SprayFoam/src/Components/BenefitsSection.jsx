import React from 'react'
import ButtonComp from './ButtonComp'
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri'
import { MdOutlineTurnRight } from 'react-icons/md'

const BenefitsSection = () => {
    return (
        <div className='my-[100px] flex flex-col gap-10 font-inter '>
            <div className='flex flex-col text-center items-center gap-5 justify-between md:flex-row '>
                <h1 className='text-heading text-black font-bold  '>Why Insulate With Spray Foam?</h1>
                <ButtonComp name='Watch' backgroundColor='white' textColor='text-black' />
            </div>
            <div className='flex flex-col items-center text-center md:flex-row md:text-start gap-[60px]'>
                <p className=' justify-between text-lg leading-[30px]'>There is no better home insulating material that can seal your home from air and moisture intrusion, save on costly utility bills, strengthen your home, and protect your family’s health from dangerous mold, airborne pollutants, and allergens than Spray Foam insulation.</p>
                <p className='text-lg leading-[30px]'>The immediate and long-term benefits of spray foam insulation far outweigh the initial costs associated with installation. This insulating and air sealing material provides endless benefits. By investing in spray foam insulation you will:</p>
            </div>

            {/* Faqs */}

            <div className='flex flex-col items-start justify-between gap-10 border-t-2 border-b-2 border-dotted border-#B1B1B1 py-8 lg:items-center md:flex-row'>
                <div className='flex items-center gap-[30px]  md:w-[50%]'>
                    <div className='text-2xl border-2 border-black rounded-full p-[6px]  sm:p-[11px]'>
                        <RiNumber1 />
                    </div>
                    <h2 className='text-2xl text-black font-semibold '>Cut Energy Bills by Up to 50%</h2>
                </div>
                <div className='flex items-center justify-between  gap-[30px]  md:w-[50%] '>
                    <p className='text-lg'>Make significant heating and cooling savings every month, in some cases by up to 50%^ !</p>
                    <div className='text-2xl border-2 border-[#E01B25] rounded-full p-[6px]  sm:p-[11px]'>
                        <MdOutlineTurnRight />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start justify-between gap-10 border-t-2 border-b-2 border-dotted border-#B1B1B1 py-8 lg:items-center md:flex-row'>
                <div className='flex items-center gap-[30px]  md:w-[50%]'>
                    <div className='text-2xl border-2 border-black rounded-full p-[6px]  sm:p-[11px]'>
                        <RiNumber2 />
                    </div>
                    <h2 className='text-2xl text-black font-semibold '>Boost HVAC Efficiency with Air Sealing</h2>
                </div>
                <div className='flex items-center justify-between  gap-[30px]  md:w-[50%] '>
                    <p className='text-lg'>Spray foam boosts energy efficiency by sealing leaks, so you use your HVAC less.</p>
                    <div className='text-2xl border-2 border-[#E01B25] rounded-full p-[6px]  sm:p-[11px]'>
                        <MdOutlineTurnRight />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start justify-between gap-10 border-t-2 border-b-2 border-dotted border-#B1B1B1 py-8 lg:items-center md:flex-row'>
                <div className='flex items-center gap-[30px]  md:w-[50%]'>
                    <div className='text-2xl border-2 border-black rounded-full p-[6px]  sm:p-[11px]'>
                        <RiNumber3 />
                    </div>
                    <h2 className='text-2xl text-black font-semibold '>Optimize HVAC Sizing and Performance</h2>
                </div>
                <div className='flex items-center justify-between  gap-[30px]  md:w-[50%] '>
                    <p className='text-lg'>‘Right-size’ your HVAC equipment because it uses less effort to heat and cool your home</p>
                    <div className='text-2xl border-2 border-[#E01B25] rounded-full p-[6px]  sm:p-[11px]'>
                        <MdOutlineTurnRight />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start justify-between gap-10 border-t-2 border-b-2 border-dotted border-#B1B1B1 py-8 lg:items-center md:flex-row'>
                <div className='flex items-center gap-[30px]  md:w-[50%]'>
                    <div className='text-2xl border-2 border-black rounded-full p-[6px]  sm:p-[11px]'>
                        <RiNumber4 />
                    </div>
                    <h2 className='text-2xl text-black font-semibold '>Increase Your Home’s Resale Value</h2>
                </div>
                <div className='flex items-center justify-between  gap-[30px] w-full md:w-[50%] '>
                    <p className='text-lg'>Add resale value to your home should you choose to sell</p>
                    <div className='text-2xl border-2 border-[#E01B25] rounded-full p-[6px]  sm:p-[11px]'>
                        <MdOutlineTurnRight />
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <ButtonComp name='View More' />
            </div>
        </div>
    )
}

export default BenefitsSection