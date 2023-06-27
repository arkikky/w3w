import React, { useState } from "react";
import { Element } from "react-scroll";
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
import LyTopProjects from "@layouts/TopProjects";
import LyPitchingTopics from "@layouts/PitchingTopics";
import LyCommunityKickOff from "@layouts/CommunityKickOff";
import LyPrizes from "@layouts/Prizes";
import LyFacilitators from "@layouts/Facilitators";
import LySponsor from "@layouts/Sponsor";
import LyVenuePartner from "@layouts/VenuePartner";
import LyCommunityPartners from "@layouts/CommunityPartners";
import LyCoHosted from "@layouts/Co-Hosted";

const Home = () => {
  // const gtDtaYears = dayjs().format("mm");
  return (
    <>
      {/* Head (Home) */}
      <Head>
        <title>W3W | Web3 Weekend Asia 2023</title>
        <meta name="title" content="W3W | Web3 Weekend 2023" />
        <meta
          name="description"
          content="W3W is an online web3 innovation competition co-hosted by Coinvestasi and Blockdev.id. Turn your ideas into reality!"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coinfest.asia/" />
        <meta property="og:title" content="W3W | Web3 Weekend 2023" />
        <meta
          property="og:description"
          content="W3W is an online web3 innovation competition co-hosted by Coinvestasi and Blockdev.id. Turn your ideas into reality!"
        />
        <meta
          property="og:image"
          content="/assets/thumbnail-share/app-thumbnail-share.jpg"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://coinfest.asia/" />
        <meta property="twitter:title" content="W3W | Web3 Weekend 2023" />
        <meta
          property="twitter:description"
          content="W3W is an online web3 innovation competition co-hosted by Coinvestasi and Blockdev.id. Turn your ideas into reality!"
        />
        <meta
          property="twitter:image"
          content="/assets/thumbnail-share/app-thumbnail-share.jpg"
        />
      </Head>

      <Main className="relative">
        <div className="absolute top-0 bottom-auto inset-x-0 h-full max-h-[425px] sm:max-h-[529px] lg:max-h-[701px] xl:max-h-[755px] 2xl:max-h-[887px] -z-px">
          <Image
            className="object-cover xl:object-fill block relative h-full w-full"
            src={`${publicRuntimeConfig.staticFolderImgs}/backdrop/gridlanes-3d-header.svg`}
            alt={`${publicRuntimeConfig.appName} (Header Backdrop)`}
            height={2234}
            width={1314}
          />
        </div>
        <Element id="about" className="overflow-hidden relative" name="about">
          <Container>
            <Header />
          </Container>
        </Element>

        <Container>
          <section className="bg-[#282828] overflow-hidden mt-18 mb-24 mx-2">
            <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-2 sm:gap-y-6 gap-x-6 py-6">
              <div className="col-span-full sm:col-span-4 lg:col-span-6 xl:col-span-3 py-3 px-3">
                <div className="flex flex-row">
                  <div className="bg-primary/10 flex flex-col items-center justify-center border border-solid border-primary h-15 py-2 px-2 w-15 min-w-[56px] max-w-[56px]">
                    <Image
                      className="block relative h-8 w-8"
                      src={`${publicRuntimeConfig.staticFolderImgs}/why-participate/projects.svg`}
                      alt={`${publicRuntimeConfig.appName} (Why Participate)`}
                      height={34}
                      width={34}
                    />
                  </div>
                  <div className="flex flex-col ml-4">
                    <h3 className="text-primary font-fira-code text-xl font-bold uppercase">
                      160+
                    </h3>
                    <p className="text-white font-fira-code text-base font-normal uppercase mt-1">
                      Projects
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-full sm:col-span-4 lg:col-span-6 xl:col-span-3 py-3 px-3">
                <div className="flex flex-row">
                  <div className="bg-primary/10 flex flex-col items-center justify-center border border-solid border-primary h-15 py-2 px-2 w-15 min-w-[56px] max-w-[56px]">
                    <Image
                      className="block relative h-8 w-8"
                      src={`${publicRuntimeConfig.staticFolderImgs}/why-participate/developers.svg`}
                      alt={`${publicRuntimeConfig.appName} (Why Participate)`}
                      height={34}
                      width={34}
                    />
                  </div>
                  <div className="flex flex-col ml-4">
                    <h3 className="text-primary font-fira-code text-xl font-bold uppercase">
                      25+
                    </h3>
                    <p className="text-white font-fira-code text-base font-normal uppercase mt-1">
                      Developers
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-full sm:col-span-4 lg:col-span-6 xl:col-span-3 py-3 px-3">
                <div className="flex flex-row">
                  <div className="bg-primary/10 flex flex-col items-center justify-center border border-solid border-primary h-15 py-2 px-2 w-15 min-w-[56px] max-w-[56px]">
                    <Image
                      className="block relative h-8 w-8"
                      src={`${publicRuntimeConfig.staticFolderImgs}/why-participate/facilitator.svg`}
                      alt={`${publicRuntimeConfig.appName} (Why Participate)`}
                      height={34}
                      width={34}
                    />
                  </div>
                  <div className="flex flex-col ml-4">
                    <h3 className="text-primary font-fira-code text-xl font-bold uppercase">
                      15+
                    </h3>
                    <p className="text-white font-fira-code text-base font-normal uppercase mt-1">
                      Facilitators
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-full sm:col-span-4 lg:col-span-6 xl:col-span-3 py-3 px-3">
                <div className="flex flex-row">
                  <div className="bg-primary/10 flex flex-col items-center justify-center border border-solid border-primary h-15 py-2 px-2 w-15 min-w-[56px] max-w-[56px]">
                    <Image
                      className="block relative h-8 w-8"
                      src={`${publicRuntimeConfig.staticFolderImgs}/why-participate/trophy.svg`}
                      alt={`${publicRuntimeConfig.appName} (Why Participate)`}
                      height={34}
                      width={34}
                    />
                  </div>
                  <div className="flex flex-col ml-4">
                    <h3 className="text-primary font-fira-code text-xl font-bold uppercase">
                      rp. 50m+
                    </h3>
                    <p className="text-white font-fira-code text-base font-normal uppercase mt-1">
                      Total prizes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Top Projects */}
          <LyTopProjects />
        </Container>

        <div
          id="higlights"
          className="bg-[#7F3FF0] mt-[66px] mb-[102px] pt-6 sm:pt-10 pb-6 sm:pb-[78px]"
        >
          <Container>
            <div className="px-4">
              <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[795px]">
                <h2 className="text-white font-w3w-bold text-xl sm:text-[32px] leading-[30px] sm:leading-[48px] uppercase">
                  Higlights
                </h2>
              </div>
              <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 sm:gap-y-6 gap-x-4 sm:gap-x-6 mt-6">
                <div className="col-span-2 sm:col-span-4 lg:col-span-6 xl:col-span-3 order-5 xl:order-none">
                  <div className="h-[181px] sm:h-[346px]">
                    <Image
                      className="object-cover bg-center h-full w-full z-0.5"
                      src={`${publicRuntimeConfig.staticFolderImgs}/highlight/highlight-1.jpg`}
                      alt={`${publicRuntimeConfig.appName} (Highlight 1 - Highlight)`}
                      height={855}
                      width={1025}
                    />
                  </div>
                </div>
                <div className="col-span-full xl:col-span-6">
                  <div className="h-[200px] sm:h-[346px] lg:h-[453px] xl:h-[346px]">
                    {/* <Image
                      className="object-cover bg-center h-full w-full z-0.5"
                      src={`${publicRuntimeConfig.staticFolderImgs}/highlight/highlight-2.jpg`}
                      alt={`${publicRuntimeConfig.appName} (Highlight 2 - Highlight)`}
                      height={855}
                      width={1025}
                    /> */}
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/go-Jvebtb30"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-4 lg:col-span-6 xl:col-span-3">
                  <div className="h-[181px] sm:h-[346px]">
                    <Image
                      className="object-cover bg-center h-full w-full z-0.5"
                      src={`${publicRuntimeConfig.staticFolderImgs}/highlight/highlight-3.jpg`}
                      alt={`${publicRuntimeConfig.appName} (Highlight 3 - Highlight)`}
                      height={855}
                      width={1025}
                    />
                  </div>
                </div>
                <div className="col-span-full xl:col-span-6 order-1 xl:order-none">
                  <div className="h-[181px] sm:h-[346px] lg:h-[453px] xl:h-[346px]">
                    <Image
                      className="object-cover bg-center h-full w-full z-0.5"
                      src={`${publicRuntimeConfig.staticFolderImgs}/highlight/highlight-4.jpg`}
                      alt={`${publicRuntimeConfig.appName} (Highlight 4 - Highlight)`}
                      height={855}
                      width={1025}
                    />
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-4 lg:col-span-6 xl:col-span-3 order-3 xl:order-none">
                  <div className="h-[181px] sm:h-[346px]">
                    <Image
                      className="object-cover bg-center h-full w-full z-0.5"
                      src={`${publicRuntimeConfig.staticFolderImgs}/highlight/highlight-5.jpg`}
                      alt={`${publicRuntimeConfig.appName} (Highlight 5 - Highlight)`}
                      height={855}
                      width={1025}
                    />
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-4 lg:col-span-6 xl:col-span-3">
                  <div className="h-[181px] sm:h-[346px]">
                    <Image
                      className="object-cover bg-center h-full w-full z-0.5"
                      src={`${publicRuntimeConfig.staticFolderImgs}/highlight/highlight-6.jpg`}
                      alt={`${publicRuntimeConfig.appName} (Highlight 6 - Highlight)`}
                      height={855}
                      width={1025}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          {/* Facilitators */}
          <div className="my-[102px]">
            <LyFacilitators />
          </div>

          <div id="partner">
            {/* Sponsor */}
            <LySponsor />

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
                    url="https://coindesk.com/"
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
          </div>

          {/* Banner (Join The Builders) */}
          {/* <section
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
                GET NOTIFIED
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
          </section> */}
        </Container>
      </Main>
    </>
  );
};

export default Home;

// Version 1.19
