import Image from "next/image";
import React from "react";
import { GradientBlob } from "./ui/GradientBlob";

const Laptop = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full overflow-x-clip">
      <Image
        src="/images/Macbook.png"
        width={1000}
        height={550}
        alt="iphone Mockup"
        className="z-10 absolute inset-0 translate-x-36 translate-y-[40%]"
      />
      <GradientBlob
        colors={["#FACC15"]}
        className="absolute top-40 -left-20 -z-10 overflow-visible"
        opacity={30}
        blur={200}
      />
      {/* Stripes */}
      <svg
        className="translate-y-10 -translate-x-[45px]"
        width="192"
        height="875"
        viewBox="0 0 192 875"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="875" fill="#9333EA" />
        <rect x="80" width="32" height="875" fill="#CA8A04" />
        <rect x="160" width="32" height="875" fill="#C026D3" />
      </svg>
    </div>
  );
};

export default Laptop;
