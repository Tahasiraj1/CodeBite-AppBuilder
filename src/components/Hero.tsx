import React from "react";
import { Button } from "./ui/button";
import { FaRegCirclePlay } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:justify-between gap-10 pt-20 w-full h-auto overflow-hidden">
      <div className="flex flex-1 flex-col justify-center items-start pl-10 lg:gap-4 space-y-6 lg:space-y-0 w-full">
        <h1 className="text-8xl font-bold">App Builder</h1>
        <h2 className="text-4xl font-bold">For iOS & Android</h2>
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
        className="absolute right-0 bottom-0 translate-y-4/12"
        width="854"
        height="542"
        viewBox="0 0 854 542"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_134_29069)">
          <path
            d="M105 175C96.2014 175 87.489 176.733 79.3602 180.1C71.2314 183.467 63.8454 188.402 57.6238 194.624C51.4023 200.845 46.4671 208.231 43.1001 216.36C39.733 224.489 38 233.201 38 242H69.9992C69.9992 237.404 70.9045 232.852 72.6635 228.606C74.4224 224.359 77.0006 220.501 80.2507 217.251C83.5008 214.001 87.3593 211.422 91.6058 209.663C95.8523 207.905 100.404 206.999 105 206.999V175Z"
            fill="#9333EA"
          />
          <rect x="105" y="175" width="749" height="32" fill="#9333EA" />
          <rect x="38" y="242" width="32" height="237" fill="#9333EA" />
        </g>
        <g filter="url(#filter1_dd_134_29069)">
          <path
            d="M265 15C256.201 15 247.489 16.733 239.36 20.1001C231.231 23.4671 223.845 28.4023 217.624 34.6238C211.402 40.8454 206.467 48.2314 203.1 56.3602C199.733 64.489 198 73.2014 198 82H229.999C229.999 77.4036 230.905 72.8523 232.663 68.6058C234.422 64.3593 237.001 60.5008 240.251 57.2507C243.501 54.0006 247.359 51.4224 251.606 49.6635C255.852 47.9045 260.404 46.9992 265 46.9992V15Z"
            fill="#C026D3"
          />
          <rect x="265" y="15" width="589" height="32" fill="#C026D3" />
          <rect x="198" y="82" width="32" height="397" fill="#C026D3" />
        </g>
        <g filter="url(#filter2_dd_134_29069)">
          <path
            d="M185 95C176.201 95 167.489 96.733 159.36 100.1C151.231 103.467 143.845 108.402 137.624 114.624C131.402 120.845 126.467 128.231 123.1 136.36C119.733 144.489 118 153.201 118 162H149.999C149.999 157.404 150.905 152.852 152.663 148.606C154.422 144.359 157.001 140.501 160.251 137.251C163.501 134.001 167.359 131.422 171.606 129.663C175.852 127.905 180.404 126.999 185 126.999V95Z"
            fill="#CA8A04"
          />
          <rect x="185" y="95" width="669" height="32" fill="#CA8A04" />
          <rect x="118" y="162" width="32" height="317" fill="#CA8A04" />
        </g>
        <defs>
          <filter
            id="filter0_dd_134_29069"
            x="0"
            y="160"
            width="892"
            height="382"
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
              result="effect1_dropShadow_134_29069"
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
              result="effect2_dropShadow_134_29069"
            />
            <feOffset dy="25" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_134_29069"
              result="effect2_dropShadow_134_29069"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_134_29069"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_dd_134_29069"
            x="160"
            y="0"
            width="732"
            height="542"
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
              result="effect1_dropShadow_134_29069"
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
              result="effect2_dropShadow_134_29069"
            />
            <feOffset dy="25" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_134_29069"
              result="effect2_dropShadow_134_29069"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_134_29069"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_dd_134_29069"
            x="80"
            y="80"
            width="812"
            height="462"
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
              result="effect1_dropShadow_134_29069"
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
              result="effect2_dropShadow_134_29069"
            />
            <feOffset dy="25" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_134_29069"
              result="effect2_dropShadow_134_29069"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_134_29069"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Hero;
