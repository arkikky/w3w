import getConfig from "next/config";
import Image from "next/legacy/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css

const ImagesFill = ({ className, src, alt, priority = false }) => {
  const defltClass = `flex relative`;
  const addClassName = className
    ? `${defltClass} ${className}`
    : `${defltClass}`;

  const addImags = src
    ? src
    : `${publicRuntimeConfig.staticFolder}/thumbnail-380x216.png`;
  const addImagsAlt = alt
    ? alt
    : `${publicRuntimeConfig.appName} (Images Fill)`;

  return (
    <>
      {priority === false && (
        <div className={`${addClassName}`}>
          <Image
            className={``}
            alt={addImagsAlt}
            src={addImags}
            layout={"fill"}
            objectFit={"cover"}
            objectPosition={"center"}
          />
        </div>
      )}

      {priority === true && (
        <div className={`${addClassName}`}>
          <Image
            className={``}
            alt={addImagsAlt}
            src={addImags}
            layout={"fill"}
            objectFit={"cover"}
            objectPosition={"center"}
            priority
          />
        </div>
      )}
    </>
  );
};

export default ImagesFill;
