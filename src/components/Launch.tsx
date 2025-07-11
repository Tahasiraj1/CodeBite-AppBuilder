import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { GradientBlob } from "./ui/GradientBlob";

const Launch = () => {
  return (
    <div className="relative w-full py-10 mb-20 h-screen">
      <GradientBlob
        colors={["#701A75"]}
        className="absolute bottom-0 -left-20 -z-10"
        opacity={30}
        blur={200}
      />
      <svg
        className="absolute inset-0 w-auto h-auto pt-20 pb-20"
        width="1440"
        height="729"
        viewBox="0 0 1440 729"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_143_13135)">
          <path
            d="M749 157C757.799 157 766.511 158.733 774.64 162.1C782.769 165.467 790.155 170.402 796.376 176.624C802.598 182.845 807.533 190.231 810.9 198.36C814.267 206.489 816 215.201 816 224H784.001C784.001 219.404 783.095 214.852 781.337 210.606C779.578 206.359 776.999 202.501 773.749 199.251C770.499 196.001 766.641 193.422 762.394 191.663C758.148 189.905 753.596 188.999 749 188.999V157Z"
            fill="#C026D3"
          />
          <rect
            width="749"
            height="32"
            transform="matrix(-1 0 0 1 749 157)"
            fill="#C026D3"
          />
          <rect
            width="32"
            height="120"
            transform="matrix(-1 0 0 1 816 224)"
            fill="#C026D3"
          />
        </g>
        <g filter="url(#filter1_dd_143_13135)">
          <path
            d="M589 15C597.799 15 606.511 16.733 614.64 20.1001C622.769 23.4671 630.155 28.4023 636.376 34.6238C642.598 40.8454 647.533 48.2314 650.9 56.3602C654.267 64.489 656 73.2014 656 82H624.001C624.001 77.4036 623.095 72.8523 621.337 68.6058C619.578 64.3593 616.999 60.5008 613.749 57.2507C610.499 54.0006 606.641 51.4224 602.394 49.6635C598.148 47.9045 593.596 46.9992 589 46.9992V15Z"
            fill="#9333EA"
          />
          <rect
            width="589"
            height="32"
            transform="matrix(-1 0 0 1 589 15)"
            fill="#9333EA"
          />
          <rect
            width="32"
            height="262"
            transform="matrix(-1 0 0 1 656 82)"
            fill="#9333EA"
          />
        </g>
        <g filter="url(#filter2_dd_143_13135)">
          <path
            d="M669 82C677.799 82 686.511 83.733 694.64 87.1001C702.769 90.4671 710.155 95.4023 716.376 101.624C722.598 107.845 727.533 115.231 730.9 123.36C734.267 131.489 736 140.201 736 149H704.001C704.001 144.404 703.095 139.852 701.337 135.606C699.578 131.359 696.999 127.501 693.749 124.251C690.499 121.001 686.641 118.422 682.394 116.663C678.148 114.905 673.596 113.999 669 113.999V82Z"
            fill="#CA8A04"
          />
          <rect
            width="669"
            height="32"
            transform="matrix(-1 0 0 1 669 82)"
            fill="#CA8A04"
          />
          <rect
            width="32"
            height="195"
            transform="matrix(-1 0 0 1 736 149)"
            fill="#CA8A04"
          />
        </g>
        <g filter="url(#filter3_dd_143_13135)">
          <path
            d="M691 506C682.201 506 673.489 504.267 665.36 500.9C657.231 497.533 649.845 492.598 643.624 486.376C637.402 480.155 632.467 472.769 629.1 464.64C625.733 456.511 624 447.799 624 439H655.999C655.999 443.596 656.905 448.148 658.663 452.394C660.422 456.641 663.001 460.499 666.251 463.749C669.501 466.999 673.359 469.578 677.606 471.337C681.852 473.095 686.404 474.001 691 474.001V506Z"
            fill="#9333EA"
          />
          <rect
            width="749"
            height="32"
            transform="matrix(1 0 0 -1 691 506)"
            fill="#9333EA"
          />
          <rect
            width="32"
            height="132"
            transform="matrix(1 0 0 -1 624 439)"
            fill="#9333EA"
          />
        </g>
        <g filter="url(#filter4_dd_143_13135)">
          <path
            d="M771 586C762.201 586 753.489 584.267 745.36 580.9C737.231 577.533 729.845 572.598 723.624 566.376C717.402 560.155 712.467 552.769 709.1 544.64C705.733 536.511 704 527.799 704 519H735.999C735.999 523.596 736.905 528.148 738.663 532.394C740.422 536.641 743.001 540.499 746.251 543.749C749.501 546.999 753.359 549.578 757.606 551.337C761.852 553.095 766.404 554.001 771 554.001V586Z"
            fill="#CA8A04"
          />
          <rect
            width="669"
            height="32"
            transform="matrix(1 0 0 -1 771 586)"
            fill="#CA8A04"
          />
          <rect
            width="32"
            height="212"
            transform="matrix(1 0 0 -1 704 519)"
            fill="#CA8A04"
          />
        </g>
        <g filter="url(#filter5_dd_143_13135)">
          <path
            d="M851 666C842.201 666 833.489 664.267 825.36 660.9C817.231 657.533 809.845 652.598 803.624 646.376C797.402 640.155 792.467 632.769 789.1 624.64C785.733 616.511 784 607.799 784 599H815.999C815.999 603.596 816.905 608.148 818.663 612.394C820.422 616.641 823.001 620.499 826.251 623.749C829.501 626.999 833.359 629.578 837.606 631.337C841.852 633.095 846.404 634.001 851 634.001V666Z"
            fill="#C026D3"
          />
          <rect
            width="589"
            height="32"
            transform="matrix(1 0 0 -1 851 666)"
            fill="#C026D3"
          />
          <rect
            width="32"
            height="292"
            transform="matrix(1 0 0 -1 784 599)"
            fill="#C026D3"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_143_13135"
            x="-38"
            y="142"
            width="892"
            height="265"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_dropShadow_143_13135"
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
              result="effect2_dropShadow_143_13135"
            />
            <feOffset dy="25" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_143_13135"
              result="effect2_dropShadow_143_13135"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_143_13135"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_dd_143_13135"
            x="-38"
            y="0"
            width="732"
            height="407"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_dropShadow_143_13135"
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
              result="effect2_dropShadow_143_13135"
            />
            <feOffset dy="25" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_143_13135"
              result="effect2_dropShadow_143_13135"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_143_13135"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_dd_143_13135"
            x="-38"
            y="67"
            width="812"
            height="340"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_dropShadow_143_13135"
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
              result="effect2_dropShadow_143_13135"
            />
            <feOffset dy="25" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_143_13135"
              result="effect2_dropShadow_143_13135"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_143_13135"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_dd_143_13135"
            x="586"
            y="292"
            width="892"
            height="277"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_dropShadow_143_13135"
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
              result="effect2_dropShadow_143_13135"
            />
            <feOffset dy="25" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_143_13135"
              result="effect2_dropShadow_143_13135"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_143_13135"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_dd_143_13135"
            x="666"
            y="292"
            width="812"
            height="357"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_dropShadow_143_13135"
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
              result="effect2_dropShadow_143_13135"
            />
            <feOffset dy="25" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_143_13135"
              result="effect2_dropShadow_143_13135"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_143_13135"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_dd_143_13135"
            x="746"
            y="292"
            width="732"
            height="437"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_dropShadow_143_13135"
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
              result="effect2_dropShadow_143_13135"
            />
            <feOffset dy="25" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_143_13135"
              result="effect2_dropShadow_143_13135"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_143_13135"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div className="flex flex-row items-center justify-between w-full px-20">
        {/* Mobile UI */}
        <Image
          src="/images/iphone.png"
          width={300}
          height={600}
          alt="iphone Mockup"
          className="z-10"
        />
        <div className="flex flex-col justify-center max-w-md items-start lg:gap-4 pl-10 space-y-6 lg:space-y-0 w-full mt-10">
          <h1 className="text-3xl font-bold">Launch your app today</h1>
          <p className="max-w-md">
            Stay on top of your competition with a great performing app. Your
            time and energy are not wasted.
          </p>
          <div className="flex gap-4 w-full">
            <Button className="bg-white hover:bg-white/90 text-black px-6 py-2 rounded-full">
              Publish App
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launch;
