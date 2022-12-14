import Link from "next/link";
import Image from "next/legacy/image";

// Css
import Card from "../../../styles/components/Card.module.css";

const BoxBrandLogo = ({ url, images, label, h, w }) => {
  return (
    <>
      <Link
        className={
          Card.bx +
          " " +
          "bg-grdients-black flex flex-col items-center justify-center outline-none px-4"
        }
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={images}
          alt={label}
          height={h}
          width={w}
          quality="70"
        />
      </Link>
    </>
  );
};

export default BoxBrandLogo;
