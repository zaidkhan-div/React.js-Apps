import React, { useState } from 'react'

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null)


    const faqs = [
        {
            question: "What is spray foam insulation, and how does it work?",
            answer: "Two chemicals mix to form foam that expands and hardens into solid insulation when sprayed."
        },
        {
            question: "Is spray foam insulation environmentally friendly?",
            answer: "Yes, modern formulations use eco-friendly agents and provide excellent energy efficiency."
        },
        {
            question: "Can spray foam improve indoor air quality?",
            answer: "Yes, its airtight seal reduces allergens and outdoor pollutants entering your home."
        },
        {
            question: "Benefits compared to other insulation?",
            answer: "Higher R-value, better air sealing, moisture resistance, and longer lifespan."
        },
        {
            question: "Is it fire-resistant?",
            answer: "Yes, treated with fire retardants to meet safety standards."
        },
        {
            question: "Maintenance required?",
            answer: "None - lasts decades without maintenance when properly installed."
        }
    ]


    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <div className="max-w-[985px] mx-auto flex flex-col gap-10">
            <h2 className="text-heading font-bold text-center border-b-4 border-[#324794] pb-5">
                You've Got Questions? We've Got the Answers!
            </h2>

            <div className="space-y-2">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-100 hover:shadow-md">
                        <button
                            className={`text-black flex justify-between items-center w-full p-4 text-left transition-colors duration-200 ${activeIndex === index ? 'bg-white' : 'hover:bg-gray-50'}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="font-bold text-lg text-black">{faq.question}</h3>
                            <span className="text-[35px] font-medium text-black transition-transform duration-300">
                                {activeIndex === index ? '−' : '+'}
                            </span>
                        </button>

                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}>
                            {activeIndex === index && (
                                <div className="p-4 bg-white border-t border-gray-200">
                                    <p className="text-base font-normal">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faqs