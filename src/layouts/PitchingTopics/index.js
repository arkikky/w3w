import React from "react";

// Ui - Components
import Buttons from "@components/UI/Buttons";

const LyPitchingTopics = () => {
  return (
    <>
      <section className="flex flex-col px-2 sm:px-4 mt-16">
        <h2 className="text-white font-w3w-bold text-xl sm:text-[32px] leading-[30px] sm:leading-[48px] text-center uppercase">
          PITCHING TOPICS
        </h2>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 gap-y-4 sm:gap-y-8 gap-x-4 sm:gap-x-8 mt-6">
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <Buttons
              label="DEFI"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              rounded="sequare"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicDefi"
              className="justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
            >
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </Buttons>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <Buttons
              label="GAMING"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              rounded="sequare"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicGaming"
              className="justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
            >
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </Buttons>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <Buttons
              label="DAO"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              rounded="sequare"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicDao"
              className="justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
            >
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </Buttons>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <Buttons
              label="SOCIALFI"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              rounded="sequare"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicSocialfi"
              className="justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
            >
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </Buttons>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <Buttons
              label="METAVERSE"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              rounded="sequare"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicMetaverse"
              className="justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
            >
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </Buttons>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <Buttons
              label="SOCIAL IMPACT"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              rounded="sequare"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicSocialImpact"
              className="justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
            >
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </Buttons>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <Buttons
              label="ENVIRONMENTAL"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              rounded="sequare"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicEnvironmental"
              className="justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
            >
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </Buttons>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <Buttons
              label="ANALYTIC"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              rounded="sequare"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicAnalytic"
              className="justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
            >
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </Buttons>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <Buttons
              label="NFT"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              rounded="sequare"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicNft"
              className="justify-between cursor-default text-xs sm:text-sm font-normal py-3 sm:py-3 px-2 sm:px-4 w-full"
            >
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L16 8L6 18Z" fill="white" />
                <path
                  d="M6 18L16 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </Buttons>
          </div>
        </div>
      </section>
    </>
  );
};

export default LyPitchingTopics;
