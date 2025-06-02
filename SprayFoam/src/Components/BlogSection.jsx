import React from 'react'
import ButtonComp from './ButtonComp'
import Image1 from '../assets/Images/blogs1.png'
import Image2 from '../assets/Images/blogs2.png'
import Image3 from '../assets/Images/blogs3.png'
import { MdTurnRight } from 'react-icons/md'

const BlogSection = () => {

  return (
    <div className='my-[100px] flex flex-col gap-10 font-inter'>
      <div className='flex flex-col gap-5 md:flex-row items-end justify-between'>
        <div className='w-full text-center md:w-[50%] md:text-left flex flex-col gap-[30px]'>
          <div className='flex items-center justify-start gap-3'>
            <div className='bg-btn_color hidden md:block w-[30px] h-[30px] rounded-full'></div>
            <h2 className='text-heading font-bold'>Our Recent Articles</h2>
          </div>
          <p className='text-lg text-center md:text-left font-normal'>Overall, hiring a professional spray foam insulation service contractor can help ensure that your insulation is installed correctly and efficiently, providing long-lasting benefits such as improved energy.</p>
        </div>
        <div className='w-full justify-center md:w-[50%] flex md:justify-end'>
          <ButtonComp name='View All' backgroundColor='white' textColor='text-black' />
        </div>
      </div>

      {/* Articles Section */}

      <div className='flex flex-col gap-5 md:flex-row  items-center '> {/* Blogs Min Div */}

        {/* Blog 1 */}

        <div className='flex flex-col gap-[10px] max-w-[415px] md:text-left border-[1px] border-[#B1B1B1] '>
          <div className="w-full h-[190px] ">
            <img src={Image1} alt="" />
          </div>
          <div className='flex flex-col gap-[10px] px-3 py-5 md:px-[30px]'>
            <h1 className='text-2xl font-bold'>Insulation Installation Brooklyn, NY</h1>
            <p className='text-base leading-[30px] font-normal'>Insulation Installation in Brooklyn, NY Introduction Home insulation is a vital aspect of maintaining a comfortable .</p>
            <div className='mt-[10px] flex items-center justify-between '>
              <div className='flex items-center justify-center'>
                <button className='text-lg font-bold'>Read More</button>
                <MdTurnRight size='30' color='#E01B25' />
              </div>
              <p className='text-btn_color text-base font-bold'>May 10, 2025</p>
            </div>
          </div>
        </div>

        {/* Blog 2 */}

        <div className='flex flex-col gap-[10px] max-w-[415px] md:text-left border-[1px] border-[#B1B1B1] bg-cover bg-no-repeat text-white'
          style={{ background: `url(${Image2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div className="w-full h-[190px] ">
            {/* <img src={Image1} alt="" /> */}
          </div>
          <div className='flex flex-col gap-[10px] px-3 py-5 md:px-[30px]'>
            <h1 className='text-2xl font-bold'>Insulation Installation Brooklyn, NY</h1>
            <p className='text-base leading-[30px] font-normal '>Insulation Installation in Brooklyn, NY Introduction Home insulation is a vital aspect of maintaining a comfortable .</p>
            <div className='mt-[10px] flex items-center justify-between '>
              <div className='flex items-center justify-center'>
                <button className='text-lg font-bold'>Read More</button>
                <MdTurnRight size='30' color='#E01B25' />
              </div>
              <p className='text-btn_color text-base font-bold'>May 10, 2025</p>
            </div>
          </div>
        </div>

        {/* Blog 3 */}

        <div className='flex flex-col gap-[10px] max-w-[415px] md:text-left border-[1px] border-[#B1B1B1] '>
          <div className="w-full h-[190px] ">
            <img src={Image3} alt="" />
          </div>
          <div className='flex flex-col gap-[10px] px-3 py-5 md:px-[30px]'>
            <h1 className='text-2xl font-bold'>Insulation Installation Brooklyn, NY</h1>
            <p className='text-base leading-[30px] font-normal '>Insulation Installation in Brooklyn, NY Introduction Home insulation is a vital aspect of maintaining a comfortable .</p>
            <div className='mt-[10px] flex items-center justify-between '>
              <div className='flex items-center justify-center'>
                <button className='text-lg font-bold'>Read More</button>
                <MdTurnRight size='30' color='#E01B25' />
              </div>
              <p className='text-btn_color text-base font-bold'>May 10, 2025</p>
            </div>
          </div>
        </div>

      </div>

    </div >
  )
}

export default BlogSection