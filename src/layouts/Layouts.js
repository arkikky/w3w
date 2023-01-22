import getConfig from "next/config";
import dynamic from "next/dynamic";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import Backdrop from "@styles/components/Backdrop.module.css";
import Card from "@styles/components/Card.module.css";

// Ui - Components
const Container = dynamic(() => import("@components/Container"));
const ImagesFill = dynamic(() => import("@components/UI/ImagesFill"));

// Layouts - Components
const Navbar = dynamic(() => import("@layouts/Navbar"));
const Footer = dynamic(() => import("@layouts/Footer"));

const Layouts = ({ children }) => {
  return (
    <>
      <div className="overflow-hidden relative pb-4 sm:pb-6">
        {/* Navbar */}
        <Navbar />

        {/* Backdrop (Gridlines) */}
        <Container className="fixed inset-y-0 inset-x-0 -z-px">
          <div
            className={`${Backdrop.backdrpGrdlne} supports-grid:grid grid-cols-2 sm:grid-cols-4`}
          >
            <div className={`${Backdrop.backdrpGrdlneItms}`}></div>
            <div
              className={`hidden sm:flex ${Backdrop.backdrpGrdlneItms}`}
            ></div>
            <div
              className={`hidden sm:flex ${Backdrop.backdrpGrdlneItms}`}
            ></div>
            <div className={`${Backdrop.backdrpGrdlneItms}`}></div>
          </div>
        </Container>

        {/* Backdrop (Beams) */}
        <Container className="select-none pointer-events-none absolute inset-y-0 inset-x-0 -z-px">
          {/* Beams (Left) */}
          <section className="absolute top-0 sm:top-[149px] lg:top-[102px] xl:top-[145px] -left-[234px] sm:-left-[189px] xl:-left-[213px] right-auto bottom-auto transform rotate-[-23deg] sm:rotate-0">
            <ImagesFill
              className="flex blur-[20px] relative h-[516px] 2xl:h-[516px] w-[393px] 2xl:w-[493px]"
              src={`${publicRuntimeConfig.staticFolder}/backdrop/backdrop-beams-left.png`}
              alt={`${publicRuntimeConfig.appName} (Beams - Left)`}
              priority={true}
            />
          </section>

          {/* Beams (Right) */}
          <section className="absolute -top-[243px] sm:-top-[239px] lg:-top-[198px] xl:-top-[135px] left-auto -right-10 sm:right-1.5 lg:right-[31px] xl:right-[66px] 2xl:right-2 bottom-auto transform rotate-[6deg] sm:rotate-0">
            <ImagesFill
              className="flex blur-[20px] relative h-[516px] 2xl:h-[516px] w-[393px] 2xl:w-[493px]"
              src={`${publicRuntimeConfig.staticFolder}/backdrop/backdrop-beams-right.png`}
              alt={`${publicRuntimeConfig.appName} (Beams - Right)`}
              priority={true}
            />
          </section>
        </Container>

        {/* Sticky Textline */}
        <div className="fixed inset-y-0 inset-x-0 select-none pointer-events-none z-[25]">
          <Container className="absolute inset-y-0 inset-x-0 h-full min-h-screen">
            <section
              className={`${Card.stckyTxtline} flex flex-row gap-x-4 sm:gap-x-6 font-fira-code font-medium uppercase`}
            >
              <ul className={`${Card.stckyTxtlineGroup} whitespace-nowrap`}>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Bali
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Yogyakarta
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Jakarta
                </li>
              </ul>
              <ul className={`${Card.stckyTxtlineGroup} whitespace-nowrap`}>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Bali
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Yogyakarta
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Jakarta
                </li>
              </ul>
              <ul className={`${Card.stckyTxtlineGroup} whitespace-nowrap`}>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Bali
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Yogyakarta
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Jakarta
                </li>
              </ul>
              <ul className={`${Card.stckyTxtlineGroup} whitespace-nowrap`}>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Bali
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Yogyakarta
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Jakarta
                </li>
              </ul>
              <ul className={`${Card.stckyTxtlineGroup} whitespace-nowrap`}>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Bali
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Yogyakarta
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Jakarta
                </li>
              </ul>
              <ul className={`${Card.stckyTxtlineGroup} whitespace-nowrap`}>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Bali
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Yogyakarta
                </li>
                <li className="text-[10px] sm:text-xs lg:text-base leading-[initial]">
                  Jakarta
                </li>
              </ul>
            </section>
          </Container>
        </div>

        {/* Main (App) */}
        {children}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
