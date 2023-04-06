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
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 gap-y-6 sm:gap-y-8 gap-x-8 mt-6">
          <div className="col-span-full sm:col-span-4 lg:col-span-3">
            <Buttons
              label="DEFI"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicDefi"
              className="justify-between cursor-default font-normal rounded-[13px] px-4 w-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12H6M12 12V6M12 12V18M12 12H18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </Buttons>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-3">
            <Buttons
              label="GAMING"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicGaming"
              className="justify-between cursor-default font-normal rounded-[13px] px-4 w-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12H6M12 12V6M12 12V18M12 12H18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </Buttons>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-3">
            <Buttons
              label="DAO"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicDao"
              className="justify-between cursor-default font-normal rounded-[13px] px-4 w-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12H6M12 12V6M12 12V18M12 12H18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </Buttons>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-3">
            <Buttons
              label="SOCIALFI"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicSocialfi"
              className="justify-between cursor-default font-normal rounded-[13px] px-4 w-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12H6M12 12V6M12 12V18M12 12H18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </Buttons>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-3">
            <Buttons
              label="METAVERSE"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicMetaverse"
              className="justify-between cursor-default font-normal rounded-[13px] px-4 w-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12H6M12 12V6M12 12V18M12 12H18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </Buttons>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-3">
            <Buttons
              label="SOCIAL IMPACT"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicSocialImpact"
              className="justify-between cursor-default font-normal rounded-[13px] px-4 w-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12H6M12 12V6M12 12V18M12 12H18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </Buttons>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-3">
            <Buttons
              label="ENVIRONMENTAL"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicEnvironmental"
              className="justify-between cursor-default font-normal rounded-[13px] px-4 w-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12H6M12 12V6M12 12V18M12 12H18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </Buttons>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-3">
            <Buttons
              label="ANALYTIC"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicAnalytic"
              className="justify-between cursor-default font-normal rounded-[13px] px-4 w-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12H6M12 12V6M12 12V18M12 12H18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </Buttons>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-3">
            <Buttons
              label="NFT"
              variants="btn-outline-white"
              size="base"
              text="uppercase"
              position="center"
              withIcons={true}
              positionIcons="right"
              aria-labelledby="btnPitchingTopicNft"
              className="justify-between cursor-default font-normal rounded-[13px] px-4 w-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12H6M12 12V6M12 12V18M12 12H18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
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
