import Link from "next/link";

const ButtonsOpenLink = ({
  label,
  url,
  className,
  type,
  size,
  position
}) => {
  const addClassName = className ? className : "";

  const addSize =
    size === "base"
      ? "btn-sm sm:btn-base"
      : size === "sm"
      ? "btn-xs sm:btn-sm"
      : size
      ? size
      : "";

  const btnPrimary = "btn-primary";
  const btnOtlneWhite = "btn-outline-white bg-white/40 text-white";

  const addPosition =
    position === "center"
      ? "mx-auto"
      : position === "left"
      ? "mr-auto"
      : position === "right"
      ? "ml-auto"
      : "";

  return (
    <>
      <Link
        className={`btn ${
          type === "btn-primary"
            ? btnPrimary
            : type === "btn-outline-white"
            ? btnOtlneWhite
            : ""
        } ${addSize} btn-square outline-none uppercase ${addPosition} ${addClassName}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </Link>
    </>
  );
};

export default ButtonsOpenLink;
