import Image from "next/legacy/image";

// Ui
import Timelns from "../../styles/components/Timelns.module.css";

const Timelines = () => {
  return (
    <>
      <div>
        <section className="timelns grid grid-cols-4 sm:grid-cols-12 gap-x-12 px-4">
          <div className="col-span-full sm:col-span-6 timelnsImgsRight">
            <div className="relative ml-auto">
              <Image
                alt="W3W (Timelines)"
                src="/assets/images/timelines/rapid-showcases.svg"
                layout="responsive"
                height="100%"
                width="100%"
              />
            </div>
          </div>
          <div className="col-span-full sm:col-span-6 flex items-center justify-center relative">
            <div
              className={
                Timelns.timelnsCntentContnt + " " + Timelns.timelnsCntentRight
              }
            >
              <h4 className="text-white font-w3w-bold text-sm lg:text-base uppercase">
                RAPID SHOWCASES
              </h4>
              <p className="text-white/60 font-mono text-sm lg:text-base uppercase mt-2">
                HEAR AND GET THE LATEST UPDATES, FEATURES, AND APIs FROM
                ESTABLISHED LAYER 1s AND TECH SOLUTION PROVIDERS
              </p>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-4 sm:grid-cols-12 gap-x-12 -mt-3.5 sm:-mt-[59px] lg:-mt-[77px] xl:-mt-[167px] px-4">
          <div className="col-span-full sm:col-span-6 flex items-center justify-center">
            <div
              className={
                Timelns.timelnsCntentContnt + " " + Timelns.timelnsCntentLeft
              }
            >
              <h4 className="text-white font-w3w-bold text-sm lg:text-base uppercase">
                SPEED MENTORING
              </h4>
              <p className="text-white/60 font-mono text-sm lg:text-base uppercase mt-2">
                MEET NATIVE WEB3 ENGINEERS AND INDUSTRIALISTS IN A 1-ON-1
                MENTORING SESSION TO GAIN THE BEST SOLUTION FOR YOUR PROBLEMS
              </p>
            </div>
          </div>
          <div className="col-span-full sm:col-span-6 timelnsImgsLeft order-first sm:order-last">
            <div className="relative mr-auto -mb-18 sm:mb-0">
              <Image
                alt="W3W (Timelines)"
                src="/assets/images/timelines/speed-mentoring.svg"
                layout="responsive"
                height="100%"
                width="100%"
              />
            </div>
          </div>
        </section>
        <section className="timelns grid grid-cols-4 sm:grid-cols-12 gap-x-12 mt-6 sm:-mt-[83px] lg:-mt-[127px] xl:-mt-[253px] px-4">
          <div className="col-span-full sm:col-span-6 timelnsImgsRight">
            <div className="relative ml-auto -mb-3.5 sm:mb-0">
              <Image
                alt="W3W (Timelines)"
                src="/assets/images/timelines/workshops.svg"
                layout="responsive"
                height="100%"
                width="100%"
              />
            </div>
          </div>
          <div className="col-span-full sm:col-span-6 timelnsCntentRight flex items-center justify-center">
            <div
              className={
                Timelns.timelnsCntentContnt + " " + Timelns.timelnsCntentRight
              }
            >
              <h4 className="text-white font-w3w-bold text-sm lg:text-base uppercase">
                WORKSHOPS
              </h4>
              <p className="text-white/60 font-mono text-sm lg:text-base uppercase mt-2">
                LEARN THE HOW-TO’S TO GET INTO WEB3. FROM SECURITY TO
                SCALABILITY, GAIN THE LATEST INSIGHTS FROM THE EXPERTS
              </p>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-4 sm:grid-cols-12 gap-x-12 -mt-3.5 sm:-mt-[71px] lg:-mt-[117px] xl:-mt-[217px] px-4">
          <div className="col-span-full sm:col-span-6 flex items-center justify-center">
            <div
              className={
                Timelns.timelnsCntentContnt + " " + Timelns.timelnsCntentLeft
              }
            >
              <h4 className="text-white font-w3w-bold text-sm lg:text-base uppercase">
                USE-CASES
              </h4>
              <p className="text-white/60 font-mono text-sm lg:text-base uppercase mt-2">
                CONNECT DIRECTLY WITH TEAMS BUILDING ON LAYER 1s SOLUTION. GAIN
                NEW PERSPECTIVES BASED ON THEIR EXPERIENCES
              </p>
            </div>
          </div>
          <div className="col-span-full sm:col-span-6 timelnsImgsLeft order-first sm:order-last">
            <div className="relative mr-auto -mb-15 sm:mb-0">
              <Image
                alt="W3W (Timelines)"
                src="/assets/images/timelines/use-cases.svg"
                layout="responsive"
                height="100%"
                width="100%"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Timelines;
