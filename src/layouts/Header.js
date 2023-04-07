import React from "react";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import Headr from "@styles/layouts/Header.module.css";

// Ui - Components
import Container from "@components/Container";
import Buttons from "@components/UI/Buttons";
import ImagesFill from "@components/UI/ImagesFill";
import PostLink from "@components/UI/Post/PostLink";

const Header = () => {
  return (
    <>
      <header className="relative">
        <Container className="mt-[92px] sm:mt-[129px] lg:mt-[164px] px-2 sm:px-4">
          <section className="relative">
            <div className="flex flex-col w-full max-w-[597px] xl:max-w-[661px] 2xl:max-w-[782px]">
              <Buttons
                label="26 APrIL — 9 JUNE"
                variants="btn-outline-primary"
                size="base"
                text="uppercase"
                rounded="pill"
                position="left"
                className="text-xs sm:text-sm font-normal py-2 px-3 sm:px-4"
              />
              <h1 className="text-white font-w3w-bold text-[22px] sm:text-[66px] 2xl:text-[88px] leading-[32px] sm:leading-[89px] 2xl:leading-[111px] tracking-[2px] lg:tracking-[4px] uppercase mt-6">
                TURN YOUR IDEAS INTO REALITY
              </h1>
              <div className="text-white font-fira-code text-sm sm:text-lg lg:text-xl font-normal uppercase mt-1 sm:mt-0 w-full max-w-[289px] sm:max-w-[371px] xl:max-w-[527px] 2xl:max-w-[561px]">
                ONLINE WEB3 INNOVATION COMPETITION
              </div>
              <div className="mr-auto w-max">
                <Buttons
                  typeBtn="btn-blank-link"
                  url="https://bit.ly/w3wregistration"
                  label="Participate now"
                  variants="btn-primary"
                  size="lg"
                  text="uppercase"
                  className="text-sm sm:text-base mt-8 sm:mt-16 py-4 sm:py-4 px-4 sm:px-6"
                />
              </div>
              <div className="mt-12 sm:mt-16">
                <h3 className="text-white font-fira-code text-xl font-normal uppercase">
                  co-hosted by
                </h3>
                <div className="inline-flex flex-wrap items-center justify-start gap-y-0 w-full mt-4">
                  <PostLink
                    typePost="blank-link"
                    url="https://coinvestasi.com/"
                    className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 px-0 h-full grayscale hocus:grayscale-0 transition duration-300 ease-in-out"
                  >
                    <Image
                      className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[104px] lg:max-h-max w-auto"
                      src={`${publicRuntimeConfig.staticFolderImgs}/partner/header/coinvestasi.svg`}
                      alt={`${publicRuntimeConfig.appName} (Coinvestasi Co-Hosted - Header Brand Partner)`}
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
                    className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 px-0 h-full grayscale hocus:grayscale-0 transition duration-300 ease-in-out"
                  >
                    <Image
                      className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[104px] lg:max-h-max w-auto"
                      src={`${publicRuntimeConfig.staticFolderImgs}/partner/header/blockdev-id.svg`}
                      alt={`${publicRuntimeConfig.appName} (Dev ID Co-Hosted - Header Brand Partner)`}
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
            </div>
          </section>
          <div className={`${Headr.headerImgsItems}`}>
            <ImagesFill
              className="h-full w-full"
              src={`${publicRuntimeConfig.staticFolderImgs}/w-glow-up.png`}
              alt={`${publicRuntimeConfig.appName} (Header - W Glow Up)`}
              priority={true}
            />
          </div>
          <div className={`${Headr.headerImgs}`}>
            <ImagesFill
              className="h-full w-full"
              src={`${publicRuntimeConfig.staticFolderImgs}/w-glow.png`}
              alt={`${publicRuntimeConfig.appName} (Header - W Glow)`}
              priority={true}
            />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
