import React, { useState, Suspense } from "react";
import { Link } from "react-scroll";
import dayjs from "dayjs";
import getConfig from "next/config";
import dynamic from "next/dynamic";
import Image from "next/image";
// import Link from "next/link";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import Footr from "@styles/layouts/Footer.module.css";

// Ui - Components
const Container = dynamic(() => import("@components/Container"));
const Post = dynamic(() => import("@components/UI/Post/Post"));
const PostLink = dynamic(() => import("@components/UI/Post/PostLink"));

// Json
import mockSocMdiaFootr from "@json/socialMedia.json";

const Footer = () => {
  const [intSocMdia, stSocMedia] = useState(mockSocMdiaFootr);

  const gtDtaYears = dayjs().format("YYYY");

  const [gtYears, stYears] = useState(gtDtaYears);

  return (
    <>
      {/* Footer */}
      <footer id="footrMain">
        <Container>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-4">
            <div className="flex flex-col max-w-full sm:max-w-[345px]">
              <Image
                className="flex relative h-6 sm:h-8 w-auto max-w-max"
                src={`${publicRuntimeConfig.staticFolder}/w3w.svg`}
                alt={`${publicRuntimeConfig.appName} (LOGO)`}
                height={32}
                width={105}
                placeholder="blur"
                blurDataURL={`${publicRuntimeConfig.blurData}`}
              />
              <p className="text-white font-fira-code text-sm font-normal text-left uppercase mt-6">
                All rights reserved. WEB3weekend is organized by Coinvestasi, a
                subsidiary of Indonesia Crypto Network.
              </p>
            </div>
            <div className="inline-flex flex-row flex-wrap mt-12 xl:mt-0">
              <div
                id="footrW3W"
                className={`${Footr.footrGroupMnu} flex-none sm:flex-1 mr-12 last:mr-0 w-full sm:w-max min-w-max`}
              >
                <h1 className="ftoor-heading text-white text-base font-semibold tracking-tight uppercase">
                  W3W
                </h1>
                <ul className="menu mt-2">
                  <li className="menu-item">
                    <Link
                      className="menu-link"
                      href="about"
                      activeClass="active"
                      to="about"
                      smooth={"easeInOutQuart"}
                      offset={-149}
                      duration={300}
                    >
                      About
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="menu-link"
                      href="place"
                      activeClass="active"
                      to="place"
                      spy={true}
                      hashSpy={true}
                      smooth={"easeInOutQuart"}
                      offset={-135}
                      duration={300}
                    >
                      Place
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="menu-link"
                      href="tickets"
                      activeClass="active"
                      to="tickets"
                      spy={true}
                      hashSpy={true}
                      smooth={"easeInOutQuart"}
                      offset={-25}
                      duration={300}
                    >
                      Tickets
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="menu-link"
                      href="schedule"
                      activeClass="active"
                      to="schedule"
                      spy={true}
                      hashSpy={true}
                      smooth={"easeInOutQuart"}
                      offset={-135}
                      duration={300}
                    >
                      Schedules
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                id="footrW3W"
                className={`${Footr.footrGroupMnu} flex-none sm:flex-1 mr-12 last:mr-0 w-full sm:w-max min-w-max`}
              >
                <h1 className="ftoor-heading text-white text-base font-semibold tracking-tight uppercase">
                  Contribute
                </h1>
                <ul className="menu mt-2">
                  <Post
                    typePost="link"
                    className="menu-item"
                    url=""
                    title="Sponsorship"
                  />
                  <Post
                    typePost="link"
                    className="menu-item"
                    url=""
                    title="Media partners"
                  />
                  <Post
                    typePost="link"
                    className="menu-item"
                    url=""
                    title="Mentors"
                  />
                </ul>
              </div>
              <div
                id="footrW3W"
                className={`${Footr.footrGroupMnu} flex-none sm:flex-1 mr-12 last:mr-0 w-full sm:w-max min-w-max`}
              >
                <h1 className="ftoor-heading text-white text-base font-semibold tracking-tight uppercase">
                  Further more
                </h1>
                <ul className="menu mt-2">
                  <Post
                    typePost="link"
                    className="menu-item"
                    url=""
                    title="Privacy policy"
                  />
                  <Post
                    typePost="link"
                    className="menu-item"
                    url=""
                    title="terms and conditions"
                  />
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-solid border-black-50 py-4 mt-10 mx-4">
            <span className="text-white font-fira-code text-sm font-normal mt-4 lg:mt-0">
              ©{gtYears}
            </span>

            {intSocMdia && (
              <ul className="flex flex-wrap list-none mt-4 sm:mt-0 mx-0 w-max">
                {intSocMdia?.map((dtScMedia) => (
                  <li
                    key={dtScMedia.id}
                    className="leading-[0] relative mr-4 last:mr-0"
                  >
                    <Suspense fallback={null}>
                      <>
                        <PostLink
                          typePost="blank-link"
                          className="flex outline-none hocus:outline-none"
                          url={dtScMedia.url}
                        >
                          <Image
                            className="h-6 w-6"
                            src={dtScMedia.icons}
                            alt={`${publicRuntimeConfig.appName} (Social Media)`}
                            height={24}
                            width={24}
                          />
                        </PostLink>
                      </>
                    </Suspense>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
