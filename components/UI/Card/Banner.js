// Css
import Card from "@styles/components/Card.module.css";

const Banner = ({ id, title, description }) => {
  const addId = id ? id : "bnnerCompnent";
  const addTitle = title
    ? title
    : "3 CITIES, 1 WEEK, 1 CAREER CHANGING EVENT: WEB3 WEEKEND.";
  const addDescription = description
    ? description
    : "BRINGING TOGETHER DEVELOPERS, FOUNDERS, AND COMMUNITY BUILDERS FOCUSED ON BUILDING THE FUTURE OF WEB3.";

  return (
    <>
      <section
        id={addId}
        className={`${Card.bnner} ${Card.bnnerWide} flex flex-col items-center justify-center relative py-14`}
      >
        <div className={`${Card.bnnerWideContent} text-center mx-auto w-max`}>
          {addTitle && (
            <h1 className="text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold uppercase">
              {addTitle}
            </h1>
          )}
          {addDescription && (
            <p className="text-white font-fira-code text-sm lg:text-base font-normal leading-7 lg:leading-8 uppercase mt-2">
              {addDescription}
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Banner;
