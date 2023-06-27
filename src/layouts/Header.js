import React from "react";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import Headr from "@styles/layouts/Header.module.css";

// Ui - Components
import Container from "@components/Container";
import Buttons from "@components/UI/Buttons";
import ImagesFill from "@components/UI/ImagesFill";
import PostLink from "@components/UI/Post/PostLink";

const Header = () => {
  return (
    <>
      <header className="relative">
        <Container className="mt-[98px] lg:mt-[158px] px-2 sm:px-4">
          <section className="relative">
            <div className="flex flex-col w-full">
              <h1 className="text-white font-w3w-bold text-xl sm:text-[43px] lg:text-[54px] 2xl:text-[60px] sm:leading-[65px] lg:leading-[65px] 2xl:leading-[72px] tracking-[2px] lg:tracking-[4px] text-left sm:text-center uppercase mt-6">
                ARE YOU READY TO TURN YOUR{" "}
                <span className="text-primary">IDEAS</span> INTO REALITY?
              </h1>
              <div className="text-[#BFBFBF] font-fira-code text-sm sm:text-lg lg:text-xl font-normal text-left sm:text-center uppercase mt-1.5 mx-auto w-full max-w-[1058px]">
                Web3 Weekend is an online web3 innovation competition. Get
                notified for upcoming builders-focused competition, Web3
                Weekend!
              </div>
              {/* <div className="mr-auto w-max">
                <Buttons
                  typeBtn="btn-blank-link"
                  url="https://bit.ly/w3wregistration"
                  label="Participate now"
                  variants="btn-primary"
                  size="lg"
                  text="uppercase"
                  className="text-sm sm:text-base mt-8 sm:mt-16 py-4 sm:py-4 px-4 sm:px-6 transition duration-300 ease-in-out"
                />
              </div> */}
            </div>
          </section>
        </Container>
      </header>
    </>
  );
};

export default Header;
