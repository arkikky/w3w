// Css
import Card from "../../../styles/components/Card.module.css";

const BnnerFollowUp = ({ id, title, desc }) => {
  return (
    <>
      <section
        id={id}
        className={
          Card.bnner +
          " " +
          Card.bnnerWide +
          " grid grid-cols-2 sm:grid-cols-4 items-center justify-center py-14"
        }
      >
        <div className="col-span-full">
          <div className={Card.bnnerWideContent + " text-center mx-auto w-max"}>
            <h1 className="text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold uppercase">
              {title}
            </h1>
            <p className="text-white font-space-mono text-sm lg:text-base font-normal leading-7 lg:leading-8 uppercase mt-2">
              {desc}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BnnerFollowUp;
