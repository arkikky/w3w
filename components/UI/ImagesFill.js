import React from "react";
import Image from "next/legacy/image";

const ImagesFill = ({ className, src, alt, priority = false }) => {
  const defltClass = `relative`;
  const addClassName = className
    ? `${defltClass} ${className}`
    : `${defltClass}`;

  const addImags = src;
  const addImagsAlt = alt ? alt : "Coinvestasi (Images - Alt)";

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
            placeholder="blur"
            blurDataURL={addImags}
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
