import { Link } from "react-scroll";
import { useState, useEffect, useCallback } from "react";

// import Link from "next/link";
import Links from "next/link";
import Image from "next/legacy/image";

// Ui
import ButtonsOpenLink from "/components/ui/buttons/ButtonsOpenLink";

export default function Navbar() {
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
        <div className="container px-4">
          <div className="navbar-main flex items-center justify-between">
            <Links
              className="navbar-brand flex items-center outline-none py-0 sm:py-0.5"
              href=""
            >
              <div className="block relative h-7 lg:h-8 w-[94px] lg:w-[105px]">
                <Image
                  alt="W3W (Brand LOGO)"
                  src="/assets/images/w3w.svg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Links>
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
                    activeClass="active"
                    to="header"
                    smooth={true}
                    offset={0}
                    duration={400}
                  >
                    About
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="menu-link uppercase outline-none"
                    activeClass="active"
                    to="whatbethere"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-135}
                    duration={400}
                    isDynamic={true}
                  >
                    What’ll be there
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="menu-link uppercase outline-none"
                    activeClass="active"
                    to="schedule"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-135}
                    duration={400}
                    isDynamic={true}
                  >
                    Schedules
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="menu-link uppercase outline-none"
                    activeClass="active"
                    to="speakersMentors"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-135}
                    duration={400}
                    isDynamic={true}
                  >
                    Speakers
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="menu-link uppercase outline-none"
                    activeClass="active"
                    to="mediaPartners"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-135}
                    duration={400}
                    isDynamic={true}
                  >
                    Media Partners
                  </Link>
                </li>
              </ul>
              <div className="flex flex-row items-center">
                <ButtonsOpenLink
                  className="text-xs lg:text-sm py-2 sm:py-3 lg:py-3 px-3 sm:px-6 lg:px-6"
                  url="https://e7bao9msf39.typeform.com/web3week"
                  label="TALK WITH US"
                  type="btn-primary"
                  center
                ></ButtonsOpenLink>
                <button
                  className={`navbar-toggle flex lg:hidden outline-none ml-3`}
                  data-toggle="#nvMnuPrimary"
                  data-icons="#hmbrgerMnu"
                  onClick={toggleMenu}
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
        </div>
      </nav>
    </>
  );
}
