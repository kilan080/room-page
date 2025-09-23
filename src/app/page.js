'use client';

import React, { useState } from "react";
import Navbar from '@/components/Navbar/navbar';
import Discover from '@/components/discover/discover';
import Left from "@/components/left/left";
import About from "@/components/About/about";
import Right from "@/components/Right/right";

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    '/desktop-image-hero-1.jpg',
    '/desktop-image-hero-2.jpg',
    '/desktop-image-hero-3.jpg'
  ];

  const toggleNextImage = () => {
    setImageIndex((prev) => {
      const newIndex = (prev + 1) % images.length;
      // console.log("Next button clicked! New index:", newIndex);
      return newIndex;
    });
  };

  const togglePrevImage = () => {
    setImageIndex((prev) => {
      const newIndex = (prev - 1 + images.length) % images.length;
      // console.log("Previous button clicked! New index:", newIndex);
      return newIndex;
    });
  };

  return (
    <main className="grid h-screen grid-cols-1 md:grid-cols-2">
      {/* Row 1: Navbar + Discover */}
      <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2">
        <Navbar backgroundImage={images[imageIndex]} togglePrevImage={togglePrevImage} toggleNextImage={toggleNextImage} />
        <Discover  togglePrevImage={togglePrevImage} toggleNextImage={toggleNextImage}  />
      </div>

      {/* Row 2: Left + About + Right */}
      <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-3">
        <Left />
        <About />
        <Right />
      </div>
    </main>
  );
}
