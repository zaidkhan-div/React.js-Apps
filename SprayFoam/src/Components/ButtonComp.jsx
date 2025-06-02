import React from 'react'

const ButtonComp = ({ name, widthClass, backgroundColor = 'bg-btn_color', textColor = 'text-white', borderColor = "border-[#E01B25]" }) => {
  return (
    <div>
      <button className={`py-[13px] px-[30px] ${widthClass}  leading-5 font-inter ${textColor} border-2 ${borderColor} text-lg rounded-full ${backgroundColor}`}>{name}</button>
    </div>
  )
}

export default ButtonComp