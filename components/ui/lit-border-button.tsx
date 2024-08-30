import React from 'react'

const LitBorderButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string; icon: React.ReactNode, position: string; handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    
    <button 
    onClick={handleClick}
    className={`p-[3px] relative w-full md:w-50 md:mt-6 ${otherClasses}`}
    >
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-lg" />
    <div className={"px-10 py-2 bg-black rounded-lg relative group transition duration-200 text-white hover:bg-transparent flex items-center justify-center gap-2"}>
      {position === 'left' && icon}
      {title}
      {position === 'right' && icon}
    </div>
  </button>
  )
}

export default LitBorderButton