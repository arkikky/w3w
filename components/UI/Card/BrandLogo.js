import Image from "next/legacy/image";
import Link from "next/link";

// Css
import Card from "@styles/components/Card.module.css";

const BrandLogo = ({ url, images, alt, height, width }) => {
  const addUrl = url ? url : "";
  const addAlt = alt ? alt : `${process.env.NEXT_PUBLIC_APP_NAME} (Brand LOGO)`;
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
            src={addImgs}
            alt={addAlt}
            height={addHeight}
            width={addWitdth}
          />
        )}
      </Link>
    </>
  );
};

export default BrandLogo;
