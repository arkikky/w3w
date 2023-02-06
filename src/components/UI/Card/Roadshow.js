import getConfig from "next/config";
import dynamic from "next/dynamic";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import Card from "@styles/components/Card.module.css";

// Ui - Components
const ImagesFill = dynamic(() => import("@components/UI/ImagesFill"));

const Roadshow = ({ src, title, location, place, date }) => {
  const addImags = src ? src : "";
  const addTitle = title ? title : (title = false);
  const addLocation = location ? location : (location = false);
  // const addPlace = place ? place : (place = false);
  // const addDate = date ? date : (date = false);

  return (
    <>
      <article
        className={`${Card.bxRdshow} relative transition duration-300 ease-in-out`}
      >
        {addImags && (
          <ImagesFill
            className="h-full w-full"
            src={addImags}
            alt={`${publicRuntimeConfig.appName} (Roadshow)`}
            priority={true}
          />
        )}
        <div className={`${Card.bxRdshowContent}`}>
          <div className="text-left lg:text-center">
            {addTitle && (
              <h2 className="text-white font-w3w-bold text-lg sm:text-2xl xl:text-[32px] xl:leading-10 uppercase px-0 lg:px-6">
                {addTitle}
              </h2>
            )}
            {addLocation && (
              <span className="text-white/70 font-fira-code text-base font-medium uppercase">
                {addLocation}
              </span>
            )}
          </div>
        </div>
        {/* <div className={`${Card.bxRdshowContentLbel}`}>
          {addPlace && (
            <div className="inline-flex flex-row items-center text-white font-fira-code text-sm font-normal uppercase">
              <svg
                className="fill-current mr-1 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.54 22.351L11.61 22.391L11.638 22.407C11.749 22.467 11.8733 22.4985 11.9995 22.4985C12.1257 22.4985 12.25 22.467 12.361 22.407L12.389 22.392L12.46 22.351C12.8511 22.1191 13.2328 21.8716 13.604 21.609C14.5651 20.9305 15.463 20.1667 16.287 19.327C18.231 17.337 20.25 14.347 20.25 10.5C20.25 8.31196 19.3808 6.21354 17.8336 4.66637C16.2865 3.11919 14.188 2.25 12 2.25C9.81196 2.25 7.71354 3.11919 6.16637 4.66637C4.61919 6.21354 3.75 8.31196 3.75 10.5C3.75 14.346 5.77 17.337 7.713 19.327C8.53664 20.1667 9.43427 20.9304 10.395 21.609C10.7666 21.8716 11.1485 22.1191 11.54 22.351ZM12 13.5C12.7956 13.5 13.5587 13.1839 14.1213 12.6213C14.6839 12.0587 15 11.2956 15 10.5C15 9.70435 14.6839 8.94129 14.1213 8.37868C13.5587 7.81607 12.7956 7.5 12 7.5C11.2044 7.5 10.4413 7.81607 9.87868 8.37868C9.31607 8.94129 9 9.70435 9 10.5C9 11.2956 9.31607 12.0587 9.87868 12.6213C10.4413 13.1839 11.2044 13.5 12 13.5Z"
                />
              </svg>
              {addPlace}
            </div>
          )}
          {addDate && (
            <div className="inline-flex flex-row items-center text-white font-fira-code text-sm font-normal uppercase">
              <svg
                className="fill-current mr-1 h-5 w-5"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.41663 2.25C7.61554 2.25 7.8063 2.32902 7.94696 2.46967C8.08761 2.61032 8.16663 2.80109 8.16663 3V4.5H17.1666V3C17.1666 2.80109 17.2456 2.61032 17.3863 2.46967C17.5269 2.32902 17.7177 2.25 17.9166 2.25C18.1155 2.25 18.3063 2.32902 18.447 2.46967C18.5876 2.61032 18.6666 2.80109 18.6666 3V4.5H19.4166C20.2123 4.5 20.9753 4.81607 21.5379 5.37868C22.1006 5.94129 22.4166 6.70435 22.4166 7.5V18.75C22.4166 19.5456 22.1006 20.3087 21.5379 20.8713C20.9753 21.4339 20.2123 21.75 19.4166 21.75H5.91663C5.12098 21.75 4.35791 21.4339 3.79531 20.8713C3.2327 20.3087 2.91663 19.5456 2.91663 18.75V7.5C2.91663 6.70435 3.2327 5.94129 3.79531 5.37868C4.35791 4.81607 5.12098 4.5 5.91663 4.5H6.66663V3C6.66663 2.80109 6.74564 2.61032 6.8863 2.46967C7.02695 2.32902 7.21771 2.25 7.41663 2.25ZM20.9166 11.25C20.9166 10.8522 20.7586 10.4706 20.4773 10.1893C20.196 9.90804 19.8145 9.75 19.4166 9.75H5.91663C5.5188 9.75 5.13727 9.90804 4.85597 10.1893C4.57466 10.4706 4.41663 10.8522 4.41663 11.25V18.75C4.41663 19.1478 4.57466 19.5294 4.85597 19.8107C5.13727 20.092 5.5188 20.25 5.91663 20.25H19.4166C19.8145 20.25 20.196 20.092 20.4773 19.8107C20.7586 19.5294 20.9166 19.1478 20.9166 18.75V11.25Z"
                />
              </svg>
              {addDate}
            </div>
          )}
        </div> */}
      </article>
    </>
  );
};

export default Roadshow;
