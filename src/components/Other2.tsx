import React from "react";
import Image from "next/image";

const Other2 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full py-10 px-10 bg-[#F1F5F9] text-black">
      <div className="relative flex w-full lg:pt-10 lg:mt-10">
        <div className="relative flex flex-1 items-center justify-center z-10">
          {/* Mobile UI */}
          <Image
            src="/images/Col1.png"
            width={516}
            height={575}
            alt="iphone Mockup"
            className="z-10 sm:w-auto sm:h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start space-y-12 w-full">
        <h1 className="text-4xl font-bold">Sagittis sapien viverra</h1>
        <p className="text-lg max-w-lg">
          Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor
          tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate
          facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna
          massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus
          bibendum risus auctor lacus tristique arcu. Arcu hac cursus faucibus
          id. Eu integer parturient risus magna eget massa. Risus molestie
          tempor, faucibus non ultricies. Nam vel mattis quis dui, condimentum
          mi volutpat ut aliquam.
        </p>
      </div>
    </div>
  );
};

export default Other2;
