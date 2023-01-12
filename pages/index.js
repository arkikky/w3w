import getConfig from "next/config";
import Marquee from "react-fast-marquee";
import dynamic from "next/dynamic";
import Image from "next/image";

// Css
import Card from "@styles/components/Card.module.css";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Ui - Components
const Head = dynamic(() => import("@components/Head"));
const Container = dynamic(() => import("@components/Container"));
const Main = dynamic(() => import("@components/Main"));
const Banner = dynamic(() => import("@components/UI/Card/Banner"));
const Buttons = dynamic(() => import("@components/UI/Buttons"));

// Layouts
const Header = dynamic(() => import("@layouts/Header"));
const Roadshow = dynamic(() => import("@layouts/Roadshow"));
import Timeline from "@layouts/Timeline";
const Schedule = dynamic(() => import("@layouts/Schedule"));
const MentorsSpeaker = dynamic(() => import("@layouts/MentorsSpeaker"));
const Sponsor = dynamic(() => import("@layouts/Sponsor"));
const MediaPartner = dynamic(() => import("@layouts/MediaPartner"));
const FromCreator = dynamic(() => import("@layouts/FromCreator"));

const Home = () => {
  return (
    <>
      <Head
        siteTitle="W3W | Web 3 Week"
        title="Web 3 Week"
        siteDescription="Web 3 Week (W3W), Builders convention focused on web3"
        description="Web 3 Week (W3W), Builders convention focused on web3"
      />

      {/* Main (Home) */}
      <Main>
        <Container>
          {/* Header */}
          <Header />

          <section id="whatbethere">
            {/* Roadshow */}
            <Roadshow />

            {/* Timeline */}
            <Timeline />
          </section>
        </Container>

        {/* Banner (Description) */}
        <Banner
          id="bnnerDesc"
          title="3 Cities, 1 week, 1 Career Changing Event: WEB3 WEEKEND."
          description="BRINGING TOGETHER DEVELOPERS, FOUNDERS, STUDENTS, AND COMMUNITY BUILDERS FOCUSED ON BUILDING THE FUTURE OF WEB3."
        />

        {/* Banner (Marquee) */}
        <section
          id="bnnerMarquee"
          className={`${Card.bnnerMarque} bg-gradient-purple flex flex-col overflow-hidden relative py-14 sm:py-16 lg:py-[88px] z-50`}
        >
          <div className="overflow-hidden absolute inset-y-0 inset-x-0 z-[2]">
            <div className="absolute inset-y-0 inset-x-0 z-[2]">
              <Image
                className="img-cover"
                src={`${publicRuntimeConfig.staticFolder}/backdrop/backdrop-gridlines-3d.svg`}
                alt={`${publicRuntimeConfig.appName} (Backdrop Gridlines 3D)`}
                height={557}
                width={1120}
                priority
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
          </Marquee>
        </section>

        <Container className="flex flex-col">
          {/* Schedule */}
          <Schedule />

          {/* Mentors Speaker */}
          <MentorsSpeaker />

          {/* Sponsor */}
          <Sponsor />

          {/* Media Partner */}
          <MediaPartner />

          {/* From Creator */}
          <FromCreator />

          {/* Banner (Join The Builders) */}
          <section
            className={`${Card.bnnerIn} relative mx-0 sm:mx-4 mb-10 sm:mb-18 lg:mb-28`}
          >
            <div className="overflow-hidden absolute inset-y-0 inset-x-0 z-[2]">
              <div className="absolute inset-y-0 inset-x-0 z-[2]">
                <Image
                  className="img-cover"
                  src={`${publicRuntimeConfig.staticFolder}/backdrop/backdrop-gridlines-3d.svg`}
                  alt={`${publicRuntimeConfig.appName} (Backdrop Gridlines 3D)`}
                  height={557}
                  width={1120}
                  priority
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
                  url="https://e7bao9msf39.typeform.com/web3week"
                  label="START BUILDING NOW"
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
