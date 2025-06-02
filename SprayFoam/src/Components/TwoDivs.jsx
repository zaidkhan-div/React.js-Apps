import React from 'react'
import ButtonComp from './ButtonComp'

const TwoDivs = ({
    title = "Default Title",
    description = "Default description text",
    description2,
    bulletPoints = [],
    buttonText = true ? "Learn More" : '',
    imageSrc,
    reverseLayout = false
}) => {
    return (
        <div className={`my-[100px] flex flex-col items-center gap-10 justify-between md:flex-row md:items-start ${reverseLayout ? 'md:flex-row-reverse' : ''}`}>
            {/* Text Content */}
            <div className='flex text-center flex-col gap-[20px] px-2 w-full md:text-left md:w-[50%] md:px-0'>
                <h2 className='text-black text-heading font-bold'>{title}</h2>
                <p>{description}</p>
                <p>{description2}</p>

                {bulletPoints.length > 0 && (
                    <ul className='space-y-3 text-left text-lg '>
                        {bulletPoints.map((point, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-black font-semibold mr-2">•</span>
                                {point}
                            </li>
                        ))}
                    </ul>
                )}
                {buttonText && <ButtonComp name={buttonText} />}

            </div>

            {/* Image */}
            {imageSrc && (
                <div className='w-full md:w-1/2 flex justify-center md:justify-start'>
                    <img
                        src={imageSrc}
                        alt="Content"
                        className='max-w-full h-auto object-contain rounded-lg shadow-md'
                        style={{ maxHeight: '500px' }}
                    />
                </div>
            )}
        </div>
    )
}

export default TwoDivs