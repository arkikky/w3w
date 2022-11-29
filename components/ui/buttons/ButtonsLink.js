import Link from "next/link";

const ButtonsLink = ({
  label,
  url,
  className,
  type,
  center,
  left,
  right,
  blank,
}) => {
  const addClassName = className ? className : "";

  const btnPrimary = "btn-primary";
  const btnOtlneWhite = "btn-outline-white bg-white/40 text-white";

  return (
    <>
      {/* {type === "outline-white" && (
        <Link
          className={`btn ${btnOtlneWhite} btn-sm sm:btn-base btn-square uppercase ${
            center ? "mx-auto" : left ? "mr-auto" : right ? "ml-auto" : ""
          }`}
          href="https://e7bao9msf39.typeform.com/web3week"
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </Link>
      )} */}
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
      >
        {label}
      </Link>
    </>
  );
};

export default ButtonsLink;
