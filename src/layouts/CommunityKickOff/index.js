import React from "react";
import { Element } from "react-scroll";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Ui - Components
import PostLink from "@components/UI/Post/PostLink";

const LyCommunityKickOff = () => {
  return (
    <>
      <Element
        id="agenda"
        className="flex flex-col px-2 sm:px-4 mt-20 mb-28"
        name="agenda"
      >
        <h2 className="text-white font-w3w-bold text-xl sm:text-[32px] leading-[30px] sm:leading-[48px] text-center uppercase">
          Community Kick-Off
        </h2>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-6 gap-x-6 mt-8">
          <div className="col-span-full sm:col-span-4 lg:col-span-3">
            <PostLink
              typePost="blank-link"
              url="https://twitter.com/web3weekend"
              className="flex flex-col relative grayscale"
            >
              <div>
                <Image
                  className="object-cover object-center my-auto mx-auto h-auto min-h-[242px] lg:min-h-[212px] xl:min-h-[242px] max-h-[242px] lg:max-h-[212px] xl:max-h-[242px] w-full"
                  src={`${publicRuntimeConfig.staticFolderImgs}/community-kickoff/community-kickoff-twiiter-space-1.png`}
                  alt={`${publicRuntimeConfig.appName} (Twitter Space 1 - Community Kick Off - Images)`}
                  height={564}
                  width={1250}
                  quality="87"
                />
              </div>
              <div className="font-fira-code font-normal uppercase mt-4">
                <p className="text-gray-700 text-base font-bold">
                  3RD May 2023
                </p>
                <p className="text-white text-base mt-4">Twitter space</p>
                <p className="text-white text-base">
                  Web3 in Action: What when where can you see the use cases?
                </p>
              </div>
            </PostLink>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-3">
            <PostLink
              typePost="blank-link"
              url="https://twitter.com/web3weekend"
              className="flex flex-col relative grayscale"
            >
              <div>
                <Image
                  className="object-cover object-center my-auto mx-auto h-auto min-h-[242px] lg:min-h-[212px] xl:min-h-[242px] max-h-[242px] lg:max-h-[212px] xl:max-h-[242px] w-full"
                  src={`${publicRuntimeConfig.staticFolderImgs}/community-kickoff/community-kickoff-telegram-vcs.png`}
                  alt={`${publicRuntimeConfig.appName} (Telegram VCS - Community Kick Off - Images)`}
                  height={564}
                  width={1250}
                  quality="87"
                />
              </div>
              <div className="font-fira-code font-normal uppercase mt-4">
                <p className="text-gray-700 text-base font-bold">
                  5th May 2023
                </p>
                <p className="text-white text-base mt-4">Telegram Discussion</p>
                <p className="text-white text-base">Web3 Beyond the Surface</p>
              </div>
            </PostLink>
          </div>
          <div className="col-span-full lg:col-span-6">
            <PostLink
              typePost="blank-link"
              url="https://t.me/web3weekendofficial"
              className="flex flex-col relative"
            >
              <div>
                <Image
                  className="object-cover object-center my-auto mx-auto h-auto min-h-[242px] lg:min-h-[212px] xl:min-h-[242px] max-h-[242px] lg:max-h-[212px] xl:max-h-[242px] w-full"
                  src={`${publicRuntimeConfig.staticFolderImgs}/community-kickoff/community-kickoff-twiiter-space-2.png`}
                  alt={`${publicRuntimeConfig.appName} (Twitter Space 1 - Community Kick Off - Images)`}
                  height={564}
                  width={1250}
                  quality="87"
                />
              </div>
              <div className="font-fira-code font-normal uppercase mt-4">
                <p className="text-primary text-base font-bold">9th May 2023</p>
                <p className="text-white text-base mt-4">Twitter Space</p>
                <p className="text-white text-base">
                  Web3 in Action: Everything you{" "}
                  <span className="line-through">need to</span> already know!
                </p>
              </div>
            </PostLink>
          </div>
        </div>
      </Element>
    </>
  );
};

export default LyCommunityKickOff;
