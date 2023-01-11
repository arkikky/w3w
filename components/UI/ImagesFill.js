import getConfig from "next/config";
import Image from "next/legacy/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import Imags from "@styles/components/Images.module.css";

const ImagesFill = ({ className, src, alt, imgAuto = false }) => {
  const defltClass = `${
    imgAuto == true ? `${Imags.imgsFill}` : imgAuto == false
  } flex relative`;
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
    </>
  );
};

export default ImagesFill;