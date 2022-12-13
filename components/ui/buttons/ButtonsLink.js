import Link from "next/link";

const ButtonsLink = ({
  typeLink,
  className,
  url,
  label,
  variant,
  size,
  position,
}) => {
  const addClassName = className ? className : "";

  const btnPrimary = "btn-primary";
  const btnOtlneWhite = "btn-outline-white bg-white/40 text-white";

  const addVariant =
    variant === "btn-primary"
      ? btnPrimary
      : variant === "btn-outline-white"
      ? btnOtlneWhite
      : "";

  const addSize =
    size === "base"
      ? "btn-sm sm:btn-base"
      : size === "sm"
      ? "btn-xs sm:btn-sm"
      : size
      ? size
      : "";

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
      {typeLink === "link" && (
        <Link
          className={`btn ${addVariant} ${addSize} btn-square outline-none uppercase ${addPosition} ${addClassName}`}
          href={url}
        >
          {label}
        </Link>
      )}

      {typeLink === "link-blank" && (
        <Link
          className={`btn ${addVariant} ${addSize} btn-square outline-none uppercase ${addPosition} ${addClassName}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </Link>
      )}
    </>
  );
};

export default ButtonsLink;
