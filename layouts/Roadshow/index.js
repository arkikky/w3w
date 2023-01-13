import { useState } from "react";
import dynamic from "next/dynamic";

// Ui - Components
const CardRoadshow = dynamic(() => import("@components/UI/Card/Roadshow"));

// Json
import mockRdshow from "@json/roadshow.json";

const Roashow = () => {
  const [gtRdshow, stRdshow] = useState(mockRdshow);

  const resFrmCretor = gtRdshow?.map((stDataRslt) => (
    <div key={stDataRslt.id} className="col-span-full lg:col-span-4">
      <>
        <CardRoadshow {...stDataRslt}></CardRoadshow>
      </>
    </div>
  ));

  return (
    <>
      <section
        id="roadshow"
        className="supports-grid:grid grid-cols-12 gap-y-4 sm:gap-y-6 lg:gap-y-0 gap-x-4 lg:gap-x-6 mb-[50px] px-0 sm:px-4"
      >
        {resFrmCretor}
      </section>
    </>
  );
};

export default Roashow;
