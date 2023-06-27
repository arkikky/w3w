import React, { useRef, useEffect } from "react";
import { Element } from "react-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import "@splidejs/react-splide/css";

// Ui - Components
import Buttons from "@components/UI/Buttons";

const LyBuildersJourney = () => {
  const elmntRefGrbScrll = useRef(null);

  useEffect(() => {
    const getGrbScrll = elmntRefGrbScrll.current;
    const setGrbScrll = getGrbScrll.splideRef.current;

    if (setGrbScrll && setGrbScrll.classList.contains("grbScrll")) {
      setGrbScrll.addEventListener("mousedown", (e) => {
        if (setGrbScrll.classList.contains("cursor-grab"))
          setGrbScrll.classList.remove("cursor-grab") &
            setGrbScrll.classList.add("cursor-grabbing");
      });
      setGrbScrll.addEventListener("mouseup", (e) => {
        if (setGrbScrll.classList.contains("cursor-grabbing"))
          setGrbScrll.classList.remove("cursor-grabbing") &
            setGrbScrll.classList.add("cursor-grab");
      });
      setGrbScrll.addEventListener("mouseleave", (e) => {
        if (setGrbScrll.classList.contains("cursor-grabbing"))
          setGrbScrll.classList.remove("cursor-grabbing") &
            setGrbScrll.classList.add("cursor-grab");
      });
    }
  }, []);

  return (
    <>
      <Element
        id="programs"
        className="flex flex-col px-0 sm:px-4"
        name="programs"
      >
        <h2 className="text-white font-w3w-bold text-xl sm:text-[32px] leading-[30px] sm:leading-[48px] text-center lg:text-left uppercase">
          BUILDERS JOURNEY
        </h2>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-0 gap-x-6 mt-8">
          <div className="col-span-full lg:col-span-4 xl:col-span-3 order-last lg:order-none px-4 sm:px-14 lg:px-0">
            <div className="flex items-center justify-center btn-outline-primary mt-20 lg:mt-0 h-[150px] lg:h-full">
              <Buttons
                typeBtn="btn-blank-link"
                url="https://bit.ly/w3wregistration"
                label="Participate now"
                variants="btn-primary"
                size="base"
                text="uppercase"
                position="center"
              />
            </div>
          </div>
          <div className="col-span-full lg:col-span-8 xl:col-span-9 order-1">
            <Splide
              ref={elmntRefGrbScrll}
              options={{
                type: "loop",
                updateOnMove: true,
                perMove: 1,
                autoHeight: true,
                perMove: 1,
                arrows: false,
                pagination: false,
                keyboard: true,
                autoplay: true,
                fixedWidth: "296px",
                gap: "32px",
                mediaQuery: "max",
                breakpoints: {
                  640: {
                    perPage: 1,
                    fixedWidth: false,
                    gap: "16px",
                    padding: { left: "16px", right: "16px" },
                  },
                  1013: {
                    perPage: 2,
                    fixedWidth: false,
                    pagination: true,
                    gap: "24px",
                    padding: { left: "24px", right: "24px" },
                  },
                },
              }}
              aria-label="Key Experiences"
              className="myKeyExperiences grbScrll splidePgintaionCutom cursor-grab splideGryscle pb-0"
            >
              <SplideSlide className="relative">
                <div className="flex flex-col text-center relative">
                  <div className="px-7">
                    <Image
                      className="object-cover object-center my-auto mx-auto h-auto min-h-[224px] max-h-[224px] w-auto"
                      src={`${publicRuntimeConfig.staticFolderImgs}/builders-journey/pitching-submissions.svg`}
                      alt={`${publicRuntimeConfig.appName} (Pitching Submissions - Builders Journey - Images)`}
                      height={244}
                      width={280}
                      quality="87"
                    />
                  </div>
                  <div className="flex flex-col mt-8">
                    <Buttons
                      label="26 April — 21 may"
                      variants="btn-outline-primary"
                      size="base"
                      text="uppercase"
                      rounded="pill"
                      position="center"
                      className="font-normal py-2 px-3 sm:px-4"
                    />
                    <h3 className="text-white font-fira-code text-base font-bold uppercase mt-3">
                      PITCHING SUBMISSIONS
                    </h3>
                    <p className="text-white font-fira-code text-base font-normal uppercase mt-3">
                      PARTICIPATE BY SUBMITTING YOUR WEB3 INNOVATIVE IDEAS
                      THROUGH OUR FORM. LIMITED TO 100 SUBMISSIONS ONLY.
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="relative">
                <div className="flex flex-col text-center relative">
                  <div className="px-7">
                    <Image
                      className="object-cover object-center my-auto mx-auto h-auto min-h-[224px] max-h-[224px] w-auto"
                      src={`${publicRuntimeConfig.staticFolderImgs}/builders-journey/activation-workshop.svg`}
                      alt={`${publicRuntimeConfig.appName} (Activation & Workshop - Builders Journey - Images)`}
                      height={244}
                      width={280}
                      quality="87"
                    />
                  </div>
                  <div className="flex flex-col mt-8">
                    <Buttons
                      label="12 April — 18 may"
                      variants="btn-outline-primary"
                      size="base"
                      text="uppercase"
                      rounded="pill"
                      position="center"
                      className="font-normal py-2 px-3 sm:px-4"
                    />
                    <h3 className="text-white font-fira-code text-base font-bold uppercase mt-3">
                      ACTIVATION & WORKSHOPS
                    </h3>
                    <p className="text-white font-fira-code text-base font-normal uppercase mt-3">
                      JOIN IN ONLINE DISCUSSIONS AND WORKSHOPS ON THE LATEST
                      WEB3 ADVANCEMENTS WITH WEB3 WEEKEND’S MENTORS.
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="relative">
                <div className="flex flex-col text-center relative">
                  <div className="px-7">
                    <Image
                      className="object-cover object-center my-auto mx-auto h-auto min-h-[224px] max-h-[224px] w-auto"
                      src={`${publicRuntimeConfig.staticFolderImgs}/builders-journey/close-submission-curation.svg`}
                      alt={`${publicRuntimeConfig.appName} (Close submission & Curation - Builders Journey - Images)`}
                      height={244}
                      width={280}
                      quality="87"
                    />
                  </div>
                  <div className="flex flex-col mt-8">
                    <Buttons
                      label="22 — 29 May"
                      variants="btn-outline-primary"
                      size="base"
                      text="uppercase"
                      rounded="pill"
                      position="center"
                      className="font-normal py-2 px-3 sm:px-4"
                    />
                    <h3 className="text-white font-fira-code text-base font-bold uppercase mt-3">
                      CLOSE SUBMISSION & CURATION
                    </h3>
                    <p className="text-white font-fira-code text-base font-normal uppercase mt-3">
                      Last chance to submit your web3 innovation! make sure your
                      idea is relevant & innovative.
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="relative">
                <div className="flex flex-col text-center relative">
                  <div className="px-7">
                    <Image
                      className="object-cover object-center my-auto mx-auto h-auto min-h-[224px] max-h-[224px] w-auto"
                      src={`${publicRuntimeConfig.staticFolderImgs}/builders-journey/coaching.svg`}
                      alt={`${publicRuntimeConfig.appName} (Coaching - Builders Journey - Images)`}
                      height={244}
                      width={280}
                      quality="87"
                    />
                  </div>
                  <div className="flex flex-col mt-8">
                    <Buttons
                      label="1 - 9 June"
                      variants="btn-outline-primary"
                      size="base"
                      text="uppercase"
                      rounded="pill"
                      position="center"
                      className="font-normal py-2 px-3 sm:px-4"
                    />
                    <h3 className="text-white font-fira-code text-base font-bold uppercase mt-3">
                      COACHING
                    </h3>
                    <p className="text-white font-fira-code text-base font-normal uppercase mt-3">
                      GET DIRECT GUIDANCE FROM WEB3 WEEKEND’S COACHES AND TURN
                      YOUR IDEAS INTO A PRESENTABLE PROTOTYPES.
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="relative">
                <div className="flex flex-col text-center relative">
                  <div className="px-7">
                    <Image
                      className="object-cover object-center my-auto mx-auto h-auto min-h-[224px] max-h-[224px] w-auto"
                      src={`${publicRuntimeConfig.staticFolderImgs}/builders-journey/demo-day.svg`}
                      alt={`${publicRuntimeConfig.appName} (Demo Day - Builders Journey - Images)`}
                      height={244}
                      width={280}
                      quality="87"
                    />
                  </div>
                  <div className="flex flex-col mt-8">
                    <Buttons
                      label="17 June"
                      variants="btn-outline-primary"
                      size="base"
                      text="uppercase"
                      rounded="pill"
                      position="center"
                      className="font-normal py-2 px-3 sm:px-4"
                    />
                    <h3 className="text-white font-fira-code text-base font-bold uppercase mt-3">
                      DEMO DAY
                    </h3>
                    <p className="text-white font-fira-code text-base font-normal uppercase mt-3">
                      GET DIRECT GUIDANCE FROM WEB3 WEEKEND’S COACHES AND TURN
                      YOUR IDEAS INTO A PRESENTABLE PROTOTYPES.
                    </p>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
            {/* <Swiper
              rewind={true}
              slidesPerView={1}
              spaceBetween={16}
              grabCursor={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              keyboard={{
                enabled: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },
                1024: {
                  slidesPerView: "auto",
                  spaceBetween: 32,
                  pagination: false,
                },
              }}
              modules={[Autoplay, Keyboard, Pagination]}
              className="myBuildersJourney swiperGrayscale swiperFix swiperPagination"
            >
              <SwiperSlide className="max-w-max lg:max-w-[296px]">
                <div className="flex flex-col text-center relative">
                  <div className="px-7">
                    <Image
                      className="object-cover object-center my-auto mx-auto h-auto min-h-[224px] max-h-[224px] w-auto"
                      src={`${publicRuntimeConfig.staticFolderImgs}/builders-journey/pitching-submissions.svg`}
                      alt={`${publicRuntimeConfig.appName} (Pitching Submissions - Builders Journey - Images)`}
                      height={244}
                      width={280}
                      quality="87"
                    />
                  </div>
                  <div className="flex flex-col mt-8">
                    <Buttons
                      label="26 April — 21 may"
                      variants="btn-outline-primary"
                      size="base"
                      text="uppercase"
                      rounded="pill"
                      position="center"
                      className="font-normal py-2 px-3 sm:px-4"
                    />
                    <h3 className="text-white font-fira-code text-base font-bold uppercase mt-3">
                      PITCHING SUBMISSIONS
                    </h3>
                    <p className="text-white font-fira-code text-base font-normal uppercase mt-3">
                      PARTICIPATE BY SUBMITTING YOUR WEB3 INNOVATIVE IDEAS
                      THROUGH OUR FORM. LIMITED TO 100 SUBMISSIONS ONLY.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="max-w-max lg:max-w-[296px]">
                <div className="flex flex-col text-center relative">
                  <div className="px-7">
                    <Image
                      className="object-cover object-center my-auto mx-auto h-auto min-h-[224px] max-h-[224px] w-auto"
                      src={`${publicRuntimeConfig.staticFolderImgs}/builders-journey/activation-workshop.svg`}
                      alt={`${publicRuntimeConfig.appName} (Activation & Workshop - Builders Journey - Images)`}
                      height={244}
                      width={280}
                      quality="87"
                    />
                  </div>
                  <div className="flex flex-col mt-8">
                    <Buttons
                      label="12 April — 18 may"
                      variants="btn-outline-primary"
                      size="base"
                      text="uppercase"
                      rounded="pill"
                      position="center"
                      className="font-normal py-2 px-3 sm:px-4"
                    />
                    <h3 className="text-white font-fira-code text-base font-bold uppercase mt-3">
                      ACTIVATION & WORKSHOPS
                    </h3>
                    <p className="text-white font-fira-code text-base font-normal uppercase mt-3">
                      JOIN IN ONLINE DISCUSSIONS AND WORKSHOPS ON THE LATEST
                      WEB3 ADVANCEMENTS WITH WEB3 WEEKEND’S MENTORS.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="max-w-max lg:max-w-[296px]">
                <div className="flex flex-col text-center relative">
                  <div className="px-7">
                    <Image
                      className="object-cover object-center my-auto mx-auto h-auto min-h-[224px] max-h-[224px] w-auto"
                      src={`${publicRuntimeConfig.staticFolderImgs}/builders-journey/close-submission-curation.svg`}
                      alt={`${publicRuntimeConfig.appName} (Close submission & Curation - Builders Journey - Images)`}
                      height={244}
                      width={280}
                      quality="87"
                    />
                  </div>
                  <div className="flex flex-col mt-8">
                    <Buttons
                      label="22 — 29 May"
                      variants="btn-outline-primary"
                      size="base"
                      text="uppercase"
                      rounded="pill"
                      position="center"
                      className="font-normal py-2 px-3 sm:px-4"
                    />
                    <h3 className="text-white font-fira-code text-base font-bold uppercase mt-3">
                      CLOSE SUBMISSION & CURATION
                    </h3>
                    <p className="text-white font-fira-code text-base font-normal uppercase mt-3">
                      Last chance to submit your web3 innovation! make sure your
                      idea is relevant & innovative.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="max-w-max lg:max-w-[296px]">
                <div className="flex flex-col text-center relative">
                  <div className="px-7">
                    <Image
                      className="object-cover object-center my-auto mx-auto h-auto min-h-[224px] max-h-[224px] w-auto"
                      src={`${publicRuntimeConfig.staticFolderImgs}/builders-journey/coaching.svg`}
                      alt={`${publicRuntimeConfig.appName} (Coaching - Builders Journey - Images)`}
                      height={244}
                      width={280}
                      quality="87"
                    />
                  </div>
                  <div className="flex flex-col mt-8">
                    <Buttons
                      label="1 - 9 June"
                      variants="btn-outline-primary"
                      size="base"
                      text="uppercase"
                      rounded="pill"
                      position="center"
                      className="font-normal py-2 px-3 sm:px-4"
                    />
                    <h3 className="text-white font-fira-code text-base font-bold uppercase mt-3">
                      COACHING
                    </h3>
                    <p className="text-white font-fira-code text-base font-normal uppercase mt-3">
                      GET DIRECT GUIDANCE FROM WEB3 WEEKEND’S COACHES AND TURN
                      YOUR IDEAS INTO A PRESENTABLE PROTOTYPES.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="max-w-max lg:max-w-[296px]">
                <div className="flex flex-col text-center relative">
                  <div className="px-7">
                    <Image
                      className="object-cover object-center my-auto mx-auto h-auto min-h-[224px] max-h-[224px] w-auto"
                      src={`${publicRuntimeConfig.staticFolderImgs}/builders-journey/demo-day.svg`}
                      alt={`${publicRuntimeConfig.appName} (Demo Day - Builders Journey - Images)`}
                      height={244}
                      width={280}
                      quality="87"
                    />
                  </div>
                  <div className="flex flex-col mt-8">
                    <Buttons
                      label="9 June"
                      variants="btn-outline-primary"
                      size="base"
                      text="uppercase"
                      rounded="pill"
                      position="center"
                      className="font-normal py-2 px-3 sm:px-4"
                    />
                    <h3 className="text-white font-fira-code text-base font-bold uppercase mt-3">
                      DEMO DAY
                    </h3>
                    <p className="text-white font-fira-code text-base font-normal uppercase mt-3">
                      GET DIRECT GUIDANCE FROM WEB3 WEEKEND’S COACHES AND TURN
                      YOUR IDEAS INTO A PRESENTABLE PROTOTYPES.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper> */}
          </div>
        </div>
      </Element>
    </>
  );
};

export default LyBuildersJourney;
