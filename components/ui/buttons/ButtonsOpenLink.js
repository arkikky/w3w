import Link from "next/link";

const ButtonsOpenLink = ({
  label,
  url,
  className,
  type,
  center,
  left,
  right,
}) => {
  const addClassName = className ? className : "";

  const btnPrimary = "btn-primary";
  const btnOtlneWhite = "btn-outline-white bg-white/40 text-white";

  return (
    <>
      <Link
        className={`btn ${
          type === "btn-primary"
            ? btnPrimary
            : type === "btn-outline-white"
            ? btnOtlneWhite
            : ""
        } btn-sm sm:btn-base btn-square outline-none uppercase ${
          center ? "mx-auto" : left ? "mr-auto" : right ? "ml-auto" : ""
        } ${addClassName}`}
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
