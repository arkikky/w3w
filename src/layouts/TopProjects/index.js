import React from "react";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Ui - Components
import Buttons from "@components/UI/Buttons";

const LyTopProjects = () => {
  return (
    <>
      <div id="winners" className="flex flex-col px-2 sm:px-4 mt-20">
        <h2 className="text-white font-w3w-bold text-xl sm:text-[32px] leading-[30px] sm:leading-[48px] text-center uppercase">
          Previous winners
        </h2>
        <div className="inline-flex flex-wrap items-center justify-start sm:justify-center gap-y-4 sm:gap-y-8 gap-x-1 sm:gap-x-8 w-full mt-6">
          <div className="flex flex-col items-center justify-center basis-full sm:basis-[47%] lg:basis-[30%] xl:basis-[23%] bg-[#282828] border border-solid border-[#282828] hocus:border-primary py-4 px-4 min-h-[158px] transition duration-300 ease-in-out">
            <div className="flex flex-col items-center w-full sm:w-max">
              <Image
                className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-[72px] w-auto"
                src={`${publicRuntimeConfig.staticFolderImgs}/currated-project/wastechain.svg`}
                alt={`${publicRuntimeConfig.appName} (WASTECHAIN - Previous Winners)`}
                sizes="(min-width: 1874px) 206vw,
                        (min-width: 1536px) 257vw,
                        (min-width: 1280px) 313vw,
                        (min-width: 1024px) 395vw,
                        (min-width: 640px) 631vw,
                        1005vw"
                height={88}
                width={163}
                quality="87"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center basis-full sm:basis-[47%] lg:basis-[30%] xl:basis-[23%] bg-[#282828] border border-solid border-[#282828] hocus:border-primary py-4 px-4 min-h-[158px] transition duration-300 ease-in-out">
            <div className="flex flex-col items-center w-full sm:w-max">
              <Image
                className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-[72px] w-auto"
                src={`${publicRuntimeConfig.staticFolderImgs}/currated-project/cryptokaget.svg`}
                alt={`${publicRuntimeConfig.appName} (CRYPTOKAGET - Previous Winners)`}
                sizes="(min-width: 1874px) 206vw,
                        (min-width: 1536px) 257vw,
                        (min-width: 1280px) 313vw,
                        (min-width: 1024px) 395vw,
                        (min-width: 640px) 631vw,
                        1005vw"
                height={88}
                width={163}
                quality="87"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center basis-full sm:basis-[47%] lg:basis-[30%] xl:basis-[23%] bg-[#282828] border border-solid border-[#282828] hocus:border-primary py-4 px-4 min-h-[158px] transition duration-300 ease-in-out">
            <div className="flex flex-col items-center w-full sm:w-max">
              <Image
                className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-[72px] w-auto"
                src={`${publicRuntimeConfig.staticFolderImgs}/currated-project/encoteki.png`}
                alt={`${publicRuntimeConfig.appName} (ENCOTEKI - Previous Winners)`}
                sizes="(min-width: 1874px) 206vw,
                        (min-width: 1536px) 257vw,
                        (min-width: 1280px) 313vw,
                        (min-width: 1024px) 395vw,
                        (min-width: 640px) 631vw,
                        1005vw"
                height={88}
                width={163}
                quality="87"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center basis-full sm:basis-[47%] lg:basis-[30%] xl:basis-[23%] bg-[#282828] border border-solid border-[#282828] hocus:border-primary py-4 px-4 min-h-[158px] transition duration-300 ease-in-out">
            <div className="flex flex-col items-center w-full sm:w-max">
              <Image
                className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-[72px] w-auto"
                src={`${publicRuntimeConfig.staticFolderImgs}/currated-project/hexa-play.png`}
                alt={`${publicRuntimeConfig.appName} (HEXA PLAY - Previous Winners)`}
                sizes="(min-width: 1874px) 206vw,
                        (min-width: 1536px) 257vw,
                        (min-width: 1280px) 313vw,
                        (min-width: 1024px) 395vw,
                        (min-width: 640px) 631vw,
                        1005vw"
                height={88}
                width={163}
                quality="87"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center basis-full sm:basis-[47%] lg:basis-[30%] xl:basis-[23%] bg-[#282828] border border-solid border-[#282828] hocus:border-primary py-4 px-4 min-h-[158px] transition duration-300 ease-in-out">
            <div className="flex flex-col items-center w-full sm:w-max">
              <Image
                className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-[72px] w-auto"
                src={`${publicRuntimeConfig.staticFolderImgs}/currated-project/sekeuya.png`}
                alt={`${publicRuntimeConfig.appName} (SEKUYA MULTIVERSE - Previous Winners)`}
                sizes="(min-width: 1874px) 206vw,
                        (min-width: 1536px) 257vw,
                        (min-width: 1280px) 313vw,
                        (min-width: 1024px) 395vw,
                        (min-width: 640px) 631vw,
                        1005vw"
                height={88}
                width={163}
                quality="87"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center basis-full sm:basis-[47%] lg:basis-[30%] xl:basis-[23%] bg-[#282828] border border-solid border-[#282828] hocus:border-primary py-4 px-4 min-h-[158px] transition duration-300 ease-in-out">
            <div className="flex flex-col items-center w-full sm:w-max">
              <Image
                className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-[72px] w-auto"
                src={`${publicRuntimeConfig.staticFolderImgs}/currated-project/socioverse.svg`}
                alt={`${publicRuntimeConfig.appName} (SOCIOVERSE - Previous Winners)`}
                sizes="(min-width: 1874px) 206vw,
                        (min-width: 1536px) 257vw,
                        (min-width: 1280px) 313vw,
                        (min-width: 1024px) 395vw,
                        (min-width: 640px) 631vw,
                        1005vw"
                height={88}
                width={163}
                quality="87"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 w-full">
          <Buttons
            typeBtn="btn-blank-link"
            className="text-xs lg:text-sm py-4 px-4 mx-auto"
            url="/curated-project"
            label="See the top 30’s"
            variants="btn-primary"
            text="uppercase"
            position="center"
          />
        </div>
      </div>
    </>
  );
};

export default LyTopProjects;
