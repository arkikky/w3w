import React from "react";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Ui - Components
import PostLink from "@components/UI/Post/PostLink";

const LyCoHosted = () => {
  return (
    <>
      <section className="flex flex-col px-0 sm:px-4 mb-11">
        <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[795px]">
          <h2 className="text-white font-w3w-bold text-xl sm:text-[32px] leading-[30px] sm:leading-[48px] uppercase">
            CO-HOSTED BY
          </h2>
        </div>
        <div className="flex flex-col relative">
          <div className="inline-flex flex-wrap items-center justify-center gap-y-0 w-full mt-8">
            <PostLink
              typePost="blank-link"
              url="https://coinvestasi.com/"
              className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full grayscale hocus:grayscale-0 transition duration-300 ease-in-out"
            >
              <Image
                className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[104px] lg:max-h-max w-auto"
                src={`${publicRuntimeConfig.staticFolderImgs}/partner/co-hosted/coinvestasi.svg`}
                alt={`${publicRuntimeConfig.appName} (Coinvestasi Co-Hosted - Brand Partner)`}
                sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
                height={140}
                width={220}
                quality="87"
              />
            </PostLink>
            <PostLink
              typePost="blank-link"
              url="https://t.me/blockDevID"
              className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full grayscale hocus:grayscale-0 transition duration-300 ease-in-out"
            >
              <Image
                className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[104px] lg:max-h-max w-auto"
                src={`${publicRuntimeConfig.staticFolderImgs}/partner/co-hosted/blockdev-id.svg`}
                alt={`${publicRuntimeConfig.appName} (dev ID Co-Hosted - Brand Partner)`}
                sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
                height={140}
                width={220}
                quality="87"
              />
            </PostLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default LyCoHosted;
