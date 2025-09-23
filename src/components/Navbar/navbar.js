'use client'
import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Home({ backgroundImage, toggleNextImage, togglePrevImage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="p-4 bg-cover min-h-72 bg-center"
    >
      {/* Navigation */}
      <nav className="flex items-center justify-between w-full p-2">
        {/* Menu button (mobile only) */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IoClose /> : <HiMenuAlt3 />}
        </button>

        {/* Center content */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0 flex items-center gap-6">
          {/* Show "room" on mobile when menu closed, always on desktop */}
          {(!isMenuOpen || window.innerWidth >= 768) && (
            <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wider">
              room
            </h1>
          )}

          {/* Links */}
          <div
            className={`${
              isMenuOpen ? "flex flex-row gap-3 items-center" : "hidden"
            } md:flex md:flex-row md:gap-6`}
          >
            <Link
              className="text-white hover:text-gray-300 transition-colors font-medium"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              home
            </Link>
            <Link
              className="text-white hover:text-gray-300 transition-colors font-medium"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              shop
            </Link>
            <Link
              className="text-white hover:text-gray-300 transition-colors font-medium"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              about
            </Link>
            <Link
              className="text-white hover:text-gray-300 transition-colors font-medium"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              contact
            </Link>
          </div>
        </div>
      </nav>
      <div className='absolute top-58 right-0  flex items-center w-24 justify-between ml-[-33px] mb-[-15px] h-14 bg-black gap-4 p-2 md:hidden'>
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
  );
}
