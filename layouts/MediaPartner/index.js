import { useState } from "react";
import getConfig from "next/config";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Ui - Components
const SubHeading = dynamic(() => import("@components/UI/SubHeading"));

// Lib - Json
import mockMdiaPartnr from "@json/mediaPartner.json";

const LyMediaPartner = () => {
  const [gtMdiaPartnr, stMdiaPartnr] = useState(mockMdiaPartnr);

  const resMdiaPartnr = gtMdiaPartnr?.map((stDataRslt, i) => {
    return (
      <div
        key={i + 1}
        className="flex flex-1 sm:flex-none items-center justify-center px-4"
      >
        <>
          <Link
            className="outline-none"
            href={stDataRslt.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="img-fill w-max xl:w-revert-layer"
              src={stDataRslt.images}
              alt={stDataRslt.alt}
              height={stDataRslt.height}
              width={stDataRslt.width}
              sizes="(min-width: 1280px) 100vw,
              (min-width: 1024px) 63vw,
              (min-width: 640px) 71vw,
              139vw"
              placeholder="blur"
              blurDataURL={`${publicRuntimeConfig.blurData}`}
              priority
            />
          </Link>
        </>
      </div>
    );
  });

  return (
    <>
      <section
        id="mediaPartners"
        className="flex flex-col justify-center relative mt-18 sm:mt-24 lg:mt-32 px-0 sm:px-4"
      >
        <SubHeading
          className="flex flex-col items-center justify-center mb-15"
          title="Media Partners"
        >
          <span
            className={
              "text-primary font-fira-code text-sm sm:text-xl uppercase mt-2 mb-auto sm:my-auto"
            }
          >
            Coming soon!
          </span>
        </SubHeading>
        {resMdiaPartnr && (
          <div className="inline-flex flex-row flex-wrap justify-center gap-y-15">
            {resMdiaPartnr}
          </div>
        )}
      </section>
    </>
  );
};

export default LyMediaPartner;
