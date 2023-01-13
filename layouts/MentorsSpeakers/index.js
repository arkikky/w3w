import dynamic from "next/dynamic";

// Css
import Card from "@styles/components/Card.module.css";

// Ui - Components
const Buttons = dynamic(() => import("@components/UI/Buttons/Buttons"));
const SubHeading = dynamic(() =>
  import("@components/UI/SubHeading/SubHeading")
);

const LyMentorsSpeakers = () => {
  return (
    <>
      <section
        id="mentorsSpeakers"
        className="mentorSpekrs flex flex-col relative mt-15 sm:mt-24 lg:mt-[148px] px-0 sm:px-4"
      >
        <SubHeading
          className="flex flex-col items-center justify-center"
          title="Mentors and Speakers"
        >
          <Buttons
            typeBtn="btn-blank-link"
            className="text-xs lg:text-sm mt-1.5 sm:mt-3 py-2 sm:py-3 lg:py-3 px-3 sm:px-6 lg:px-6"
            url="https://e7bao9msf39.typeform.com/to/wmk5DUM2"
            label="Apply here"
            variants="btn-primary"
            text="uppercase"
          />
        </SubHeading>

        <div
          className={`${Card.bxCntentShdow} supports-grid:grid grid-cols-8 gap-y-8 gap-x-4 sm:gap-x-6 xl:gap-x-8 mt-6 sm:mt-8 ${Card.on}`}
        >
          <div className="col-span-4 lg:col-span-2 px-2">
            <section className="supports-grid:grid gap-y-6 text-center blur-sm">
              <div>
                <div className="bg-gray-100 flex items-center justify-center mx-auto px-4 h-[152px] w-[152px]"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-white font-w3w-bold text-xl uppercase">
                  Title
                </h3>
                <span className="text-white font-fira-code text-base uppercase mt-2">
                  Entrepreneur & Angel Investor
                </span>
              </div>
            </section>
          </div>
          <div className="col-span-4 lg:col-span-2 px-2">
            <section className="supports-grid:grid gap-y-6 text-center blur-sm">
              <div>
                <div className="bg-gray-100 flex items-center justify-center mx-auto px-4 h-[152px] w-[152px]"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-white font-w3w-bold text-xl uppercase">
                  Title
                </h3>
                <span className="text-white font-fira-code text-base uppercase mt-2">
                  Entrepreneur & Angel Investor
                </span>
              </div>
            </section>
          </div>
          <div className="col-span-4 lg:col-span-2 px-2">
            <section className="supports-grid:grid gap-y-6 text-center blur-sm">
              <div>
                <div className="bg-gray-100 flex items-center justify-center mx-auto px-4 h-[152px] w-[152px]"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-white font-w3w-bold text-xl uppercase">
                  Title
                </h3>
                <span className="text-white font-fira-code text-base uppercase mt-2">
                  Entrepreneur & Angel Investor
                </span>
              </div>
            </section>
          </div>
          <div className="col-span-4 lg:col-span-2 px-2">
            <section className="supports-grid:grid gap-y-6 text-center blur-sm">
              <div>
                <div className="bg-gray-100 flex items-center justify-center mx-auto px-4 h-[152px] w-[152px]"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-white font-w3w-bold text-xl uppercase">
                  Title
                </h3>
                <span className="text-white font-fira-code text-base uppercase mt-2">
                  Entrepreneur & Angel Investor
                </span>
              </div>
            </section>
          </div>
          <div className="col-span-4 lg:col-span-2 px-2">
            <section className="supports-grid:grid gap-y-6 text-center blur-sm">
              <div>
                <div className="bg-gray-100 flex items-center justify-center mx-auto px-4 h-[152px] w-[152px]"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-white font-w3w-bold text-xl uppercase">
                  Title
                </h3>
                <span className="text-white font-fira-code text-base uppercase mt-2">
                  Entrepreneur & Angel Investor
                </span>
              </div>
            </section>
          </div>
          <div className="col-span-4 lg:col-span-2 px-2">
            <section className="supports-grid:grid gap-y-6 text-center blur-sm">
              <div>
                <div className="bg-gray-100 flex items-center justify-center mx-auto px-4 h-[152px] w-[152px]"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-white font-w3w-bold text-xl uppercase">
                  Title
                </h3>
                <span className="text-white font-fira-code text-base uppercase mt-2">
                  Entrepreneur & Angel Investor
                </span>
              </div>
            </section>
          </div>
          <div className="col-span-4 lg:col-span-2 hidden lg:flex lg:flex-col px-2">
            <section className="supports-grid:grid gap-y-6 text-center blur-sm">
              <div>
                <div className="bg-gray-100 flex items-center justify-center mx-auto px-4 h-[152px] w-[152px]"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-white font-w3w-bold text-xl uppercase">
                  Title
                </h3>
                <span className="text-white font-fira-code text-base uppercase mt-2">
                  Entrepreneur & Angel Investor
                </span>
              </div>
            </section>
          </div>
          <div className="col-span-4 lg:col-span-2 hidden lg:flex lg:flex-col px-2">
            <section className="supports-grid:grid gap-y-6 text-center blur-sm">
              <div>
                <div className="bg-gray-100 flex items-center justify-center mx-auto px-4 h-[152px] w-[152px]"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-white font-w3w-bold text-xl uppercase">
                  Title
                </h3>
                <span className="text-white font-fira-code text-base uppercase mt-2">
                  Entrepreneur & Angel Investor
                </span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default LyMentorsSpeakers;
