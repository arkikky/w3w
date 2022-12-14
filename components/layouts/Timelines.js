import Image from "next/legacy/image";

// Ui
import Timelns from "../../styles/components/Timelns.module.css";

const Timelines = () => {
  return (
    <>
      <div className="mb-[121px]">
        <section className="timelns grid grid-cols-4 sm:grid-cols-12 relative px-0 sm:px-4">
          <div className="col-span-full sm:col-span-6 relative">
            <div className="relative mx-auto sm:mx-0 h-[325px] sm:h-[311px] lg:h-[437px] xl:h-[562.23px] w-full xs:w-[385px] sm:w-full">
              <Image
                alt="W3W (Timelines)"
                src="/assets/images/timelines/catch-project-showcases.png"
                layout="fill"
                quality="60"
              />
            </div>

            {/* Backdrop (Stairs) */}
            <div className="hidden sm:flex absolute top-auto left-auto -right-[139px] lg:-right-[175px] xl:-right-[211px] -bottom-[123px] lg:-bottom-[165px] xl:-bottom-[191px] h-[247px] w-[273px] lg:h-[351.15px] lg:w-[385.99px] xl:h-[371.15px] xl:w-[405.99px] transform rotate-[4deg] -z-px">
              <Image
                alt="W3W (Timelines)"
                src="/assets/images/backdrop/backdrop-linecircuit-atas.svg"
                layout="fill"
                quality="60"
              />
            </div>
          </div>
          <div className="col-span-full sm:col-span-6 flex items-center justify-center relative px-0 sm:pl-7">
            <div
              className={
                Timelns.timelnsCntentContnt + " " + Timelns.timelnsCntentRight
              }
            >
              <h4 className="text-white font-w3w-bold text-sm lg:text-base uppercase">
                Catch project showcases on stage
              </h4>
              <p className="text-white/60 font-mono text-sm lg:text-base uppercase mt-2">
                Hear and get the latest updates, features, and apis from
                established layer 1s and business & tech solution providers.
              </p>
            </div>
          </div>
        </section>
        <section className="timelns grid grid-cols-4 sm:grid-cols-12 relative mt-16 sm:mt-0 px-0 sm:px-4">
          <div className="col-span-full sm:col-span-6 flex items-center justify-center px-0 sm:pr-7">
            <div
              className={
                Timelns.timelnsCntentContnt + " " + Timelns.timelnsCntentLeft
              }
            >
              <h4 className="text-white font-w3w-bold text-sm lg:text-base uppercase">
                Solve your problem in a 1-on-1 mentoring session
              </h4>
              <p className="text-white/60 font-mono text-sm lg:text-base uppercase mt-2">
                Meet native web3 engineers and industrialists in a 1-on-1
                mentoring session to gain the best solution for your problems.
              </p>
            </div>
          </div>
          <div className="col-span-full sm:col-span-6 order-first sm:order-last relative">
            <div className="relative mx-auto sm:mx-0 h-[255px] xxs:h-[281px] sm:h-[251px] lg:h-[333px] xl:h-[463.59px] w-full xs:w-[385px] sm:w-full">
              <Image
                alt="W3W (Timelines)"
                src="/assets/images/timelines/solve-your-problem.png"
                layout="fill"
                quality="60"
              />
            </div>

            {/* Backdrop (Stairs) */}
            <div className="hidden sm:flex absolute top-auto -left-[137px] lg:-left-[175px] xl:-left-[241px] right-auto -bottom-[119px] lg:-bottom-[155px] xl:-bottom-[204px] h-[247px] w-[273px] lg:h-[365px] lg:w-[409px] xl:h-[445.15px] xl:w-[479.99px] transform -rotate-[4deg] -z-px">
              <Image
                alt="W3W (Timelines)"
                src="/assets/images/backdrop/backdrop-linecircuit-tengah.svg"
                layout="fill"
                quality="60"
              />
            </div>
          </div>
        </section>
        <section className="timelns grid grid-cols-4 sm:grid-cols-12 relative mt-16 sm:mt-0 px-0 sm:px-4">
          <div className="col-span-full sm:col-span-6 relative">
            <div className="relative mx-auto sm:mx-0 h-[247px] xxs:h-[267px] sm:h-[239px] lg:h-[315px] xl:h-[429.03px] w-full xs:w-[385px] sm:w-full">
              <Image
                alt="W3W (Timelines)"
                src="/assets/images/timelines/learn-all-about.png"
                layout="fill"
                quality="60"
              />
            </div>

            {/* Backdrop (Stairs) */}
            <div className="hidden sm:flex absolute top-auto left-auto -right-[139px] lg:-right-[175px] xl:-right-[228px] -bottom-[123px] lg:-bottom-[165px] xl:-bottom-[208px] h-[247px] w-[273px] lg:h-[351.15px] lg:w-[385.99px] xl:h-[389.15px] xl:w-[435.99px] transform rotate-[4deg] -z-px">
              <Image
                alt="W3W (Timelines)"
                src="/assets/images/backdrop/backdrop-linecircuit-bawah.svg"
                layout="fill"
                quality="60"
              />
            </div>
          </div>
          <div className="col-span-full sm:col-span-6 timelnsCntentRight flex items-center justify-center px-0 sm:pl-7">
            <div
              className={
                Timelns.timelnsCntentContnt + " " + Timelns.timelnsCntentRight
              }
            >
              <h4 className="text-white font-w3w-bold text-sm lg:text-base uppercase">
                Learn all about web3 through workshops
              </h4>
              <p className="text-white/60 font-mono text-sm lg:text-base uppercase mt-2">
                Learn the how-to’s to get into web3. from security to
                scalability, gain the latest insights from the experts.
              </p>
            </div>
          </div>
        </section>
        <section className="timelns grid grid-cols-4 sm:grid-cols-12 relative mt-16 sm:mt-0 px-0 sm:px-4">
          <div className="col-span-full sm:col-span-6 flex items-center justify-center px-0 sm:pr-7">
            <div
              className={
                Timelns.timelnsCntentContnt + " " + Timelns.timelnsCntentLeft
              }
            >
              <h4 className="text-white font-w3w-bold text-sm lg:text-base uppercase">
                Network and participate with experienced builders
              </h4>
              <p className="text-white/60 font-mono text-sm lg:text-base uppercase mt-2">
                Connect directly with projects building on layer 1s solution.
                gain new perspectives based on their real-life experiences
              </p>
            </div>
          </div>
          <div className="col-span-full sm:col-span-6 timelnsImgsLeft order-first sm:order-last">
            <div className="relative mx-auto sm:mx-0 h-[261px] xxs:h-[273px] sm:h-[263px] lg:h-[359px] xl:h-[492.57px] w-full xs:w-[385px] sm:w-full">
              <Image
                alt="W3W (Timelines)"
                src="/assets/images/timelines/network-and-participate.png"
                layout="fill"
                quality="60"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Timelines;
