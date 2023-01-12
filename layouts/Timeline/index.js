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
          <div className="col-span-full sm:col-span-6">
            <div className="relative">
              <Image
                className="img-fill mx-auto w-max xs:w-[417px] sm:w-max xl:w-revert-layer"
                src={`${publicRuntimeConfig.staticFolder}/timeline/catch-project-showcases.png`}
                alt={`${publicRuntimeConfig.appName} (Timeline)`}
                height={578}
                width={578}
                sizes="(min-width: 1280px) 100vw,
                (min-width: 1024px) 463vw,
                (min-width: 640px) 591vw,
                657vw"
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
      </div>
    </>
  );
};

export default LyTimeline;
