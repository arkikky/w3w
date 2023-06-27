import React, { useState } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();
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
                  className="text-primary hover:underline"
                >
                  Coinvestasi
                </PostLink>
                , a subsidiary of{" "}
                <PostLink
                  typePost="blank-link"
                  url="https://indonesiacrypto.network/"
                  className="text-primary hover:underline"
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
                  {router.asPath == "/" && router.asPath != "/rules" && (
                    <>
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
                          href="winners"
                          activeClass="active"
                          to="winners"
                          spy={true}
                          hashSpy={false}
                          smooth={"easeInOutQuart"}
                          offset={-135}
                          duration={300}
                        >
                          Winners
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link
                          className="menu-link uppercase outline-none"
                          href="higlights"
                          activeClass="active"
                          to="higlights"
                          spy={true}
                          hashSpy={false}
                          smooth={"easeInOutQuart"}
                          offset={-135}
                          duration={300}
                        >
                          Higlights
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
                      <li className="menu-item">
                        <Link
                          className="menu-link uppercase outline-none"
                          href="partner"
                          activeClass="active"
                          to="partner"
                          spy={true}
                          hashSpy={false}
                          smooth={"easeInOutQuart"}
                          offset={-135}
                          duration={300}
                        >
                          Partner
                        </Link>
                      </li>
                      {/* <li className="menu-item">
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
                      </li> */}
                    </>
                  )}
                  {router.asPath == "/rules" && (
                    <>
                      <li className="menu-item">
                        <PostLink
                          url="/"
                          className="menu-link flex items-center uppercase outline-none"
                        >
                          <svg
                            class="stroke-current text-current -mt-0.5 mr-1 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.5 8.48491V16.8182C2.5 16.8182 2.5 18.3334 4 18.3334C5.5 18.3334 16 18.3334 16 18.3334C16 18.3334 17.5 18.3334 17.5 16.8182C17.5 15.3031 17.5 8.48491 17.5 8.48491L10 1.66675L2.5 8.48491Z"
                              strokeWidth="1.5"
                            />
                          </svg>
                          Back to home
                        </PostLink>
                      </li>
                    </>
                  )}
                  {router.asPath == "/curated-project" && (
                    <>
                      <li className="menu-item">
                        <PostLink
                          url="/"
                          className="menu-link flex items-center uppercase outline-none"
                        >
                          <svg
                            class="stroke-current text-current -mt-0.5 mr-1 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.5 8.48491V16.8182C2.5 16.8182 2.5 18.3334 4 18.3334C5.5 18.3334 16 18.3334 16 18.3334C16 18.3334 17.5 18.3334 17.5 16.8182C17.5 15.3031 17.5 8.48491 17.5 8.48491L10 1.66675L2.5 8.48491Z"
                              strokeWidth="1.5"
                            />
                          </svg>
                          Back to home
                        </PostLink>
                      </li>
                    </>
                  )}
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
                  {/* <li className="menu-item">
                    <PostLink
                      url="/rules"
                      className="menu-link uppercase outline-none"
                    >
                      Rules
                    </PostLink>
                  </li> */}
                  <li className="menu-item">
                    <PostLink
                      url="/curated-project"
                      className="menu-link uppercase outline-none"
                    >
                      Top 30's
                    </PostLink>
                  </li>
                  {/* <Post
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
                  /> */}
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
