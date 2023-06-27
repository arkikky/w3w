import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { Link } from "react-scroll";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Ui - Components
import Container from "@components/Container";
import PostLink from "@components/UI/Post/PostLink";
import Buttons from "@components/UI/Buttons";

const Navbar = () => {
  const router = useRouter();

  // Toggle
  const [menu, setMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  // Scroll
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 12);
    });
  }, []);

  useEffect(() => {
    var Scroll = require("react-scroll");
    var Events = Scroll.Events;

    const nvBtnToggle = document.querySelector(".navbar-toggle");
    const nvMnu = document.querySelector(".navbar-nav");

    Events.scrollEvent.register("end", (to, element) => {
      if (nvMnu.classList.contains("on") == true) {
        setTimeout(() => {
          nvBtnToggle.click();
        }, 400);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`navbar flex items-center justify-center ${
          menu ? "active" : scroll ? "active" : ""
        }`}
      >
        <Container className="px-4">
          <div className="navbar-main flex items-center justify-between">
            <PostLink
              className="navbar-brand flex items-center outline-none py-0 sm:py-0.5"
              url="/"
            >
              <Image
                className="flex relative h-6 sm:h-7 lg:h-8 w-max sm:w-[94px] lg:w-[105px]"
                src={`${publicRuntimeConfig.staticFolderImgs}/w3w.svg`}
                alt={`${publicRuntimeConfig.appName} (Brand - LOGO App)`}
                height={32}
                width={105}
              />
            </PostLink>
            <div className="flex flex-row items-center">
              <ul
                id="nvMnuPrimary"
                className={`navbar-nav nav menu flex flex-col sm:flex-row mr-0 lg:mr-8 ${
                  menu ? "on" : ""
                }`}
              >
                {router.asPath == "/" &&
                  router.asPath != "/rules" &&
                  router.asPath != "/curated-project" && (
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
                          class="stroke-current text-current -mt-0.5 mr-2 h-6 sm:h-5 w-6 sm:w-5"
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
                          className="stroke-current text-current -mt-0.5 mr-2 h-6 sm:h-5 w-6 sm:w-5"
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
              <button
                className="navbar-toggle flex lg:hidden outline-none ml-3"
                aria-label="togleMnuPrimary"
                aria-labelledby="togleMnuPrimary"
                onClick={toggleMenu}
                type="button"
                role="button"
              >
                <div
                  id="hmbrgerMnu"
                  className={`hmbrger flex flex-col ${menu ? "close" : ""}`}
                >
                  <span className="hmbrger-itms transition-all duration-300"></span>
                  <span className="hmbrger-itms transition-all duration-300"></span>
                </div>
              </button>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
