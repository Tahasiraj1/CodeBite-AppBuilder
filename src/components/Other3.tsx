import React from "react";
import Image from "next/image";

const Other3 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full py-10 px-10 bg-[#F1F5F9] text-black">
      <div className="flex flex-col items-center lg:items-start space-y-12 w-full">
        <h1 className="text-4xl font-bold">Turpis risus facilisi</h1>
        <p className="text-lg max-w-lg">
          Augue feugiat mi, massa amet. Id purus aliquam bibendum purus dictum
          elementum nullam odio tellus. Imperdiet feugiat est odio fames magna
          orci. Augue purus aliquam, placerat vestibulum dictum pellentesque
          molestie. Facilisis pretium porta congue proin.
        </p>
      </div>
      <div className="flex w-full lg:pt-10 lg:mt-10">
        <Image
          src="/images/Col.png"
          width={516}
          height={575}
          alt="iphone Mockup"
          className="z-10 sm:w-auto sm:h-auto"
        />
      </div>
    </div>
  );
};

export default Other3;
