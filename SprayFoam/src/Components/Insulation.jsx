import React from 'react'
import ButtonComp from './ButtonComp'
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri'
import Container from './Container'
import FireImage from '../assets/Images/fireImage.png'
import { BiPhone } from 'react-icons/bi'
import { MdPhone } from 'react-icons/md'

const Insulation = () => {
    return (
        <div className='flex flex-col gap-10 justify-end my-[100px] mx-auto font-inter'>  {/* Main Div */}
            <Container>
                <div className='flex flex-col text-center gap-5 md:flex-row md:text-start items-center justify-between '>
                    <div className='flex flex-col gap-[30px]'>
                        <h2 className='text-heading font-bold'>Insulation, Fireproofing & Drywall for all property types.</h2>
                        <ButtonComp name='All Services' backgroundColor='white' textColor='text-black' />
                    </div>
                    <p>Whatever your client’s Insulation, Fireproofing & Drywall requirements are, we can help. Spray Foam Insulation NY offers solutions for all types of residential and commercial projects: </p>
                </div>
            </Container>

            {/* Background Section */}
            <div className="bg-btn_color text-white min-h-[675px] md:pl-10 py-[30px]">
                {/* There are two Child div */}
                <Container>
                    <div className='gap-10 mx-auto flex flex-col text-start md:flex-row  items-center justify-between'>

                        <div className='flex flex-col gap-10 w-full md:w-[50%] '>

                            {/* Numeber 1 */}

                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex items-center justify-start gap-[30px]'>
                                    <div className='p-2 sm:p-[13px] rounded-full bg-white text-black flex items-center justify-center text-2xl'>
                                            <RiNumber1 />
                                        </div>
                                        <h2 className='text-xl font-bold'>Spray Foam Insulation</h2>
                                    </div>
                                    <p>Offers both open-celland closed-cell spray foam insulation.</p>
                                    <ul className="list-disc list-outside pl-10 flex flex-col gap-2 text-lg">
                                        <li>Improves energy efficiency by reducing air leakage.</li>
                                        <li>Enhances thermal performance.</li>
                                        <li>Provides soundproofing and pest control.</li>
                                    </ul>
                                </div>

                            </div>

                            {/* Numeber 2 */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-6">
                                <div className='p-2 sm:p-[13px] rounded-full bg-white text-black flex items-center justify-center text-2xl'>
                                        <RiNumber2 />
                                    </div>
                                    <h2 className="text-xl font-bold">Fireproofing</h2>
                                </div>

                                <ul className="list-disc list-outside pl-10 flex flex-col gap-2 text-lg">
                                    <li>Specializes in applying fire-resistant materials and systems to buildings</li>
                                    <li>Protects structural elements (e.g., steel beams and columns) from fire damage</li>
                                    <li>Expertise in spray-applied cementitious and intumescent fireproofing</li>
                                </ul>
                            </div>

                            {/* Numeber 3 */}

                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex items-center justify-start gap-[30px]'>
                                        <div className='p-2 sm:p-[13px] rounded-full bg-white text-black flex items-center justify-center text-2xl'>
                                            <RiNumber3 />
                                        </div>
                                        <h2 className='text-xl font-bold'>Drywall Services</h2>
                                    </div>
                                    <ul className="list-disc list-outside pl-10 flex flex-col gap-2 text-lg">
                                        <li>Provides comprehensive drywall installation and finishing.</li>
                                        <li>Essential components of interior construction.</li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                        {/* Second Div */}
                        
                        <div className="w-full h-[620px] bg-cover md:w-[50%] bg-center flex items-end mt-0 md:mt-[-250px] " style={{ backgroundImage: `url(${FireImage})` }}>
                            <div className="flex flex-col gap-10 pl-[50px] pb-[50px] ">
                                <h2 className='text-xl'>Company Overview</h2>
                                <div>
                                    <li>Service Areas: Residential, commercial, and industrial clients throughout the five boroughs of NYC.</li>
                                    <li>Experience: 15 years in the industry with a proven track record.</li>
                                    <li>Revenue: Generates substantial annual revenue.</li>
                                </div>
                                <div className='flex items-center gap-2 text-lg '>
                                    <span><MdPhone size='20px' className='text-btn_color' /></span>
                                    <p>(516) 7155706</p>
                                </div>
                                <ButtonComp name='Get in Touch' backgroundColor='bg-white' borderColor='none' textColor='text-[#E01B25]' />

                            </div>
                        </div>

                    </div>
                </Container>
            </div>

        </div>
    )
}

export default Insulation