import React from "react";
import Image from "next/legacy/image";

const ImagesFill = ({ className, src, alt, priority = false }) => {
  const lazyRoot = React.useRef(null);

  const defltClass = `relative`;
  const addClassName = className
    ? `${defltClass} ${className}`
    : `${defltClass}`;

  const addImags = src;
  const addImagsAlt = alt ? alt : "Coinvestasi (Images - Alt)";

  return (
    <>
      {priority === false && (
        <div ref={lazyRoot} className={`${addClassName}`}>
          <Image
            lazyRoot={lazyRoot}
            alt={addImagsAlt}
            src={addImags}
            layout={"fill"}
            objectFit={"cover"}
            objectPosition={"center"}
            placeholder="blur"
            blurDataURL={addImags}
            sizes="40vw"
          />
        </div>
      )}

      {priority === true && (
        <div ref={lazyRoot} className={`${addClassName}`}>
          <Image
            lazyRoot={lazyRoot}
            alt={addImagsAlt}
            src={addImags}
            layout={"fill"}
            objectFit={"cover"}
            objectPosition={"center"}
            sizes="40vw"
            priority
          />
        </div>
      )}
    </>
  );
};

export default ImagesFill;
