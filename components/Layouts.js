import Footer from "./Footer";

// Css
import Backdrop from "../styles/components/Backdrop.module.css";
import Card from "../styles/components/Card.module.css";

export default function Layouts({ children }) {
  return (
    <>
      <div className="pb-4 sm:pb-6 relative">
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
        </div>

        {/* Sticky Textline */}
        <div className="fixed inset-y-0 inset-x-0 select-none pointer-events-none z-[60]">
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
