import getConfig from "next/config";
import dynamic from "next/dynamic";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Ui - Components
const Head = dynamic(() => import("@components/Head"));
const Container = dynamic(() => import("@components/Container"));
const Main = dynamic(() => import("@components/Main"));
const Banner = dynamic(() => import("@components/UI/Card/Banner"));

// Layouts
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
        {/* Banner (Description) */}
        <Banner
          id="bnnerDesc"
          title="3 Cities, 3 weeks, 1 Career Changing Event: WEB3 WEEKEND."
          description="BRINGING TOGETHER DEVELOPERS, FOUNDERS, STUDENTS, AND COMMUNITY BUILDERS FOCUSED ON BUILDING THE FUTURE OF WEB3."
        />

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
        </Container>
      </Main>
    </>
  );
};

export default Home;
