import React from 'react'
import HeroImg from '../assets/Images/Hero.png'
import ButtonComp from './ButtonComp'
import { MdOutlineTurnRight } from 'react-icons/md'
import Container from './Container'


const HeroSection = () => {
    return (
        <>
            <div className='mt-[-120px] w-full mx-auto h-[100vh] font-inter bg-no-repeat bg-cover bg-center flex items-center justify-start '
                style={{ backgroundImage: `url(${HeroImg})` }}>
                <Container>
                    <div className="flex flex-col gap-10 text-white text-center lg:text-left lg:w-[886px] ">
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-heroHeading font-bold '>Insulation,<br /> Fireproofing &
                                Drywall Experts in NYC</h1>
                            <p>Insulation, Fireproofing & Drywall Contractors in NYC That Make Your Home More Efficient and Cozy <br /> From Attic To Basement</p>
                        </div>
                        <div className='flex items-center justify-center lg:justify-start gap-6 '>
                            <ButtonComp name="Learn More" />
                            <div className='text-2xl border-2 border-[#E01B25] rounded-full p-[6px]  sm:p-[11px] '>
                                <MdOutlineTurnRight />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default HeroSection