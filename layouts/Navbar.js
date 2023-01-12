import { useState, useEffect, useCallback } from "react";
import getConfig from "next/config";
import dynamic from "next/dynamic";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Ui - Components
const Container = dynamic(() => import("@components/Container"));
const PostLink = dynamic(() => import("@components/UI/Post/PostLink"));

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
    // var Scroll = require("react-scroll");
    // var Events = Scroll.Events;
    // const nvBtnToggle = document.querySelector(".navbar-toggle");
    // const nvMnu = document.querySelector(".navbar-nav");
    // Events.scrollEvent.register("end", (to, element) => {
    //   if (nvMnu.classList.contains("on") == true) {
    //     setTimeout(() => {
    //       nvBtnToggle.click();
    //     }, 200);
    //   }
    // });
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
                className="flex relative h-7 lg:h-8 w-[94px] lg:w-[105px]"
                src={`${publicRuntimeConfig.staticFolder}/w3w.svg`}
                alt={`${publicRuntimeConfig.appName} (LOGO)`}
                height={32}
                width={105}
                placeholder="blur"
                blurDataURL={`${publicRuntimeConfig.blurData}`}
              />
            </PostLink>
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center">
                <button
                  className="navbar-toggle flex lg:hidden outline-none ml-3"
                  data-toggle="#nvMnuPrimary"
                  data-icons="#hmbrgerMnu"
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
