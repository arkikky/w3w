import React from "react";
import { Element } from "react-scroll";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

const LyFacilitators = () => {
  return (
    <>
      <Element
        id="facilitators"
        className="flex flex-col px-2 sm:px-4 mb-28"
        name="facilitators"
      >
        <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[795px]">
          <h2 className="text-white font-w3w-bold text-xl sm:text-[32px] leading-[30px] sm:leading-[48px] uppercase">
            FACILITATORS
          </h2>
        </div>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 gap-y-4 sm:gap-y-6 lg:gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-x-8 mt-8">
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <div className="relative h-[177px] sm:h-[225px] xl:h-[312px] max-h-[177px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/facilitators-1.png`}
                alt={`${publicRuntimeConfig.appName} (Facilitators 1 - Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                JUDGES
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max sm:min-h-[84px] z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Felita Setiawan
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Genesis Engineer</p>
                  <p>CO-Founder</p>
                  <p>Warung Pintar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <div className="relative h-[177px] sm:h-[225px] xl:h-[312px] max-h-[177px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/facilitators-2.png`}
                alt={`${publicRuntimeConfig.appName} (Facilitators 2 - Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                JUDGES
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max sm:min-h-[84px] z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Felita Setiawan
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Genesis Engineer</p>
                  <p>CO-Founder</p>
                  <p>Warung Pintar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <div className="relative h-[177px] sm:h-[225px] xl:h-[312px] max-h-[177px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/facilitators-1.png`}
                alt={`${publicRuntimeConfig.appName} (Facilitators 1 - Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                JUDGES
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max sm:min-h-[84px] z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Felita Setiawan
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Blockchain Developer</p>
                  <p>NUSAMETA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <div className="relative h-[177px] sm:h-[225px] xl:h-[312px] max-h-[177px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/facilitators-2.png`}
                alt={`${publicRuntimeConfig.appName} (Facilitators 2 - Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                JUDGES
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max sm:min-h-[84px] z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Felita Setiawan
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Genesis Engineer</p>
                  <p>CO-Founder</p>
                  <p>Warung Pintar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <div className="relative h-[177px] sm:h-[225px] xl:h-[312px] max-h-[177px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/facilitators-1.png`}
                alt={`${publicRuntimeConfig.appName} (Facilitators 1 - Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                JUDGES
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max sm:min-h-[84px] z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Felita Setiawan
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Genesis Engineer</p>
                  <p>CO-Founder</p>
                  <p>Warung Pintar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <div className="relative h-[177px] sm:h-[225px] xl:h-[312px] max-h-[177px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/facilitators-2.png`}
                alt={`${publicRuntimeConfig.appName} (Facilitators 2 - Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                JUDGES
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max sm:min-h-[84px] z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Felita Setiawan
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Genesis Engineer</p>
                  <p>CO-Founder</p>
                  <p>Warung Pintar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <div className="relative h-[177px] sm:h-[225px] xl:h-[312px] max-h-[177px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/facilitators-1.png`}
                alt={`${publicRuntimeConfig.appName} (Facilitators 1 - Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                JUDGES
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max sm:min-h-[84px] z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Felita Setiawan
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Blockchain Developer</p>
                  <p>NUSAMETA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <div className="relative h-[177px] sm:h-[225px] xl:h-[312px] max-h-[177px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/facilitators-2.png`}
                alt={`${publicRuntimeConfig.appName} (Facilitators 2 - Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                JUDGES
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max sm:min-h-[84px] z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Felita Setiawan
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Genesis Engineer</p>
                  <p>CO-Founder</p>
                  <p>Warung Pintar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default LyFacilitators;
