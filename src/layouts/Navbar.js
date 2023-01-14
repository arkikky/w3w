import { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import getConfig from "next/config";
import dynamic from "next/dynamic";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Ui - Components
const Container = dynamic(() => import("@components/Container"));
const PostLink = dynamic(() => import("@components/UI/Post/PostLink"));
const Buttons = dynamic(() => import("@components/UI/Buttons"));

const Navbar = () => {
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
        }, 200);
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
              url=""
            >
              <Image
                className="flex relative h-6 sm:h-7 lg:h-8 w-max sm:w-[94px] lg:w-[105px]"
                src={`${publicRuntimeConfig.staticFolder}/w3w.svg`}
                alt={`${publicRuntimeConfig.appName} (LOGO)`}
                height={32}
                width={105}
                placeholder="blur"
                blurDataURL={`${publicRuntimeConfig.blurData}`}
              />
            </PostLink>
            <div className="flex flex-row items-center">
              <ul
                id="nvMnuPrimary"
                className={`navbar-nav nav menu flex flex-col sm:flex-row mr-0 lg:mr-8 ${
                  menu ? "on" : ""
                }`}
              >
                <li className="menu-item">
                  <Link
                    className="menu-link uppercase outline-none"
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
                    className="menu-link uppercase outline-none"
                    href="whatbethere"
                    activeClass="active"
                    to="whatbethere"
                    spy={true}
                    hashSpy={true}
                    smooth={"easeInOutQuart"}
                    offset={-135}
                    duration={300}
                  >
                    What’ll be there
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="menu-link uppercase outline-none"
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
                <li className="menu-item">
                  <Link
                    className="menu-link uppercase outline-none"
                    href="mentorsSpeakers"
                    activeClass="active"
                    to="mentorsSpeakers"
                    spy={true}
                    hashSpy={true}
                    smooth={"easeInOutQuart"}
                    offset={-135}
                    duration={300}
                  >
                    Mentors
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="menu-link uppercase outline-none"
                    href="sponsor"
                    activeClass="active"
                    to="sponsor"
                    spy={true}
                    hashSpy={true}
                    smooth={"easeInOutQuart"}
                    offset={-135}
                    duration={300}
                  >
                    Sponsor
                  </Link>
                </li>
              </ul>
              <div className="flex flex-row items-center">
                <Buttons
                  typeBtn="btn-blank-link"
                  className="text-xs lg:text-sm py-2 sm:py-3 lg:py-3 px-3 sm:px-6 lg:px-6"
                  url="https://e7bao9msf39.typeform.com/to/c1WBrXM7"
                  label="Become a Sponsor"
                  variants="btn-primary"
                  text="uppercase"
                  position="center"
                />
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
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
