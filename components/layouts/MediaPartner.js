// Ui
import BrandLogoItems from "../ui/brand-logo/BrandLogo";

// Sections
import SubHeading from "../sections/SubHeading";

// Json
import { useState } from "react";
import mockMediaPartner from "../../utils/media-partner.json";

const MediaPartners = () => {
  const [posts, setPosts] = useState(mockMediaPartner);

  return (
    <>
      <section
        id="mediaPartners"
        className="grid grid-cols-4 sm:grid-cols-4 my-20 sm:my-24 lg:mt-[140px] lg:mb-[104px] px-0 sm:px-4"
      >
        <SubHeading
          className="flex flex-col sm:flex-row items-center justify-between mb-15"
          title="Media Partners"
          classNameLabel="mt-2 mb-auto sm:my-auto"
          label="Coming soon!"
        ></SubHeading>
        <div className="col-span-full">
          <div className="grid grid-cols-12 gap-y-15">
            {posts.map((data) => (
              <div
                key={data.id}
                className="col-span-6 sm:col-span-3 xl:col-span-2 flex items-center justify-center px-4"
              >
                <BrandLogoItems {...data}></BrandLogoItems>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaPartners;
