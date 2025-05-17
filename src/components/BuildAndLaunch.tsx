import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaRegCirclePlay } from "react-icons/fa6";
import { GradientBlob } from "./ui/GradientBlob";

const BuildAndLaunch = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:justify-between gap-10 pt-20 w-full h-auto overflow-x-clip">
        <GradientBlob 
        colors={['#701A75']} 
        className="absolute bottom-0 -right-20 -z-10"
        opacity={30} 
        blur={200} 
        />
      <div className="relative flex flex-1 items-center justify-center z-10">
        {/* Mobile UI */}
        <Image
          src="/images/iphone.png"
          width={300}
          height={600}
          alt="iphone Mockup"
          className="z-10"
        />
      </div>
      {/* Stripes */}
      <svg
        className="absolute left-0 bottom-0 -translate-y-4/12 -translate-x-[89px]"
        width="854"
        height="573"
        viewBox="0 0 854 573"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_143_12987)">
          <path
            d="M749 368C757.799 368 766.511 366.267 774.64 362.9C782.769 359.533 790.155 354.598 796.376 348.376C802.598 342.155 807.533 334.769 810.9 326.64C814.267 318.511 816 309.799 816 301H784.001C784.001 305.596 783.095 310.148 781.337 314.394C779.578 318.641 776.999 322.499 773.749 325.749C770.499 328.999 766.641 331.578 762.394 333.337C758.148 335.095 753.596 336.001 749 336.001V368Z"
            fill="#C026D3"
          />
          <rect
            x="749"
            y="368"
            width="749"
            height="32"
            transform="rotate(180 749 368)"
            fill="#C026D3"
          />
          <rect
            x="816"
            y="301"
            width="32"
            height="301"
            transform="rotate(180 816 301)"
            fill="#C026D3"
          />
        </g>
        <g filter="url(#filter1_dd_143_12987)">
          <path
            d="M589 510C597.799 510 606.511 508.267 614.64 504.9C622.769 501.533 630.155 496.598 636.376 490.376C642.598 484.155 647.533 476.769 650.9 468.64C654.267 460.511 656 451.799 656 443H624.001C624.001 447.596 623.095 452.148 621.337 456.394C619.578 460.641 616.999 464.499 613.749 467.749C610.499 470.999 606.641 473.578 602.394 475.337C598.148 477.095 593.596 478.001 589 478.001V510Z"
            fill="#9333EA"
          />
          <rect
            x="589"
            y="510"
            width="589"
            height="32"
            transform="rotate(180 589 510)"
            fill="#9333EA"
          />
          <rect
            x="656"
            y="443"
            width="32"
            height="443"
            transform="rotate(180 656 443)"
            fill="#9333EA"
          />
        </g>
        <g filter="url(#filter2_dd_143_12987)">
          <path
            d="M669 443C677.799 443 686.511 441.267 694.64 437.9C702.769 434.533 710.155 429.598 716.376 423.376C722.598 417.155 727.533 409.769 730.9 401.64C734.267 393.511 736 384.799 736 376H704.001C704.001 380.596 703.095 385.148 701.337 389.394C699.578 393.641 696.999 397.499 693.749 400.749C690.499 403.999 686.641 406.578 682.394 408.337C678.148 410.095 673.596 411.001 669 411.001V443Z"
            fill="#CA8A04"
          />
          <rect
            x="669"
            y="443"
            width="669"
            height="32"
            transform="rotate(180 669 443)"
            fill="#CA8A04"
          />
          <rect
            x="736"
            y="376"
            width="32"
            height="376"
            transform="rotate(180 736 376)"
            fill="#CA8A04"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_143_12987"
            x="-38"
            y="-15"
            width="892"
            height="446"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="7.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_143_12987"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="12"
              operator="erode"
              in="SourceAlpha"
              result="effect2_dropShadow_143_12987"
            />
            <feOffset dy="25" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_143_12987"
              result="effect2_dropShadow_143_12987"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_143_12987"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_dd_143_12987"
            x="-38"
            y="-15"
            width="732"
            height="588"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="7.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_143_12987"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="12"
              operator="erode"
              in="SourceAlpha"
              result="effect2_dropShadow_143_12987"
            />
            <feOffset dy="25" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_143_12987"
              result="effect2_dropShadow_143_12987"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_143_12987"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_dd_143_12987"
            x="-38"
            y="-15"
            width="812"
            height="521"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="7.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_143_12987"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="12"
              operator="erode"
              in="SourceAlpha"
              result="effect2_dropShadow_143_12987"
            />
            <feOffset dy="25" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_143_12987"
              result="effect2_dropShadow_143_12987"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_143_12987"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <div className="flex flex-1 flex-col justify-center items-start px-10 lg:gap-4 space-y-6 lg:space-y-0 w-full">
        <h1 className="text-6xl font-bold">
          Built it on desktop
          <br />
          launch it on mobile
        </h1>
        <p className="text-lg max-w-lg">
          Our powerful app builder will help you build your desired app in
          minutes without coding knowledge and once your app is ready, you can
          publish it on Google Play and App Store.
        </p>
        <div className="flex items-center gap-4 w-full">
          <Button className="bg-white hover:bg-white/90 text-black px-6 py-2 rounded-full">
            Publish App
          </Button>
          <Button className="bg-transparent hover:bg-transparent border px-6 py-2 rounded-full">
            <FaRegCirclePlay className="mr-2 text-white" /> View Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuildAndLaunch;
