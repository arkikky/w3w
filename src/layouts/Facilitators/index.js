import React from "react";
import { Element } from "react-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import "@splidejs/react-splide/css";

const LyFacilitators = () => {
  return (
    <>
      <Element
        id="judges"
        className="flex flex-col px-2 sm:px-4 mb-28"
        name="judges"
      >
        <div className="flex lg:hidden flex-col items-center justify-center mx-auto w-full max-w-[795px]">
          <h2 className="text-white font-w3w-bold text-xl sm:text-[32px] leading-[30px] sm:leading-[48px] uppercase">
            Previous <span className="text-primary">judges</span>
          </h2>
        </div>
        <div className="mt-6 sm:mt-8">
          <div className="supports-grid:!grid grid-cols-4 sm:grid-cols-12 gap-y-4 sm:gap-y-6 lg:gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-x-8">
            <div className="col-span-full sm:col-span-4 lg:col-span-3 hidden lg:flex relative h-[327px] sm:h-[225px] xl:h-[312px] max-h-[327px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <div className="flex flex-col absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-auto min-h-max sm:min-h-[84px] z-[5]">
                <h2 className="text-white font-w3w-bold text-xl xl:text-[32px] leading-[30px] xl:leading-[48px] uppercase">
                  Previous <span className="text-primary">judges</span>
                </h2>
              </div>
            </div>
            <div className="col-span-full sm:col-span-4 lg:col-span-3 relative h-[327px] sm:h-[225px] xl:h-[312px] max-h-[327px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/judges/rahmat-albariqi.jpg`}
                alt={`${publicRuntimeConfig.appName} (Rahmat Albariqi - Judge Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                JUDGES
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max sm:min-h-[84px] z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Rahmat Albariqi
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Founder & CEO</p>
                  <p>Paras</p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 absolute inset-y-0 inset-x-0"></div>
            </div>
            <div className="col-span-full sm:col-span-4 lg:col-span-3 relative h-[327px] sm:h-[225px] xl:h-[312px] max-h-[327px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/judges/markus-liman-raharja.jpg`}
                alt={`${publicRuntimeConfig.appName} (Markus Liman Raharja - Judge Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                JUDGES
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max sm:min-h-[84px] z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Markus Liman Raharja
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>BRI Ventures</p>
                  <p>Chief Investment Officer</p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 absolute inset-y-0 inset-x-0"></div>
            </div>
            <div className="col-span-full sm:col-span-4 lg:col-span-3 relative h-[327px] sm:h-[225px] xl:h-[312px] max-h-[327px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/judges/william-sutanto.jpg`}
                alt={`${publicRuntimeConfig.appName} (William Sutanto - Judge Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                JUDGES
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max sm:min-h-[84px] z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  William Sutanto
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Founder & CEO</p>
                  <p>Indodax & Blockdevid</p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 absolute inset-y-0 inset-x-0"></div>
            </div>
          </div>
        </div>
      </Element>
      <Element
        id="facilitators"
        className="flex flex-col px-2 sm:px-4 mb-28"
        name="facilitators"
      >
        <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[795px]">
          <h2 className="text-white font-w3w-bold text-xl sm:text-[32px] leading-[30px] sm:leading-[48px] text-center uppercase">
            Previous <span className="text-primary">facilitators</span>
          </h2>
        </div>
        <div className="mt-6 sm:mt-8">
          <div className="supports-grid:!grid grid-cols-4 sm:grid-cols-12 gap-y-4 sm:gap-y-6 lg:gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-x-8">
            <div className="col-span-2 sm:col-span-4 lg:col-span-3 relative h-[213px] sm:h-[225px] xl:h-[312px] max-h-[213px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/mentors/mario-nurcahyanto.jpg`}
                alt={`${publicRuntimeConfig.appName} (Mario Nurcahyanto - Mentors Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                Mentors
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max sm:min-h-[84px] z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Mario Nurcahyanto
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Founder & Lead</p>
                  <p>Parallax Network</p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 absolute inset-y-0 inset-x-0"></div>
            </div>
            <div className="col-span-2 sm:col-span-4 lg:col-span-3 relative h-[213px] sm:h-[225px] xl:h-[312px] max-h-[213px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/mentors/sofian-hadiwijaya.jpg`}
                alt={`${publicRuntimeConfig.appName} (Sofian Hadiwijaya - Mentors Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                Mentors
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max sm:min-h-[84px] z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Sofian Hadiwijaya
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Alterra Group</p>
                  <p>CTO Alterra Group, Two Point Five</p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 absolute inset-y-0 inset-x-0"></div>
            </div>
            <div className="col-span-2 sm:col-span-4 lg:col-span-3 relative h-[213px] sm:h-[225px] xl:h-[312px] max-h-[213px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/mentors/fengkie-junis.jpg`}
                alt={`${publicRuntimeConfig.appName} (Fengkie Junis - Mentors Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                Mentors
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max sm:min-h-[84px] z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Fengkie Junis
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>CEO & CO-FOUNDER</p>
                  <p>Fiverse</p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 absolute inset-y-0 inset-x-0"></div>
            </div>
            <div className="col-span-2 sm:col-span-4 lg:col-span-3 relative h-[213px] sm:h-[225px] xl:h-[312px] max-h-[213px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/mentors/mohamad-irfianto.jpg`}
                alt={`${publicRuntimeConfig.appName} (Mohamad Irfianto - Mentors Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                Mentors
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max sm:min-h-[84px] z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Mohamad Irfianto
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Engineer Lead</p>
                  <p>Paras</p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 absolute inset-y-0 inset-x-0"></div>
            </div>
            <div className="col-span-2 sm:col-span-4 lg:col-span-3 relative h-[213px] sm:h-[225px] xl:h-[312px] max-h-[213px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/mentors/aldi-raharja.jpg`}
                alt={`${publicRuntimeConfig.appName} (Aldi Raharja - Mentors Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                Mentors
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max sm:min-h-[84px] z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Aldi Raharja
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>WIR</p>
                  <p>Head of Blockchain Solutions</p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 absolute inset-y-0 inset-x-0"></div>
            </div>
            <div className="col-span-2 sm:col-span-4 lg:col-span-3 relative h-[213px] sm:h-[225px] xl:h-[312px] max-h-[213px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/coach/akhri-fadjar-ramadhan.jpg`}
                alt={`${publicRuntimeConfig.appName} (Akhri Fadjar Ramadhan - Coach Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                Coach
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Akhri Fadjar Ramadhan
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Co-Founder & Product Manager</p>
                  <p>Parallax Network</p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 absolute inset-y-0 inset-x-0"></div>
            </div>
            <div className="col-span-2 sm:col-span-4 lg:col-span-3 relative h-[213px] sm:h-[225px] xl:h-[312px] max-h-[213px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/coach/evans-moris-cheahn.jpg`}
                alt={`${publicRuntimeConfig.appName} (Evans Moris Cheahn - Coach Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                Coach
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Evans Moris Cheahn
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Founder & CEO</p>
                  <p>Sliva Technology Indonesia</p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 absolute inset-y-0 inset-x-0"></div>
            </div>
            <div className="col-span-2 sm:col-span-4 lg:col-span-3 relative h-[213px] sm:h-[225px] xl:h-[312px] max-h-[213px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/coach/firda-safridi.jpg`}
                alt={`${publicRuntimeConfig.appName} (Firda Safridi - Coach Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                Coach
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Firda Safridi
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>VP Engineering/Co-Founder</p>
                  <p>QolaQ</p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 absolute inset-y-0 inset-x-0"></div>
            </div>
            <div className="col-span-2 sm:col-span-4 lg:col-span-3 relative h-[213px] sm:h-[225px] xl:h-[312px] max-h-[213px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/coach/gilang-bhagaskara.jpg`}
                alt={`${publicRuntimeConfig.appName} (Gilang Bhagaskara - Coach Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                Coach
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Gilang Bhagaskara
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>CEO</p>
                  <p>Blocksphere Indonesia</p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 absolute inset-y-0 inset-x-0"></div>
            </div>
            <div className="col-span-2 sm:col-span-4 lg:col-span-3 relative h-[213px] sm:h-[225px] xl:h-[312px] max-h-[213px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/coach/irsantyo-hadi.jpg`}
                alt={`${publicRuntimeConfig.appName} (Irsantyo Hadi - Coach Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                Coach
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Irsantyo Hadi
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Blockchain Engineer</p>
                  <p>Nusameta</p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 absolute inset-y-0 inset-x-0"></div>
            </div>
            <div className="col-span-2 sm:col-span-4 lg:col-span-3 relative h-[213px] sm:h-[225px] xl:h-[312px] max-h-[213px] sm:max-h-[225px] xl:max-h-[312px] w-full">
              <Image
                className="object-cover bg-center h-full w-full z-0.5"
                src={`${publicRuntimeConfig.staticFolderImgs}/facilitators/coach/ricksen-tanata.jpg`}
                alt={`${publicRuntimeConfig.appName} (Ricksen Tanata - Coach Facilitators)`}
                height={355}
                width={325}
              />
              <span className="bg-fuchsia-700 text-white font-fira-code text-xs font-normal uppercase absolute top-2 sm:top-3 xl:top-4 left-2 sm:left-3 xl:left-4 right-auto bottom-auto py-1 xl:py-2 px-1 xl:px-2 z-[5]">
                Coach
              </span>
              <div className="flex flex-col absolute top-auto left-2 sm:left-3 xl:left-4 right-2 sm:right-3 xl:right-4 bottom-2 sm:bottom-3 xl:bottom-4 min-h-max z-[5]">
                <h3 className="text-lime-500 font-fire-code text-sm sm:text-base font-medium capitalize">
                  Ricksen Tanata
                </h3>
                <div className="text-white font-fira-code text-xs sm:text-sm font-normal capitalize">
                  <p>Web3 Product Designer</p>
                  <p>Parallax Network</p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 absolute inset-y-0 inset-x-0"></div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default LyFacilitators;
