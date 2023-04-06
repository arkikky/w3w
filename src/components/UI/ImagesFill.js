import React from "react";
import getConfig from "next/config";
import Image from "next/legacy/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Static - Images Thumbnail
const Thumbnail = `${publicRuntimeConfig.thmbnlSze640vw}`;

const ImagesFill = ({ className, src, alt, priority = false }) => {
  const dfltClass = `relative`;
  const addClassName = className ? `${dfltClass} ${className}` : `${dfltClass}`;

  const addImags = src ? src : Thumbnail;
  const addImagsAlt = alt ? alt : `${publicRuntimeConfig.appName} (Images)`;

  return (
    <>
      {priority === false && (
        <div className={`${addClassName}`}>
          <Image
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
