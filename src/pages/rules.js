import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import Card from "@styles/components/Card.module.css";
import Disclsre from "@styles/components/Disclosure.module.css";

// Ui - Components
import Main from "@components/Main";
import Container from "@components/Container";
import ImagesFill from "@components/UI/ImagesFill";
import Buttons from "@components/UI/Buttons";

const Rules = () => {
  return (
    <>
      {/* Head (Rules) */}
      <Head>
        <title>Rules - W3W | Web3 Weekend 2023</title>
        <meta name="title" content="Rules - W3W | Web3 Weekend 2023" />
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

      <Main className="relative mt-[92px] sm:mt-[129px] lg:mt-[164px]">
        <div className="overflow-hidden relative">
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
        </div>

        <Container>
          <section className="px-2 sm:px-0 mb-28">
            <div className="text-center">
              <h1 className="text-white font-w3w-bold text-xl sm:text-[32px] leading-[30px] sm:leading-[48px] uppercase">
                RULES
              </h1>
            </div>
            <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-6 mt-8">
              <div className="col-start-1 sm:col-start-2 lg:col-start-3 col-span-full sm:col-span-6 lg:col-span-8">
                <div className="flex flex-col gap-y-4">
                  <Disclosure
                    as="div"
                    defaultOpen="true"
                    className={`${Disclsre.disclosure}`}
                  >
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`${
                            Disclsre.disclosureHding
                          } disclosureIcons ${open ? "active" : "hide"}`}
                        >
                          Eligibility
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-300 ease-in-out"
                          enterFrom="transform opacity-0"
                          enterTo="transform opacity-100"
                          leave="transition duration-100 ease-in-out"
                          leaveFrom="transform opacity-100"
                          leaveTo="transform opacity-0"
                        >
                          <Disclosure.Panel
                            className={`${Disclsre.disclosureDesc}`}
                          >
                            <ul>
                              <li>
                                Attendees from all backgrounds, genders, and all
                                cities across Indonesia are welcome.
                              </li>
                              <li>
                                To participate in the event, attendees must
                                either be 18 years of age or older, or possess a
                                national ID.
                              </li>
                              <li>
                                Committee members are not eligible to
                                participate in the event.
                              </li>
                              <li>
                                Winners are responsible for paying any taxes on
                                the prize winnings.
                              </li>
                            </ul>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className={`${Disclsre.disclosure}`}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`${
                            Disclsre.disclosureHding
                          } disclosureIcons ${open ? "active" : "hide"}`}
                        >
                          Rules of Competition
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-300 ease-in-out"
                          enterFrom="transform opacity-0"
                          enterTo="transform opacity-100"
                          leave="transition duration-100 ease-in-out"
                          leaveFrom="transform opacity-100"
                          leaveTo="transform opacity-0"
                        >
                          <Disclosure.Panel
                            className={`${Disclsre.disclosureDesc}`}
                          >
                            <ul>
                              <li>
                                Teams can consist of at least 1 (one) person to
                                a maximum of 5 (five) members.
                              </li>
                              <li>
                                Teams can use an idea they had before the event.
                                however, it should not have been previously
                                submitted to other competitions before.
                              </li>
                              <li>
                                Adding new features to existing projects is
                                allowed. Judges will only consider new
                                functionality introduced or new features added
                                in the project in determining the winners.
                              </li>
                              <li>
                                Teams can use libraries, frameworks, or
                                open-source code in their projects. Working on a
                                project before the event and open-sourcing it
                                for the sole purpose of using the code during
                                the event is against the spirit of the rules and
                                is not allowed.
                              </li>
                              <li>
                                We do not tolerate harassment of participants in
                                any form. Action or ideas that contents any
                                violation of this rule will automatically be
                                disqualified.
                              </li>
                              <li>
                                Teams can be disqualified from the competition
                                at the organizers’ discretion.
                              </li>
                              <li>
                                You are encouraged to present what you have done
                                even if your code is broken or you weren’t able
                                to finish.
                              </li>
                              <li>
                                The copyright for each Ideas that are submitted
                                to this event remains with the respective team,
                                any misuse or infringement of copyright will be
                                solely the responsibility of the participant.
                              </li>
                              <li>
                                To participate in the demo day, applicants must
                                first submit a pitch deck. The committee and
                                coaches will review the submissions and select
                                50 participants who will then need to submit a
                                presentation video. From the videos, the final
                                30 participants will be chosen to attend the
                                coaching session.
                              </li>
                            </ul>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className={`${Disclsre.disclosure}`}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`${
                            Disclsre.disclosureHding
                          } disclosureIcons ${open ? "active" : "hide"}`}
                        >
                          Submission Requirements
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-300 ease-in-out"
                          enterFrom="transform opacity-0"
                          enterTo="transform opacity-100"
                          leave="transition duration-100 ease-in-out"
                          leaveFrom="transform opacity-100"
                          leaveTo="transform opacity-0"
                        >
                          <Disclosure.Panel
                            className={`${Disclsre.disclosureDesc}`}
                          >
                            <ul>
                              <li>
                                All participants should have filled up the
                                registration form:{" "}
                                <a href="https://bit.ly/w3wregistration">
                                  here
                                </a>
                                , at the submission closing day, 23.59pm (GMT+7)
                                at the latest.
                              </li>
                              <li>
                                The submission must be related to web3
                                technologies. It could be anything about:
                                decentralized finance (DeFi), non-fungible
                                tokens (NFTs), Web3 Gaming, DAO, SocialFi,
                                Metaverse, Social or Environmental impact, or
                                Analytic.
                              </li>
                              <li>
                                Participants are allowed to submit more than one
                                application as long as each application has a
                                different theme and there are no restrictions on
                                the tools used to create the applications.
                              </li>
                              <li>
                                The project submission deck should provide a
                                clear and concise description of:
                                <ul>
                                  <li>The problem statement</li>
                                  <li>The proposed solution</li>
                                  <li>Target market and potential users</li>
                                  <li>Business model</li>
                                  <li>Implementation plan</li>
                                  <li>
                                    Brief demo or prototype of the project (if
                                    possible)
                                  </li>
                                  <li>Information on the team members</li>
                                </ul>
                              </li>
                              <li>
                                Pitches should be clear, concise, and
                                well-rehearsed to effectively communicate the
                                project's goals and objectives.
                              </li>
                              <li>
                                Each team will have a maximum of 10 minutes to
                                pitch their project to the judges, followed by a
                                5 minute Q&A session from the judges.
                                Participants must respect the time limits and
                                not exceed their allotted time.
                              </li>
                              <li>
                                Visual aids such as demo videos are allowed, but
                                must not take up more than half of the pitch
                                time.
                              </li>
                              <li>
                                Teams are encouraged to dress professionally and
                                present themselves in a manner.
                              </li>
                            </ul>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className={`${Disclsre.disclosure}`}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`${
                            Disclsre.disclosureHding
                          } disclosureIcons ${open ? "active" : "hide"}`}
                        >
                          Judging Criteria
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-300 ease-in-out"
                          enterFrom="transform opacity-0"
                          enterTo="transform opacity-100"
                          leave="transition duration-100 ease-in-out"
                          leaveFrom="transform opacity-100"
                          leaveTo="transform opacity-0"
                        >
                          <Disclosure.Panel
                            className={`${Disclsre.disclosureDesc}`}
                          >
                            <ul>
                              <li>
                                <h4>
                                  <strong>Technical Aspect</strong>
                                </h4>
                                <p>
                                  Was the technical problem the team tackled
                                  difficult? Did it use a particularly clever
                                  technique or did it use many different
                                  components?
                                </p>
                              </li>
                              <li>
                                <h4>
                                  <strong>Innovative Solution</strong>
                                </h4>
                                <p>
                                  How creative or original is the project idea?
                                  does it have the potential to disrupt or
                                  significantly improve an industry or process?
                                </p>
                              </li>
                              <li>
                                <h4>
                                  <strong>Problem relevance</strong>
                                </h4>
                                <p>
                                  How significant and urgent the problem that
                                  the your idea aim to solve? How well it solves
                                  a problem? how well can it be implemented?
                                </p>
                              </li>
                              <li>
                                <h4>
                                  <strong>Completion</strong>
                                </h4>
                                <p>
                                  Is the team able to effectively execute their
                                  idea and deliver the presentation within the
                                  given constraints of the competition?
                                </p>
                              </li>
                              <li>
                                <h4>
                                  <strong>Presentation</strong>
                                </h4>
                                <p>
                                  How effectively the team communicates their
                                  idea and demonstrates their solution to the
                                  judges and audience?
                                </p>
                              </li>
                              <li>
                                <h4>
                                  <strong>Design</strong>
                                </h4>
                                <p>
                                  Did the team put thought into the user
                                  experience? How well designed is the
                                  interface?
                                </p>
                              </li>
                            </ul>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          </section>

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

export default Rules;
