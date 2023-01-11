import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/legacy/image";

// Ui - Components
const Container = dynamic(() => import("@components/Container"));

const Navbar = () => {
  return (
    <>
      <nav className={`navbar flex items-center justify-center`}>
        <Container className="px-4">
          <div className="navbar-main flex items-center justify-between">
            <PostLink
              className="navbar-brand flex items-center outline-none py-0 sm:py-0.5"
              url=""
            >
              <div className="flex relative h-7 lg:h-8 w-[94px] lg:w-[105px]">
                <Image
                  src={`/assets/images/w3w.svg`}
                  alt={`W3W (LOGO)`}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                  priority
                />
              </div>
            </PostLink>
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center">
                <button
                  className="navbar-toggle flex lg:hidden outline-none ml-3"
                  data-toggle="#nvMnuPrimary"
                  data-icons="#hmbrgerMnu"
                >
                  <div id="hmbrgerMnu" className={`hmbrger flex flex-col`}>
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
