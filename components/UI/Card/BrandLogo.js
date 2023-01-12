import getConfig from "next/config";
import Image from "next/image";
import Link from "next/link";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import Card from "@styles/components/Card.module.css";

const BrandLogo = ({ url, images, alt, height, width }) => {
  const addUrl = url ? url : "";
  const addAlt = alt ? alt : `${publicRuntimeConfig.appName} (Brand LOGO)`;
  const addImgs = images ? images : (images = false);
  const addHeight = height ? height : (height = false);
  const addWitdth = width ? width : (width = false);

  return (
    <>
      <Link
        className={`${Card.bx} bg-grdients-black flex flex-col items-center justify-center outline-none px-4`}
        href={addUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {addImgs && (
          <Image
            className="img-fill w-max xl:w-revert-layer"
            src={addImgs}
            alt={addAlt}
            placeholder="blur"
            blurDataURL={`${publicRuntimeConfig.blurData}`}
            sizes="(min-width: 1280px) 100vw,
            (min-width: 1024px) 159vw,
            (min-width: 640px) 197vw,
            483vw"
            height={addHeight}
            width={addWitdth}
            priority
          />
        )}
      </Link>
    </>
  );
};

export default BrandLogo;
