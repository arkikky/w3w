import React, { useState } from "react";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Keyboard, Pagination } from "swiper";
import dayjs from "dayjs";
import Marquee from "react-fast-marquee";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Card from "@styles/components/Card.module.css";

// Ui - Components
import Main from "@components/Main";
import Container from "@components/Container";
import ImagesFill from "@components/UI/ImagesFill";
import PostLink from "@components/UI/Post/PostLink";
import Buttons from "@components/UI/Buttons";

// Ui - Layouts
import Header from "@layouts/Header";
import LyBuildersJourney from "@layouts/BuildersJourney";
import LyPitchingTopics from "@layouts/PitchingTopics";
import LyCommunityKickOff from "@layouts/CommunityKickOff";
import LyPrizes from "@layouts/Prizes";
import LyFacilitators from "@layouts/Facilitators";
import LyCommunityPartners from "@layouts/CommunityPartners";
import LyCoHosted from "@layouts/Co-Hosted";

const Home = () => {
  // const gtDtaYears = dayjs().format("mm");
  return (
    <>
      {/* Head (Home) */}
      <Head>
        <title>W3W | Web3 Weekend Asia 2023</title>
        <meta name="title" content="W3W | Web3 Weekend Asia 2023" />
        <meta
          name="description"
          content="Web 3 Week (W3W), Builders convention focused on web3"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coinfest.asia/" />
        <meta property="og:title" content="W3W | Web3 Weekend Asia 2023" />
        <meta
          property="og:description"
          content="Web 3 Week (W3W), Builders convention focused on web3"
        />
        <meta property="og:image" content="" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://coinfest.asia/" />
        <meta property="twitter:title" content="W3W | Web3 Weekend Asia 2023" />
        <meta
          property="twitter:description"
          content="Web 3 Week (W3W), Builders convention focused on web3"
        />
        <meta property="twitter:image" content="" />
      </Head>

      <Main className="relative">
        <Element id="about" className="overflow-hidden relative" name="about">
          {/* Backdrop (Beams) */}
          <Container className="select-none pointer-events-none absolute inset-y-0 inset-x-0 -z-px">
            {/* Beams (Left) */}
            <section className="absolute top-0 sm:top-[149px] lg:top-[102px] xl:top-[145px] -left-[234px] sm:-left-[189px] xl:-left-[213px] right-auto bottom-auto transform rotate-[-23deg] sm:rotate-0">
              <ImagesFill
                className="flex blur-[20px] relative h-[516px] 2xl:h-[516px] w-[393px] 2xl:w-[493px]"
                src={`${publicRuntimeConfig.staticFolderImgs}/backdrop/beams-left-backdrop.svg`}
                alt={`${publicRuntimeConfig.appName} (Beams - Left Backdrop)`}
              />
            </section>

            {/* Beams (Right) */}
            <section className="absolute -top-[243px] sm:-top-[239px] lg:-top-[198px] xl:-top-[135px] left-auto -right-[188px] sm:-right-16 2xl:-right-28 bottom-auto transform rotate-[14deg] sm:rotate-0">
              <ImagesFill
                className="flex blur-[20px] relative h-[516px] 2xl:h-[516px] w-[393px] 2xl:w-[493px]"
                src={`${publicRuntimeConfig.staticFolderImgs}/backdrop/beams-right-backdrop.svg`}
                alt={`${publicRuntimeConfig.appName} (Beams - Right Backdrop)`}
              />
            </section>
          </Container>

          <Container>
            <Header />
          </Container>

          {/* Banner (Follow Up - Text) */}
          <section className="relative ">
            <Container className="z-10">
              <section className="pt-[88px] pb-[94px] sm:pb-[110px] px-0 sm:px-4">
                <h2 className="text-white font-w3w-bold text-2xl sm:text-[46px] xl:text-[56px] leading-[34px] sm:leading-[62px] lg:leading-[72px] uppercase pr-0 lg:pr-[87px] xl:pr-[188px]">
                  Submit your best web3 project ideas and win a total prize of{" "}
                  <span className="text-primary">IDR 50 million</span>
                </h2>
              </section>
            </Container>

            {/* <div className="overflow-hidden absolute inset-y-0 inset-x-0 z-[2]">
            <div className="absolute inset-y-0 inset-x-0 z-[2]">
              <Image
                className=""
                src={`${publicRuntimeConfig.staticFolderImgs}/backdrop/gridlanes-3d-backdrop.svg`}
                alt={`${publicRuntimeConfig.appName} (Gridlines 3D - Backdrop)`}
                height={1257}
                width={2220}
              />
            </div>
          </div> */}
          </section>
        </Element>

        {/* Why Participate */}
        <section className="bg-[#282828] overflow-hidden py-12 mb-24">
          <Container>
            <div className="text-center px-2 sm:px-4">
              <h2 className="text-white font-w3w-bold text-xl sm:text-[32px] leading-[30px] sm:leading-[48px] uppercase">
                WHY PARTICIPATE IN{" "}
                <span className="text-primary">WEB3WEEKEND</span>?
              </h2>
            </div>
            <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-6 gap-x-6 px-2 sm:px-4 mt-6">
              <div className="col-span-full sm:col-span-4 lg:col-span-6">
                <div className="flex flex-col">
                  <div className="bg-[#D338BB]/[15%] flex flex-col items-center justify-center border border-solid border-[#D338BB] rounded-lg h-[48px] py-2 px-2 w-12 min-w-[48px] max-w-[48px]">
                    <Image
                      className="block relative h-8 w-8"
                      src={`${publicRuntimeConfig.staticFolderImgs}/why-participate/mentor.svg`}
                      alt={`${publicRuntimeConfig.appName} (Why Participate)`}
                      height={34}
                      width={34}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <h3 className="text-white font-fira-code text-base font-bold uppercase">
                      MENTOR in Web3
                    </h3>
                    <p className="text-white font-fira-code text-base font-normal uppercase mt-1">
                      Start connecting with highly skilled and experienced
                      mentors & coaches in web3.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-full sm:col-span-4 lg:col-span-6">
                <div className="flex flex-col">
                  <div className="bg-[#D338BB]/[15%] flex flex-col items-center justify-center border border-solid border-[#D338BB] rounded-lg h-[48px] py-2 px-2 w-12 min-w-[48px] max-w-[48px]">
                    <Image
                      className="block relative h-8 w-8"
                      src={`${publicRuntimeConfig.staticFolderImgs}/why-participate/learn.svg`}
                      alt={`${publicRuntimeConfig.appName} (Why Participate)`}
                      height={34}
                      width={34}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <h3 className="text-white font-fira-code text-base font-bold uppercase">
                      Learn Web3 in the right way
                    </h3>
                    <p className="text-white font-fira-code text-base font-normal uppercase mt-1">
                      Develop ideas and innovation in web3 that will help
                      communities solve real-life problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Container>
          {/* Builders Journey */}
          <LyBuildersJourney />

          {/* Pitching Topics */}
          <LyPitchingTopics />

          {/* Community Kick Off */}
          <LyCommunityKickOff />
        </Container>

        {/* Banner (Marquee) */}
        <section
          id="bnnerMarquee"
          className={`${Card.bnnerMarque} bg-gradient-purple flex flex-col overflow-hidden relative py-14 sm:py-16 lg:py-[88px] z-50`}
        >
          <div className="overflow-hidden absolute inset-y-0 inset-x-0 z-[2]">
            <div className="absolute inset-y-0 inset-x-0 z-[2]">
              <Image
                className="object-cover bg-center h-full w-full"
                src={`${publicRuntimeConfig.staticFolderImgs}/backdrop/gridlanes-backdrop.svg`}
                alt={`${publicRuntimeConfig.appName} (Gridlines - Backdrop)`}
                height={557}
                width={1120}
              />
            </div>
          </div>

          <Marquee
            className="inline-flex flex-row text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold uppercase overflow-y-hidden z-[12]"
            speed={100}
            gradient={false}
            pauseOnHover={true}
          >
            <div className="flex flex-row items-center whitespace-nowrap">
              <span>PARTICIPATE NOW</span>
              <span className="font-medium mx-4 mb-1">/</span>
              <span>PARTICIPATE NOW</span>
              <span className="font-medium mx-4 mb-1">/</span>
              <span>PARTICIPATE NOW</span>
              <span className="font-medium mx-4 mb-1">/</span>
              <span>PARTICIPATE NOW</span>
              <span className="font-medium mx-4 mb-1">/</span>
              <span>PARTICIPATE NOW</span>
              <span className="font-medium mx-4 mb-1">/</span>
            </div>
            <div className="flex flex-row items-center whitespace-nowrap">
              <span>PARTICIPATE NOW</span>
              <span className="font-medium mx-4 mb-1">/</span>
              <span>PARTICIPATE NOW</span>
              <span className="font-medium mx-4 mb-1">/</span>
              <span>PARTICIPATE NOW</span>
              <span className="font-medium mx-4 mb-1">/</span>
              <span>PARTICIPATE NOW</span>
              <span className="font-medium mx-4 mb-1">/</span>
              <span>PARTICIPATE NOW</span>
              <span className="font-medium mx-4 mb-1">/</span>
            </div>
          </Marquee>
        </section>

        {/* Prizes */}
        <Container>
          <LyPrizes />

          {/* Facilitators */}
          <LyFacilitators />

          {/* Community Partners */}
          <LyCommunityPartners />

          {/* Strategic Partners */}
          <section className="flex flex-col px-0 sm:px-4 mb-[88px]">
            <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[795px]">
              <h2 className="text-white font-w3w-bold text-xl sm:text-[32px] leading-[30px] sm:leading-[48px] uppercase">
                STRATEGIC PARTNERS
              </h2>
            </div>
            <div className="flex flex-col relative">
              <div className="inline-flex flex-wrap items-center justify-start gap-y-0 w-full mt-8">
                <PostLink
                  typePost="blank-link"
                  url="https://www.coindesk.com/"
                  className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full grayscale hocus:grayscale-0 transition duration-300 ease-in-out"
                >
                  <Image
                    className="my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[138px] lg:max-h-max w-auto"
                    src={`${publicRuntimeConfig.staticFolderImgs}/partner/strategic-partners/coindesk-indonesia.svg`}
                    alt={`${publicRuntimeConfig.appName} (Coindesk Indonesia Strategic - Brand Partner)`}
                    sizes="(min-width: 1874px) 246vw,
                      (min-width: 1536px) 257vw,
                      (min-width: 1280px) 313vw,
                      (min-width: 1024px) 395vw,
                      (min-width: 640px) 931vw,
                      1905vw"
                    height={140}
                    width={220}
                    quality="87"
                  />
                </PostLink>
                <PostLink
                  typePost="blank-link"
                  url="https://coinvestasi.com/"
                  className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full grayscale hocus:grayscale-0 transition duration-300 ease-in-out"
                >
                  <Image
                    className="my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[138px] lg:max-h-max w-auto"
                    src={`${publicRuntimeConfig.staticFolderImgs}/partner/strategic-partners/coinvestasi.svg`}
                    alt={`${publicRuntimeConfig.appName} (Coinvestasi Strategic - Brand Partner)`}
                    sizes="(min-width: 1874px) 246vw,
                      (min-width: 1536px) 257vw,
                      (min-width: 1280px) 313vw,
                      (min-width: 1024px) 395vw,
                      (min-width: 640px) 931vw,
                      1905vw"
                    height={140}
                    width={220}
                    quality="87"
                  />
                </PostLink>
                <PostLink
                  typePost="blank-link"
                  url="https://indonesiacrypto.network/"
                  className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full grayscale hocus:grayscale-0 transition duration-300 ease-in-out"
                >
                  <Image
                    className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[138px] lg:max-h-max w-auto"
                    src={`${publicRuntimeConfig.staticFolderImgs}/partner/strategic-partners/indonesia-crypto-network.svg`}
                    alt={`${publicRuntimeConfig.appName} (Indonesia Crypto Network Strategic - Brand Partner)`}
                    sizes="(min-width: 1874px) 246vw,
                    (min-width: 1536px) 257vw,
                    (min-width: 1280px) 313vw,
                    (min-width: 1024px) 395vw,
                    (min-width: 640px) 631vw,
                    1205vw"
                    height={140}
                    width={220}
                    quality="87"
                  />
                </PostLink>
                <PostLink
                  typePost="blank-link"
                  url="https://coinfest.asia/"
                  className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full grayscale hocus:grayscale-0 transition duration-300 ease-in-out"
                >
                  <Image
                    className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[138px] lg:max-h-max w-auto"
                    src={`${publicRuntimeConfig.staticFolderImgs}/partner/strategic-partners/coinfest-asia.svg`}
                    alt={`${publicRuntimeConfig.appName} (Coinfest Asia Strategic - Brand Partner)`}
                    sizes="(min-width: 1874px) 246vw,
                    (min-width: 1536px) 257vw,
                    (min-width: 1280px) 313vw,
                    (min-width: 1024px) 395vw,
                    (min-width: 640px) 631vw,
                    1205vw"
                    height={140}
                    width={220}
                    quality="87"
                  />
                </PostLink>
              </div>
            </div>
          </section>

          {/* Co-Hosted By */}
          <LyCoHosted />

          {/* Banner (Join The Builders) */}
          <section
            className={`${Card.bnnerIn} relative mx-0 sm:mx-4 mb-10 sm:mb-18 lg:mb-24`}
          >
            <div className="overflow-hidden absolute inset-y-0 inset-x-0 z-[2]">
              <div className="absolute inset-y-0 inset-x-0 z-[2]">
                <Image
                  className="bg-center object-cover h-full w-full"
                  src={`${publicRuntimeConfig.staticFolderImgs}/backdrop/gridlanes-backdrop.svg`}
                  alt={`${publicRuntimeConfig.appName} (Gridlines - Backdrop)`}
                  height={757}
                  width={1320}
                />
              </div>
            </div>

            <div className="bnner-in-content supports-grid:grid gap-y-3 sm:gap-y-4 relative z-50">
              <h1 className="title text-otlne text-otlne-white font-w3w-bold text-[17px] sm:text-[39px] lg:text-[49px] xl:text-[72px] 2xl:text-[76px] font-bold leading-tight tracking-[3px] sm:tracking-normal text-center uppercase">
                JOIN THE BUILDERS!
              </h1>
              <div className="mx-auto w-max">
                <Buttons
                  typeBtn="btn-blank-link"
                  url="https://bit.ly/w3wregistration"
                  label="PARTICIPATE NOW"
                  variants="btn-outline-white"
                  size="base"
                  text="uppercase"
                  position="center"
                />
              </div>
            </div>
          </section>
        </Container>
      </Main>
    </>
  );
};

export default Home;

// Version 0.3.1
