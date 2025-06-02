import React from 'react'

const PricingTable = () => {
    return (
        <div className="my-[100px] flex flex-col gap-10 font-inter">
            <div className="flex flex-col gap-[30px]">
                <h2 className='text-heading font-bold text-center md:text-left'>Spray Foam Insulation Pricing Table 2025</h2>

                <div className="bg-[#FBFBFB] overflow-x-auto xl:overflow-x-visible [&::-webkit-scrollbar]:hidden">
                    <div className="flex min-w-[1315px]">

                        {/* Column 1 */}
                        <div className='w-[190px] flex-shrink-0'>
                            <div className="bg-btn_color rounded-tl-[20px] h-[70px] px-[25px] py-[10px] sm:h-[100px] sm:p-[30px] text-white text-lg font-bold border-r-2 border-white">
                                <h3>Type</h3>
                            </div>
                            <div className='rounded-bl-[20px] flex flex-col'>
                                <div className="border-b-2 h-[110px] sm:h-[135px] flex justify-start items-center border-white p-6 text-lg">
                                    <h2>Open Cell Spray Foam</h2>
                                </div>
                                <div className="border-b-2 h-[110px] sm:h-[135px] flex justify-start items-center border-white p-6 text-lg">
                                    <h2>Closed Cell Spray Foam</h2>
                                </div>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className='w-[195px] flex-shrink-0'>
                            <div className="bg-btn_color h-[70px] px-[25px] py-[10px] sm:h-[100px] sm:p-[30px] text-white text-lg font-bold border-r-2 border-white">
                                <h3>Price Per<br />Board Foot</h3>
                            </div>
                            <div className='flex flex-col'>
                                <div className="border-b-2 h-[110px] sm:h-[135px] flex justify-start items-center border-white p-6 text-lg">
                                    <h2>$0.30 – $0.45</h2>
                                </div>
                                <div className="border-b-2 h-[110px] sm:h-[135px] flex justify-start items-center border-white p-6 text-lg">
                                    <h2>$1.20 – $1.50</h2>
                                </div>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className='w-[465px] flex-shrink-0'>
                            <div className="bg-btn_color  h-[70px] px-[25px] py-[10px] sm:h-[100px] sm:p-[30px] text-white text-lg font-bold border-r-2 border-white">
                                <h3>Key Features</h3>
                            </div>
                            <div className='flex flex-col'>
                                <div className="border-b-2 h-[135px]h-[110px] sm:h-[135px] flex justify-start items-center border-white p-6 text-lg">
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Excellent air barrier</li>
                                        <li>Sound dampening</li>
                                        <li>Lower material cost</li>
                                    </ul>
                                </div>
                                <div className="border-b-2 h-[110px] sm:h-[135px] flex justify-start items-center border-white p-6 text-lg">
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Superior moisture barrier</li>
                                        <li>High insulation value</li>
                                        <li>Increased structural integrity</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Column 4 */}
                        <div className='w-[465px] flex-shrink-0'>
                            <div className="bg-btn_color h-[70px] px-[25px] py-[10px] sm:h-[100px] sm:p-[30px] text-white text-lg font-bold border-r-2 border-white rounded-tr-[20px] ">
                                <h3>Ideal Applications</h3>
                            </div>
                            <div className='rounded-br-[20px] flex flex-col w-full bg-[#FBFBFB]'>
                                <div className="border-b-2 h-[110px] sm:h-[135px] flex justify-start items-center border-white p-6 text-lg">
                                    <h2>Interior walls, floors, and ceilings</h2>
                                </div>
                                <div className="border-b-2 h-[110px] sm:h-[135px]] flex justify-start items-center border-white p-6 text-lg">
                                    <h2>Outdoor applications, high-moisture areas</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Another Note Content */}

            <div className='flex flex-col items-center justify-between md:flex-row '>
                
                {/* Child 1 */}

                <div className='flex w-full text-center md:text-left flex-col gap-5 md:w-[45%]'>
                    <div className='text-btn_color'>
                        <p><span className='font-bold'>Note</span>:Prices may vary depending on project size, location, and insulation thickness. For a more accurate estimate tailored to your needs, contact us today!</p>
                    </div>
                    <p>In addition to the types of spray foam insulation discussed above, there are also other factors that can affect pricing. These may include:</p>
                    <div className='flex flex-col gap-5 items-start'>
                        <li>Project size: Larger projects typically require more material and labor, resulting in higher costs.</li>
                        <li>Location: The cost of living and material availability in different regions can impact pricing.</li>
                        <li>Insulation thickness: Thicker layers of insulation provide better insulation but also come at a higher cost.</li>
                        <li>Additional services: Some companies may offer additional services such as air sealing or moisture control, which will increase the overall cost.</li>
                    </div>
                </div>
                
                {/* Child 1 */}

                <div className='w-full text-center md:text-left md:w-[45%]'>
                    <p className='text-lg font-inter leading-7 '>
                        It’s important to keep these factors in mind when considering the price of spray foam insulation for your project. It’s also recommended to get quotes <br />
                        Spray Foam Insulation NYC is an Industrial Insulation, Commercial Insulation, Residential Insulation, Highrise building Insulation Contractor. <br />
                        When it comes to reliable insulation and drywall services, trust Spray Foam Insulation NYC—the experts serving all types of properties across the 5 boroughs. Whether it’s residential, commercial, or industrial spaces like homes, offices, hospitals, or warehouses, we deliver safe and effective spray foam solutions tailored to your needs.
                        With 15 years of industry expertise, our Staten Island-based team specializes in insulation, plastering, and drywall services. Backed by a proven track record and generating $1.2 million in annual revenue, Spray Foam Insulation NYC is your trusted partner for durable and efficient installations.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default PricingTable