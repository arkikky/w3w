import React, { useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-scroll";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Ui - Components
import Container from "@components/Container";
import Post from "@components/UI/Post/Post";
import PostLink from "@components/UI/Post/PostLink";

// Json
import mockSocMdiaFootr from "@json/socialMedia.json";

const Footer = () => {
  const [intSocMdia, stSocMedia] = useState(mockSocMdiaFootr);

  const gtDtaYears = dayjs().format("YYYY");
  const [gtYears, stYears] = useState(gtDtaYears);

  return (
    <>
      <footer id="footrMain">
        <Container>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-2 sm:px-4">
            <div className="flex flex-col max-w-full sm:max-w-[345px]">
              <Image
                className="flex relative h-6 sm:h-8 w-auto max-w-max"
                src={`${publicRuntimeConfig.staticFolderImgs}/w3w.svg`}
                alt={`${publicRuntimeConfig.appName} (LOGO)`}
                height={32}
                width={105}
              />
              <p className="text-white font-fira-code text-sm font-normal text-left uppercase mt-6">
                All rights reserved. WEB3weekend is organized by{" "}
                <PostLink
                  typePost="blank-link"
                  url="https://coinvestasi.com/"
                  className="text-primary underline"
                >
                  Coinvestasi
                </PostLink>
                , a subsidiary of{" "}
                <PostLink
                  typePost="blank-link"
                  url="https://indonesiacrypto.network/"
                  className="text-primary underline"
                >
                  Indonesia Crypto Network.
                </PostLink>
              </p>
            </div>
            <div className="inline-flex flex-row flex-wrap mt-12 xl:mt-0">
              <div
                id="footrW3W"
                className={`footrGroupMnu flex-none sm:flex-1 mr-12 last:mr-0 w-full sm:w-max min-w-max`}
              >
                <h2 className="ftoor-heading text-white text-base font-semibold tracking-tight uppercase">
                  W3W
                </h2>
                <ul className="menu mt-2">
                  <li className="menu-item">
                    <Link
                      className="menu-link uppercase outline-none"
                      href="about"
                      activeClass="active"
                      to="about"
                      hashSpy={false}
                      smooth={"easeInOutQuart"}
                      offset={-149}
                      duration={300}
                    >
                      About
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="menu-link uppercase outline-none"
                      href="program"
                      activeClass="active"
                      to="program"
                      spy={true}
                      hashSpy={false}
                      smooth={"easeInOutQuart"}
                      offset={-135}
                      duration={300}
                    >
                      Programs
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="menu-link uppercase outline-none"
                      href="place"
                      activeClass="active"
                      to="place"
                      spy={true}
                      hashSpy={false}
                      smooth={"easeInOutQuart"}
                      offset={-135}
                      duration={300}
                    >
                      Agenda
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="menu-link uppercase outline-none"
                      href="prizes"
                      activeClass="active"
                      to="prizes"
                      spy={true}
                      hashSpy={false}
                      smooth={"easeInOutQuart"}
                      offset={-135}
                      duration={300}
                    >
                      Prizes
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="menu-link uppercase outline-none"
                      href="facilitators"
                      activeClass="active"
                      to="facilitators"
                      spy={true}
                      hashSpy={false}
                      smooth={"easeInOutQuart"}
                      offset={-135}
                      duration={300}
                    >
                      Facilitators
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                id="footrFuturherMore"
                className={`footrGroupMnu flex-none sm:flex-1 mr-12 last:mr-0 w-full sm:w-max min-w-max`}
              >
                <h2 className="ftoor-heading text-white text-base font-semibold tracking-tight uppercase">
                  Further more
                </h2>
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
                    title="Terms and conditions"
                  />
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-solid border-black-50 py-4 mt-10 mx-2 sm:mx-4">
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
