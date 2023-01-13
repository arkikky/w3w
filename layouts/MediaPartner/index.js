import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Ui - Components
const SubHeading = dynamic(() =>
  import("@components/UI/SubHeading/SubHeading")
);

// Json
import mockMdiaPartnr from "@json/mediaPartner.json";

const LyMediaPartners = () => {
  const [gtMdiaPartnr, stMdiaPartnr] = useState(mockMdiaPartnr);

  const resMdiaPartnr = gtMdiaPartnr?.map((stDataRslt, i) => {
    return (
      <div key={i + 1} className="flex items-center justify-center px-4">
        <>
          <Link
            className="outline-none"
            href={stDataRslt.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="object-center object-cover h-auto w-auto"
              src={stDataRslt.images}
              alt={stDataRslt.alt}
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

export default LyMediaPartners;
