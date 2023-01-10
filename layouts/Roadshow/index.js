import { useState } from "react";
import dynamic from "next/dynamic";

// Ui - Components
const CardRoadshow = dynamic(() => import("@components/UI/Card/Roadshow"), {
  suspense: true,
});

// Json
import mockRdshow from "@json/roadshow.json";

const Roashow = () => {
  const [gtRdshow, stRdshow] = useState(mockRdshow);

  return (
    <>
      <div
        id="roadshow"
        className="supports-grid:grid grid-cols-12 gap-y-4 sm:gap-y-6 lg:gap-y-0 gap-x-4 lg:gap-x-6 mb-[50px] px-0 sm:px-4"
      >
        {gtRdshow.map((stDataRslt, i) => (
          <div key={i + 1} className="col-span-full lg:col-span-4">
            <CardRoadshow {...stDataRslt}></CardRoadshow>
          </div>
        ))}
      </div>
    </>
  );
};

export default Roashow;
