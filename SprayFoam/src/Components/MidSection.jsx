import React from 'react'
import ButtonComp from './ButtonComp'
import image from '../assets/Images/MidImage.png'
import { MdPhone } from 'react-icons/md'
import Container from './Container'

const MidSection = ({ name, para, para1, para2, button, number = false }) => {
    return (
        <div className='w-full text-white max-w-[14040px] py-5 h-auto mx-auto bg-cover bg-center bg-no-repeat my-[100px] md:h-[300px] flex items-center ' style={{ backgroundImage: `url(${image})` }}>
            <Container>
                <div className='w-full text-center md:w-[600px] md:text-left flex flex-col gap-[30px] '>
                    <h2 className='font-inter text-2xl font-bold '>{name}</h2>
                    <div>
                        <p className='text-lg'>{para}</p>
                        <p className='text-lg font-semibold'>{para1}</p>
                        <p className='text-lg' >{para2}</p>
                    </div>
                    <div className='flex flex-col gap-5 items-center justify-center md:justify-end sm:flex-row-reverse sm:gap-10 '>
                        {number &&
                            <p className='text-lg flex items-center gap-2  '>
                                <MdPhone size='20px' color='#E01B25' />
                                (516) 7155706
                            </p>
                        }
                        <ButtonComp name={button} backgroundColor='bg-white' textColor='text-red-500' borderColor='none' />
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default MidSection