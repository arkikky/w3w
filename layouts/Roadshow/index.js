import { useState } from "react";
import dynamic from "next/dynamic";

// Ui - Components
const CardRoadshow = dynamic(() => import("@components/UI/Card/Roadshow"));

// Json
import mockRdshow from "@json/roadshow.json";

const Roashow = () => {
  const [gtRdshow, stRdshow] = useState(mockRdshow);

  const resRdshowMble = gtRdshow[0].data?.map((stDataRslt) => (
    <div key={stDataRslt.id} className="col-span-full lg:col-span-4">
      <>
        <CardRoadshow {...stDataRslt}></CardRoadshow>
      </>
    </div>
  ));

  const resRdshowDsktop = gtRdshow[1].data?.map((stDataRslt) => (
    <div key={stDataRslt.id} className="col-span-full lg:col-span-4">
      <>
        <CardRoadshow {...stDataRslt}></CardRoadshow>
      </>
    </div>
  ));

  return (
    <>
      <section id="roadshow" className="flex flex-col">
        {resRdshowMble && (
          <div className="supports-grid:grid xl:hidden grid-cols-12 gap-y-4 gap-x-4 mb-[50px] px-0 sm:px-4">
            {resRdshowMble}
          </div>
        )}
        {resRdshowDsktop && (
          <div className="hidden xl:supports-grid:grid xl:grid-cols-12 xl:gap-y-6 lg:gap-y-0 gap-x-4 lg:gap-x-6 mb-[50px] px-0 sm:px-4">
            {resRdshowDsktop}
          </div>
        )}
      </section>
    </>
  );
};

export default Roashow;
