import React from 'react'
import ButtonComp from './ButtonComp'
import { MdLocationPin, MdMessage } from 'react-icons/md'

const Cta = () => {
    return (
        <div className='mt-[-100px] bg-[#324794] flex-col  lg:flex-row gap-16 rounded-[20px] p-5 md:p-[55px]  text-lg text-white font-inter flex items-center justify-start '>
            <div className='flex flex-col gap-5 text-center sm:text-left'>
                <h2 className='text-2xl'><MdMessage size='30px' className='text-btn_color inline-block' /> Contact us</h2>
                <p className='flex flex-col sm:flex-row'><span className='text-[#5B6CA9]'>Email:</span>sprayfoamnyc@gmail.com</p>
                <p className='flex flex-col sm:flex-row'><span className='text-[#5B6CA9]'>Phone:</span> (516) 7155706</p>
            </div>
            <div className='flex flex-col gap-5   text-center sm:text-left lg:px-5 lg:border-r lg:border-l border-[#5B6CA9] '>
                <h2 className='text-2xl'><MdLocationPin size='30px' className='text-btn_color inline-block' />Our location</h2>
                <p>40-43 100th St 3 Floor, Queens</p>
                <p>NY 11368, United States</p>
            </div>
            <div className='flex flex-col text-center sm:text-left gap-5  '>
                <h2 className='text-2xl'>Request a Free Quote</h2>
                <div className='flex bg-white rounded-full px-2 py-1 '>
                    <input type="email" placeholder='Enter Your Email' className='rounded-full text-sm sm:text-lg text-[#cccccc] w-[70%] ' />
                    <ButtonComp name='Subscribe' />
                </div>
            </div>
        </div>
    )
}

export default Cta