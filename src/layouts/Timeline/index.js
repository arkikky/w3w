import getConfig from "next/config";
import dynamic from "next/dynamic";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import Timeline from "@styles/components/Timeln.module.css";

// Ui - Components
const ImagesFill = dynamic(() => import("@components/UI/ImagesFill"));

const LyTimeline = () => {
  return (
    <>
      <div className="mb-[121px]">
        <article className="supports-grid:grid grid-cols-4 sm:grid-cols-12 relative px-0 sm:px-4">
          <div className="col-span-full sm:col-span-6 relative">
            <div className="relative h-full w-full xs:w-[417px] sm:w-full">
              <Image
                className={`img-fill mx-auto`}
                src={`${publicRuntimeConfig.staticFolder}/timeline/catch-project-showcases.png`}
                alt={`${publicRuntimeConfig.appName} (Timeline)`}
                height={650}
                width={650}
                sizes="(min-width: 1280px) 100vw,
                (min-width: 1024px) 463vw,
                (min-width: 640px) 591vw,
                657vw"
              />
            </div>

            {/* Backdrop (Stairs) */}
            <div className="select-none pointer-events-none hidden sm:flex absolute top-auto left-auto -right-[139px] lg:-right-[175px] xl:-right-[211px] -bottom-[123px] lg:-bottom-[165px] xl:-bottom-[185px] h-[247px] w-[273px] lg:h-[351.15px] lg:w-[385.99px] xl:h-[371.15px] xl:w-[405.99px] -z-px">
              <ImagesFill
                className="h-full w-full"
                src={`${publicRuntimeConfig.staticFolder}/backdrop/backdrop-linecircuit-atas.svg`}
                alt={`${publicRuntimeConfig.appName} (Stairs - Backdrop Timelines)`}
              />
            </div>
          </div>
          <div className="col-span-full sm:col-span-6 flex items-center justify-center relative px-0 sm:pl-7">
            <div className={`${Timeline.timelnCntentContnt}`}>
              <h2 className="text-white font-w3w-bold text-sm lg:text-base uppercase">
                Catch project showcases on stage
              </h2>
              <p className="text-white/60 font-mono text-sm lg:text-base uppercase mt-2">
                Hear and get the latest updates, features, and apis from
                established layer 1s and business & tech solution providers.
              </p>
            </div>
          </div>
        </article>
        <article className="supports-grid:grid grid-cols-4 sm:grid-cols-12 relative mt-16 sm:mt-0 px-0 sm:px-4">
          <div className="col-span-full sm:col-span-6 flex items-center justify-center px-0 sm:pr-7">
            <div className={`${Timeline.timelnCntentContnt}`}>
              <h3 className="text-white font-w3w-bold text-sm lg:text-base uppercase">
                Solve your problem in a 1-on-1 mentoring session
              </h3>
              <p className="text-white/60 font-mono text-sm lg:text-base uppercase mt-2">
                Meet native web3 engineers and industrialists in a 1-on-1
                mentoring session to gain the best solution for your problems.
              </p>
            </div>
          </div>
          <div className="col-span-full sm:col-span-6 order-first sm:order-last relative">
            <div className="relative h-full w-full xs:w-[417px] sm:w-full">
              <Image
                className="img-fill mx-auto"
                src={`${publicRuntimeConfig.staticFolder}/timeline/solve-your-problem.png`}
                alt={`${publicRuntimeConfig.appName} (Timeline)`}
                height={650}
                width={650}
                sizes="(min-width: 1280px) 100vw,
                (min-width: 1024px) 463vw,
                (min-width: 640px) 591vw,
                657vw"
              />
            </div>
            {/* Backdrop (Stairs) */}
            <div className="select-none pointer-events-none hidden sm:flex absolute top-auto -left-[137px] lg:-left-[175px] xl:-left-[215px] right-auto -bottom-[119px] lg:-bottom-[155px] xl:-bottom-[211px] h-[247px] w-[273px] lg:h-[365px] lg:w-[409px] xl:h-[445.15px] xl:w-[479.99px] transform -rotate-[2deg] -z-px">
              <ImagesFill
                className="h-full w-full"
                src={`${publicRuntimeConfig.staticFolder}/backdrop/backdrop-linecircuit-tengah.svg`}
                alt={`${publicRuntimeConfig.appName} (Stairs - Backdrop Timelines)`}
              />
            </div>
          </div>
        </article>
        <article className="supports-grid:grid grid-cols-4 sm:grid-cols-12 relative mt-16 sm:mt-0 px-0 sm:px-4">
          <div className="col-span-full sm:col-span-6 relative">
            <div className="relative h-full w-full xs:w-[417px] sm:w-full">
              <Image
                className="img-fill mx-auto"
                src={`${publicRuntimeConfig.staticFolder}/timeline/learn-all-about.png`}
                alt={`${publicRuntimeConfig.appName} (Timeline)`}
                height={650}
                width={650}
                sizes="(min-width: 1280px) 100vw,
                (min-width: 1024px) 463vw,
                (min-width: 640px) 591vw,
                657vw"
              />
            </div>
            {/* Backdrop (Stairs) */}
            <div className="select-none pointer-events-none hidden sm:flex absolute top-auto left-auto -right-[139px] lg:-right-[175px] xl:-right-[206px] -bottom-[131px] lg:-bottom-[173px] xl:-bottom-[208px] h-[247px] w-[273px] lg:h-[351.15px] lg:w-[385.99px] xl:h-[389.15px] xl:w-[435.99px] transform rotate-[4deg] -z-px">
              <ImagesFill
                className="h-full w-full"
                src={`${publicRuntimeConfig.staticFolder}/backdrop/backdrop-linecircuit-bawah.svg`}
                alt={`${publicRuntimeConfig.appName} (Stairs - Backdrop Timelines)`}
              />
            </div>
          </div>
          <div className="col-span-full sm:col-span-6 timelnsCntentRight flex items-center justify-center px-0 sm:pl-7">
            <div className={`${Timeline.timelnCntentContnt}`}>
              <h3 className="text-white font-w3w-bold text-sm lg:text-base uppercase">
                Learn all about web3 through workshops
              </h3>
              <p className="text-white/60 font-mono text-sm lg:text-base uppercase mt-2">
                Learn the how-to’s to get into web3. from security to
                scalability, gain the latest insights from the experts.
              </p>
            </div>
          </div>
        </article>
        <article className="supports-grid:grid grid-cols-4 sm:grid-cols-12 relative mt-16 sm:mt-0 px-0 sm:px-4">
          <div className="col-span-full sm:col-span-6 flex items-center justify-center px-0 sm:pr-7">
            <div className={`${Timeline.timelnCntentContnt}`}>
              <h3 className="text-white font-w3w-bold text-sm lg:text-base uppercase">
                Network and participate with experienced builders
              </h3>
              <p className="text-white/60 font-mono text-sm lg:text-base uppercase mt-2">
                Connect directly with projects building on layer 1s solution.
                gain new perspectives based on their real-life experiences
              </p>
            </div>
          </div>
          <div className="col-span-full sm:col-span-6 timelnsImgsLeft order-first sm:order-last relative">
            <div className="relative h-full w-full xs:w-[417px] sm:w-full">
              <Image
                className="img-fill mx-auto"
                src={`${publicRuntimeConfig.staticFolder}/timeline/network-and-participate.png`}
                alt={`${publicRuntimeConfig.appName} (Timeline)`}
                height={650}
                width={650}
                sizes="(min-width: 1280px) 100vw,
                (min-width: 1024px) 463vw,
                (min-width: 640px) 591vw,
                657vw"
              />
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default LyTimeline;
