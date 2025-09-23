import React from "react";
import Image from "next/image";

export default function Right() {
  return (
    <div className="relative w-full h-72">
      <Image
        src="/image-about-light.jpg"
        alt="light room"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw" 
      />
    </div>
  );
}
