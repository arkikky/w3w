// Ui
import BoxRoadshow from "../ui/card/Roadshow";

// Json
import { useState } from "react";
import mockRodshow from "../../utils/roadshow-in.json";

const RoashowIn = () => {
  const [posts, setPosts] = useState(mockRodshow);

  return (
    <>
      <div
        id="whatbethere"
        className="grid grid-cols-12 gap-y-4 sm:gap-y-6 lg:gap-y-0 gap-x-4 lg:gap-x-6 mb-[50px] px-0 sm:px-4"
      >
        {posts.map((data) => (
          <div key={data.id} className="col-span-full lg:col-span-4">
            <BoxRoadshow {...data}></BoxRoadshow>
          </div>
        ))}
      </div>
    </>
  );
};

export default RoashowIn;
