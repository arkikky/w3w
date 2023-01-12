import dynamic from "next/dynamic";

// Css
import Backdrop from "@styles/components/Backdrop.module.css";
import Card from "@styles/components/Card.module.css";

// Ui - Components
const Container = dynamic(() => import("@components/Container"));

// Layouts - Components]
const Footer = dynamic(() => import("@layouts/Footer"));
import Navbar from "@layouts/Navbar";

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
      <div className="fixed inset-y-0 inset-x-0 select-none pointer-events-none z-[60]">
        <Container className="absolute inset-y-0 inset-x-0 h-full min-h-screen">
          <section
            className={`${Card.stckyTxtline} flex flex-row gap-x-4 sm:gap-x-6 font-fira-code uppercase`}
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

      <div className="overflow-hidden relative pb-4 sm:pb-6">
        {/* Main (App) */}
        {children}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
