import { useState } from "react";
import dynamic from "next/dynamic";

// Ui - Components
const BrandLogo = dynamic(() => import("@components/UI/Card/BrandLogo"));

// Json
import mockFrmCretor from "@json/fromCreator.json";

const LyFromCreator = () => {
  const [gtFrmCretor, stFrmCretor] = useState(mockFrmCretor);

  const resFrmCretor = gtFrmCretor?.map((stDataRslt, i) => (
    <div
      key={i + 1}
      className="col-span-full sm:col-span-6 lg:col-span-4 xl:col-span-4 grayscale hover:grayscale-0 transition duration-500 ease-in-out"
    >
      <>
        <BrandLogo {...stDataRslt}></BrandLogo>
      </>
    </div>
  ));

  return (
    <>
      <section
        id="fromCreators"
        className="supports-grid:grid grid-cols-4 sm:grid-cols-4 my-20 lg:my-28 px-0 sm:px-4"
      >
        <div className="col-span-full xl:col-span-2 flex flex-col items-start xl:items-center">
          <div className="my-0 xl:my-auto">
            <h1 className="text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold uppercase pr-14">
              From the creators of
            </h1>
          </div>
        </div>
        <div className="col-span-full xl:col-span-2 mt-2 xl:mt-0">
          <p className="text-gray-500 font-fira-code text-sm lg:text-base font-normal leading-7 lg:leading-8 uppercase">
            Organised by{" "}
            <span className="text-primary">Indonesia Crypto Network</span>, is
            the largest cross channel web3 media group and agency in Indonesia
            and the go-to partner since 2016.
          </p>
        </div>
        {resFrmCretor && (
          <div className="col-span-full supports-grid:grid grid-cols-12 gap-y-4 sm:gap-y-6 xl:gap-y-8 gap-x-0 sm:gap-x-6 xl:gap-x-8 mt-6 sm:mt-8">
            {resFrmCretor}
          </div>
        )}
      </section>
    </>
  );
};

export default LyFromCreator;
