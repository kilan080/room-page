'use client'
import React from 'react'
import Image from 'next/image'

export default function Left() {
  return (
    <div className='relative w-full h-72'>
        <Image 
            src="/image-about-dark.jpg"
            alt='dark-room'
            className='w-full h-72 object-cover'
            width={100}
            height={100}
            priority
            // className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw" 
        />
    </div>
  )
}
