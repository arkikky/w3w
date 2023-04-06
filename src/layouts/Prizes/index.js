import React from "react";
import { Element } from "react-scroll";

const LyPrizes = () => {
  return (
    <>
      <Element
        id="prizes"
        className="flex flex-col px-2 sm:px-4 mt-[88px] sm:mt-[131px] mb-24"
        name="prizes"
      >
        <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[795px]">
          <h2 className="text-white font-w3w-bold text-xl sm:text-[32px] leading-[30px] sm:leading-[48px] uppercase">
            PRIZES
          </h2>
          <p className="text-gray-200 font-fira-code text-base font-normal uppercase mt-2">
            It's time to ship your project! The best ones will win awards,
            prizes, and glory.
          </p>
        </div>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 sm:gap-y-8 gap-x-4 sm:gap-x-8 mt-8">
          <div className="col-span-full xl:col-span-6">
            <div className="flex flex-col items-center justify-center bg-[#2D2D2D] text-center py-9 px-6 h-full">
              <div className="bg-[#5B5B5B] mx-auto h-[75px] sm:h-[112px] min-h-[75px] sm:min-h-[112px] w-[75px] sm:w-[112px] min-w-[75px] sm:min-w-[112px]"></div>
              <div className="block mt-8">
                <h3 className="flex flex-row items-start justify-center text-white font-w3w-bold text-2xl font-bold uppercase mx-auto w-max">
                  1<small className="text-xs mr-3">ST</small> WINNER
                </h3>
                <span className="text-white font-fira-code text-xl font-normal mt-1.5">
                  IDR 12.000.000,-
                </span>
                <p className="text-white font-fira-code text-base font-normal mt-6">
                  TICKETS TO COINFEST ASIA & ACCESS TO OFFICIAL SIDE EVENTS
                  OFFICIAL WEB3 WEEKEND MERCHANDISE
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-full xl:col-span-6">
            <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 gap-y-4 sm:gap-y-8 gap-x-4 sm:gap-x-8">
              <div className="col-span-4">
                <div className="flex flex-col items-center justify-center bg-[#2D2D2D] text-center py-9 px-6 h-full">
                  <div className="bg-[#5B5B5B] mx-auto h-[75px] sm:h-[112px] min-h-[75px] sm:min-h-[112px] w-[75px] sm:w-[112px] min-w-[75px] sm:min-w-[112px]"></div>
                  <div className="block mt-8">
                    <h3 className="flex flex-row items-start justify-center text-white font-w3w-bold text-2xl font-bold uppercase mx-auto w-max">
                      2<small className="text-xs mr-3">ND</small> WINNER
                    </h3>
                    <span className="text-white font-fira-code text-xl font-normal mt-1.5">
                      IDR 8.000.000,-
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex flex-col items-center justify-center bg-[#2D2D2D] text-center py-9 px-6 h-full">
                  <div className="bg-[#5B5B5B] mx-auto h-[75px] sm:h-[112px] min-h-[75px] sm:min-h-[112px] w-[75px] sm:w-[112px] min-w-[75px] sm:min-w-[112px]"></div>
                  <div className="block mt-8">
                    <h3 className="flex flex-row items-start justify-center text-white font-w3w-bold text-2xl font-bold uppercase mx-auto w-max">
                      3<small className="text-xs mr-3">RD</small> WINNER
                    </h3>
                    <span className="text-white font-fira-code text-xl font-normal mt-1.5">
                      IDR 5.000.000,-
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <div className="flex flex-col sm:flex-row items-center justify-center bg-[#2D2D2D] text-center py-9 px-6 h-full">
                  <div className="bg-[#5B5B5B] h-[75px] sm:h-[52px] min-h-[75px] sm:min-h-[52px] w-[52px] min-w-[75px] sm:min-w-[52px]"></div>
                  <div className="block text-center sm:text-left mt-8 sm:mt-0 ml-0 sm:ml-5">
                    <h3 className="text-white font-w3w-bold text-2xl font-bold uppercase">
                      2 Community Choices
                    </h3>
                    <span className="text-white font-fira-code text-xl font-normal mt-1.5">
                      IDR 2.500.000,- / each
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default LyPrizes;
