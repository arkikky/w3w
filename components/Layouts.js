import Image from "next/legacy/image";

// Ui
import Footer from "./Footer";

// Css
import Backdrop from "../styles/components/Backdrop.module.css";
import Card from "../styles/components/Card.module.css";

// Sections
import Navbar from "/components/Navbar";

export default function Layouts({ children }) {
  return (
    <>
      <div className="overflow-hidden relative pb-4 sm:pb-6">
        {/* Navbar */}
        <Navbar></Navbar>

        {/* Backdrop (Gridlines) */}
        <div className="container absolute inset-y-0 inset-x-0 -z-px">
          <section
            className={
              Backdrop.backdrpGrdlne + " grid grid-cols-2 sm:grid-cols-4"
            }
          >
            <div className={Backdrop.backdrpGrdlneItms}></div>
            <div
              className={"hidden sm:flex " + Backdrop.backdrpGrdlneItms}
            ></div>
            <div
              className={"hidden sm:flex " + Backdrop.backdrpGrdlneItms}
            ></div>
            <div className={Backdrop.backdrpGrdlneItms}></div>
          </section>

          {/* Beams (Left) */}
          <div className="absolute top-0 sm:top-[149px] lg:top-[102px] xl:top-[145px] -left-[234px] sm:-left-[189px] xl:-left-[213px] right-auto bottom-auto transform rotate-[-23deg] sm:rotate-0">
            <div className="block blur-[20px] relative h-[516px] 2xl:h-[516px] w-[393px] 2xl:w-[493px]">
              <Image
                alt="W3W (Beams - Left)"
                src="/assets/images/backdrop/backdrop-beams-left.png"
                layout="fill"
                objectFit="cover"
                quality="70"
                priority
              />
            </div>
          </div>

          {/* Beams (Right) */}
          <div className="absolute -top-[243px] sm:-top-[239px] lg:-top-[198px] xl:-top-[135px] left-auto -right-10 sm:right-1.5 lg:right-[31px] xl:right-[66px] 2xl:right-2 bottom-auto transform rotate-[6deg] sm:rotate-0">
            <div className="block blur-[20px] relative h-[516px] 2xl:h-[516px] w-[393px] 2xl:w-[493px]">
              <Image
                alt="W3W (Beams - Right)"
                src="/assets/images/backdrop/backdrop-beams-right.png"
                layout="fill"
                objectFit="cover"
                quality="70"
                priority
              />
            </div>
          </div>
        </div>

        {/* Sticky Textline */}
        <div className="stckyTxtlne fixed inset-y-0 inset-x-0 select-none pointer-events-none z-[60]">
          <div className="container h-full min-h-screen relative">
            <section
              className={
                Card.stckyTxtline +
                " flex flex-row gap-x-4 sm:gap-x-6 font-fira-code uppercase"
              }
            >
              <ul className={Card.stckyTxtlineGroup + " whitespace-nowrap"}>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Jakarta
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Bangkok
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  HO CHI MINH CITY
                </li>
              </ul>
              <ul className={Card.stckyTxtlineGroup + " whitespace-nowrap"}>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Jakarta
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Bangkok
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  HO CHI MINH CITY
                </li>
              </ul>
              <ul className={Card.stckyTxtlineGroup + " whitespace-nowrap"}>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Jakarta
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Bangkok
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  HO CHI MINH CITY
                </li>
              </ul>
              <ul className={Card.stckyTxtlineGroup + " whitespace-nowrap"}>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Jakarta
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Bangkok
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  HO CHI MINH CITY
                </li>
              </ul>
              <ul className={Card.stckyTxtlineGroup + " whitespace-nowrap"}>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Jakarta
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Bangkok
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  HO CHI MINH CITY
                </li>
              </ul>
            </section>
          </div>
        </div>

        {children}

        <Footer />
      </div>
    </>
  );
}
