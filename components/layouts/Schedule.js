// Css
import Card from "../../styles/components/Card.module.css";

// Sections
import SubHeading from "../sections/SubHeading";

const Schedule = () => {
  return (
    <>
      <section
        id="schedule"
        className="grid grid-cols-4 sm:grid-cols-4 mt-18 mb-14 sm:my-18 lg:my-24 px-0 sm:px-4"
      >
        <SubHeading
          className="flex flex-row items-center justify-between"
          title="Schedule"
          classNameLabel="-mt-2.5 sm:-mt-1"
          label="Coming soon!"
        ></SubHeading>
        <div
          className={
            Card.bxCntentShdow +
            " col-span-full grid grid-cols-12 gap-y-4 gap-x-4 mt-6 sm:mt-8 " +
            Card.on
          }
        >
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <section
              className={
                Card.bx +
                " bg-grdients-black flex flex-col items-start blur-sm py-4 px-4"
              }
            >
              <div>
                <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                  2 February
                </h3>
                <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </section>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <section
              className={
                Card.bx +
                " bg-grdients-black flex flex-col items-start blur-sm py-4 px-4"
              }
            >
              <div>
                <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                  8 February
                </h3>
                <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </section>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <section
              className={
                Card.bx +
                " bg-grdients-black flex flex-col items-start blur-sm py-4 px-4"
              }
            >
              <div>
                <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                  8 February
                </h3>
                <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </section>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <section
              className={
                Card.bx +
                " bg-grdients-black flex flex-col items-start blur-sm py-4 px-4"
              }
            >
              <div>
                <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                  8 February
                </h3>
                <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </section>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <section
              className={
                Card.bx +
                " bg-grdients-black flex flex-col items-start blur-sm py-4 px-4"
              }
            >
              <div>
                <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                  8 February
                </h3>
                <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </section>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <section
              className={
                Card.bx +
                " bg-grdients-black flex flex-col items-start blur-sm py-4 px-4"
              }
            >
              <div>
                <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                  8 February
                </h3>
                <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </section>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <section
              className={
                Card.bx +
                " bg-grdients-black flex flex-col items-start blur-sm py-4 px-4"
              }
            >
              <div>
                <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                  8 February
                </h3>
                <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </section>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <section
              className={
                Card.bx +
                " bg-grdients-black flex flex-col items-start blur-sm py-4 px-4"
              }
            >
              <div>
                <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                  8 February
                </h3>
                <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </section>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <section
              className={
                Card.bx +
                " bg-grdients-black flex flex-col items-start blur-sm py-4 px-4"
              }
            >
              <div>
                <h3 className="text-white font-SportingGrotesque-Bold text-base uppercase">
                  8 February
                </h3>
                <span className="text-gray-700 font-space-mono text-sm uppercase mt-1">
                  Test
                </span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
