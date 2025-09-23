'use client'
import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Discover({togglePrevImage,toggleNextImage}) {
  return (
    <div className='px-8 py-4'>
        <h1 className='mb-5 text-4xl font-bold text-[#000000]'>Discover Innovative ways to decorate</h1>
        <p className='mb-4 leading-7 text-[#454545]'>We provide unmatched quality, comfort, and style for property owners across the country.
           Our experts combine form and function in bringing your vision to life. Create a room in your
           own style with our collection and make your property a reflection of you and what you love.
        </p>
        <h2 className='flex gap-1.5 items-center mb-3.5 tracking-[0.7em]'>SHOP NOW <HiOutlineArrowLongRight size={30} /> </h2> 
        <div className=' hidden md:flex items-center  w-24 justify-between ml-[-33px] mb-[-15px] h-14 bg-black gap-4 p-2'>
          <button 
             onClick={togglePrevImage}
             className="text-white hover:text-gray-300 cursor-pointer transition-colors"
            aria-label="Previous image"
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            onClick={toggleNextImage} 
            className="text-white hover:text-gray-300 cursor-pointer transition-colors"
            aria-label="Next image"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
    </div>
  )
}



// - White: hsl(0, 100%, 100%) #FFFFFF
// - Grey 500: hsl(0, 0%, 63%) #A1A1A1
// - Grey 800: hsl(0, 0%, 27%) #454545
// - Black: hsl(0, 0%, 0%) #000000