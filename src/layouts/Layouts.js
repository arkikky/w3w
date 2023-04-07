import React from "react";

// Css
import Backdrop from "@styles/components/Backdrop.module.css";
import Card from "@styles/components/Card.module.css";

// Ui - Components
import Container from "@components/Container";

// Layouts - Components
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layouts = ({ children }) => {
  return (
    <>
      {/* Backdrop (Gridlines) */}
      <Container className="fixed inset-y-0 inset-x-0 -z-px">
        <div
          className={`${Backdrop.backdrpGrdlne} supports-grid:grid grid-cols-2 sm:grid-cols-4`}
        >
          <div className={`${Backdrop.backdrpGrdlneItms}`}></div>
          <div className={`hidden sm:flex ${Backdrop.backdrpGrdlneItms}`}></div>
          <div className={`hidden sm:flex ${Backdrop.backdrpGrdlneItms}`}></div>
          <div className={`${Backdrop.backdrpGrdlneItms}`}></div>
        </div>
      </Container>

      {/* Sticky Textline */}
      <section className="fixed inset-y-0 inset-x-0 select-none pointer-events-none z-[25]">
        <Container className="absolute inset-y-0 inset-x-0 h-full min-h-screen">
          <section
            className={`${Card.stckyTxtline} flex flex-row gap-x-4 sm:gap-x-6 font-fira-code font-medium uppercase`}
          >
            <ul className={`${Card.stckyTxtlineGroup} whitespace-nowrap`}>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                COMPETITION 
              </li>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                WEB3WEEKEND 
              </li>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                INNOVATION
              </li>
            </ul>
            <ul className={`${Card.stckyTxtlineGroup} whitespace-nowrap`}>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                COMPETITION 
              </li>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                WEB3WEEKEND 
              </li>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                INNOVATION
              </li>
            </ul>
            <ul className={`${Card.stckyTxtlineGroup} whitespace-nowrap`}>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                COMPETITION 
              </li>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                WEB3WEEKEND 
              </li>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                INNOVATION
              </li>
            </ul>
            <ul className={`${Card.stckyTxtlineGroup} whitespace-nowrap`}>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                COMPETITION 
              </li>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                WEB3WEEKEND 
              </li>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                INNOVATION
              </li>
            </ul>
            <ul className={`${Card.stckyTxtlineGroup} whitespace-nowrap`}>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                COMPETITION 
              </li>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                WEB3WEEKEND 
              </li>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                INNOVATION
              </li>
            </ul>
            <ul className={`${Card.stckyTxtlineGroup} whitespace-nowrap`}>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                COMPETITION 
              </li>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                WEB3WEEKEND 
              </li>
              <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                INNOVATION
              </li>
            </ul>
          </section>
        </Container>
      </section>

      <Navbar />

      {children}

      <Footer />
    </>
  );
};

export default Layouts;
