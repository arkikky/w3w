import dynamic from "next/dynamic";

// Css
import Card from "@styles/components/Card.module.css";

// Ui - Components
const SubHeading = dynamic(() => import("@components/UI/SubHeading"));

const LySchedule = () => {
  return (
    <>
      <section
        id="schedule"
        className="flex flex-col relative mt-[102px] px-0 sm:px-4"
      >
        <SubHeading
          className="flex flex-row items-center justify-between"
          title="Schedule"
        >
          <span className="text-primary font-fira-code text-sm sm:text-xl uppercase -mt-2.5 sm:-mt-1">
            Coming soon!
          </span>
        </SubHeading>

        <div
          className={`${Card.bxCntentShdow} supports-grid:grid grid-cols-12 gap-y-4 gap-x-4 mt-6 sm:mt-8 ${Card.on}`}
        >
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <article
              className={`${Card.bx} bg-grdients-black flex flex-col items-start blur-sm py-4 px-4`}
            >
              <div>
                <h2 className="text-white font-w3w-Bold text-base uppercase">
                  8 February
                </h2>
                <span className="text-gray-700 font-fira-code text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </article>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <article
              className={`${Card.bx} bg-grdients-black flex flex-col items-start blur-sm py-4 px-4`}
            >
              <div>
                <h2 className="text-white font-w3w-Bold text-base uppercase">
                  8 February
                </h2>
                <span className="text-gray-700 font-fira-code text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </article>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <article
              className={`${Card.bx} bg-grdients-black flex flex-col items-start blur-sm py-4 px-4`}
            >
              <div>
                <h2 className="text-white font-w3w-Bold text-base uppercase">
                  8 February
                </h2>
                <span className="text-gray-700 font-fira-code text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </article>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <article
              className={`${Card.bx} bg-grdients-black flex flex-col items-start blur-sm py-4 px-4`}
            >
              <div>
                <h2 className="text-white font-w3w-Bold text-base uppercase">
                  8 February
                </h2>
                <span className="text-gray-700 font-fira-code text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </article>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <article
              className={`${Card.bx} bg-grdients-black flex flex-col items-start blur-sm py-4 px-4`}
            >
              <div>
                <h2 className="text-white font-w3w-Bold text-base uppercase">
                  8 February
                </h2>
                <span className="text-gray-700 font-fira-code text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </article>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <article
              className={`${Card.bx} bg-grdients-black flex flex-col items-start blur-sm py-4 px-4`}
            >
              <div>
                <h2 className="text-white font-w3w-Bold text-base uppercase">
                  8 February
                </h2>
                <span className="text-gray-700 font-fira-code text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </article>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4 hidden lg:flex lg:flex-col">
            <article
              className={`${Card.bx} bg-grdients-black flex flex-col items-start blur-sm py-4 px-4`}
            >
              <div>
                <h2 className="text-white font-w3w-Bold text-base uppercase">
                  8 February
                </h2>
                <span className="text-gray-700 font-fira-code text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </article>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4 hidden lg:flex lg:flex-col">
            <article
              className={`${Card.bx} bg-grdients-black flex flex-col items-start blur-sm py-4 px-4`}
            >
              <div>
                <h2 className="text-white font-w3w-Bold text-base uppercase">
                  8 February
                </h2>
                <span className="text-gray-700 font-fira-code text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </article>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4 hidden lg:flex lg:flex-col">
            <article
              className={`${Card.bx} bg-grdients-black flex flex-col items-start blur-sm py-4 px-4`}
            >
              <div>
                <h2 className="text-white font-w3w-Bold text-base uppercase">
                  8 February
                </h2>
                <span className="text-gray-700 font-fira-code text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default LySchedule;
