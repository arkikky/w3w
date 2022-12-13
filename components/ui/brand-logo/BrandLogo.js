import Link from "next/link";

const BrandLogo = ({ url, images, label }) => {
  return (
    <>
      <Link
        className="outline-none"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={images} alt={label} />
      </Link>
    </>
  );
};

export default BrandLogo;
