import { useState } from "react";

// Ui
import BxBrndLogo from "../sections/brand-logo/BoxBrandLogo";

// Json
import mockFromCreator from "../../utils/from-creator.json";

const FromCreators = () => {
  const [posts, setPosts] = useState(mockFromCreator);

  return (
    <>
      <section
        id="fromCreators"
        className="grid grid-cols-4 sm:grid-cols-4 my-10 sm:my-18 lg:my-28 px-0 sm:px-4"
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
        <div className="col-span-full grid grid-cols-12 gap-y-4 sm:gap-y-6 xl:gap-y-8 gap-x-0 sm:gap-x-6 xl:gap-x-8 mt-6 sm:mt-8">
          {posts.map((data) => (
            <div
              key={data.id}
              className="col-span-full sm:col-span-6 lg:col-span-4 xl:col-span-4 grayscale hover:grayscale-0 transition duration-500 ease-in-out"
            >
              <BxBrndLogo {...data}></BxBrndLogo>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FromCreators;
