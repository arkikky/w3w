import Head from "next/head";
import Image from "next/legacy/image";

// Css
import Card from "../styles/components/Card.module.css";

// Ui
import ButtonsOpenLink from "/components/ui/buttons/ButtonsOpenLink";

// Sections
import Navbar from "/components/Navbar";
import Header from "/components/Header";
import RoadshowIn from "/components/layouts/RoadshowIn";
import Timelines from "/components/layouts/Timelines";
import BnnerFollowUp from "/components/layouts/banner/FollowUp";
import Ticket from "/components/layouts/Ticket";
import Schedule from "/components/layouts/Schedule";
import SpeakerMentors from "/components/layouts/SpeakerMentors";
import Sponsor from "/components/layouts/Sponsor";
import MediaPartner from "/components/layouts/MediaPartner";
import FromCreators from "/components/layouts/FromCreators";

export default function Home() {
  return (
    <>
      <Head>
        <title>W3W | Web 3 Week</title>
        <meta name="title" content="Web 3 Week" />
        <meta
          name="description"
          content="Web 3 Week (W3W), Builders convention focused on web3"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://w3w.netlify.app/" />
        <meta
          property="og:title"
          content="Builders Convention Focused on Web3"
        />
        <meta
          property="og:description"
          content="Builders Convention Focused on Web3"
        />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://w3w.netlify.app/" />
        <meta
          property="twitter:title"
          content="Builders Convention Focused on Web3"
        />
        <meta
          property="twitter:description"
          content="Builders Convention Focused on Web3"
        />
        <meta property="twitter:image" content="" />
      </Head>

      {/* Navbar */}
      <Navbar></Navbar>

      <main className="relative">
        <div className="overflow-hidden relative z-50">
          {/* Header */}
          <Header></Header>

          <div id="whatbethere" className="container mt-2.5 lg:-mt-1.5 mb-20 sm:mb-0">
            {/* Roadshow In */}
            <RoadshowIn></RoadshowIn>

            {/* Timelines */}
            <Timelines></Timelines>
          </div>

          {/* Banner (Follow Up) */}
          <BnnerFollowUp
            id="AdsBnnerFlowUp"
            title="3 Countries, 3 weeks, 1 Career Changing Event: Web3 week."
            desc="BRINGING TOGETHER DEVELOPERS, FOUNDERS, AND COMMUNITY BUILDERS FOCUSED ON BUILDING THE FUTURE OF WEB3."
          ></BnnerFollowUp>

          <div className="container px-4">
            {/* Ticket */}
            <Ticket></Ticket>
          </div>

          {/* Banner (Marquee) */}
          <section
            id="AdsBnnerMarque"
            className={
              Card.bnnerMarque +
              " flex flex-col overflow-hidden relative mb-18 sm:mb-28 py-14 sm:py-16 lg:py-[88px]"
            }
          >
            <div className="absolute inset-y-0 inset-x-0 -mt-12 z-[2]">
              <div className="relative h-full w-full">
                <Image
                  alt="W3W (Backdrop Gridlines 3D)"
                  src="/assets/images/backdrop/backdrop-gridlines-3d.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div
              className={
                Card.bnnerMarqueContent +
                " inline-flex flex-row text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold uppercase z-[12]"
              }
            >
              <div className="flex flex-row items-center whitespace-nowrap">
                <span>WEB3</span>
                <span className="font-medium mx-2">/</span>
                <span>Infrastructure Blockchain</span>
                <span className="font-medium mx-2">/</span>
                <span>Blockchain</span>
                <span className="font-medium mx-2">/</span>
                <span>NFT</span>
                <span className="font-medium mx-2">/</span>
                <span>Metaverse</span>
                <span className="font-medium mx-2">/</span>
                <span>Defi</span>
                <span className="font-medium mx-2">/</span>
                <span>Dao</span>
                <span className="font-medium mx-2">/</span>
              </div>
              <div className="flex flex-row items-center whitespace-nowrap">
                <span>WEB3</span>
                <span className="font-medium mx-2">/</span>
                <span>Infrastructure Blockchain</span>
                <span className="font-medium mx-2">/</span>
                <span>Blockchain</span>
                <span className="font-medium mx-2">/</span>
                <span>NFT</span>
                <span className="font-medium mx-2">/</span>
                <span>Metaverse</span>
                <span className="font-medium mx-2">/</span>
                <span>Defi</span>
                <span className="font-medium mx-2">/</span>
                <span>Dao</span>
                <span className="font-medium mx-2">/</span>
              </div>
              <div className="flex flex-row items-center whitespace-nowrap">
                <span>WEB3</span>
                <span className="font-medium mx-2">/</span>
                <span>Infrastructure Blockchain</span>
                <span className="font-medium mx-2">/</span>
                <span>Blockchain</span>
                <span className="font-medium mx-2">/</span>
                <span>NFT</span>
                <span className="font-medium mx-2">/</span>
                <span>Metaverse</span>
                <span className="font-medium mx-2">/</span>
                <span>Defi</span>
                <span className="font-medium mx-2">/</span>
                <span>Dao</span>
                <span className="font-medium mx-2">/</span>
              </div>
            </div>
          </section>

          <div className="container">
            {/* Schedule */}
            <Schedule></Schedule>

            {/* Speakers and Mentors */}
            <SpeakerMentors></SpeakerMentors>

            {/* Sponsor */}
            <Sponsor></Sponsor>

            {/* Media Partners */}
            <MediaPartner></MediaPartner>

            {/* From The Creators Of */}
            <FromCreators></FromCreators>

            {/* Banner (See You There) */}
            <section
              className={
                Card.bnnerIn + " relative mx-0 sm:mx-4 mb-10 sm:mb-18 lg:mb-28"
              }
            >
              <div className="overflow-hidden absolute inset-y-0 inset-x-0 z-[2]">
                <div className="absolute inset-y-0 inset-x-0 -mt-12 z-[2]">
                  <div className="relative h-full w-full">
                    <Image
                      alt="W3W (Backdrop Gridlines 3D)"
                      src="/assets/images/backdrop/backdrop-gridlines-3d.svg"
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="bnner-in-content grid gap-y-3 sm:gap-y-4 relative z-50">
                <h1 className="title text-otlne text-otlne-white font-w3w-bold text-[17px] sm:text-[39px] lg:text-[49px] xl:text-[73px] 2xl:text-[77px] font-bold leading-tight tracking-[3px] sm:tracking-normal text-center uppercase">
                  JOIN THE BUILDERS!
                </h1>
                <ButtonsOpenLink
                  url="https://e7bao9msf39.typeform.com/web3week"
                  label="START BUILDING NOW"
                  type="btn-outline-white"
                  center
                ></ButtonsOpenLink>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
