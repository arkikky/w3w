import Link from "next/link";

const PostLink = ({
  typePost = "base",
  className,
  url,
  title,
  withIcons = false,
  positionIcons = "left",
  children,
}) => {
  const defltClass =
    withIcons == true
      ? `flex flex-row items-center text-black-100 text-body-base font-semibold outline-none hocus:outline-none transition duartion-300 ease-in-out`
      : withIcons == false
      ? ``
      : (withIcons = "");

  const addClassName = className
    ? `${defltClass} ${className}`
    : `${defltClass}`;

  const addUrl = url ? url : "";
  const addTitle = title ? title : "This Post Link";

  return (
    <>
      {/* PostLink (Default) */}
      {typePost === "base" && withIcons == false && children === null && (
        <Link
          className={`outline-none hocus:outline-none ${addClassName}`}
          href={addUrl}
        >
          {addTitle}
        </Link>
      )}

      {typePost === "base" && withIcons == false && children && (
        <Link
          className={`outline-none hocus:outline-none ${addClassName}`}
          href={addUrl}
        >
          {children}
        </Link>
      )}

      {/* PostLink With Icons (Position Icons in Left) */}
      {typePost == "base" && withIcons == true && positionIcons == "left" && (
        <Link
          className={`outline-none hocus:outline-none ${addClassName}`}
          href={addUrl}
        >
          {children} {addTitle}
        </Link>
      )}

      {/* PostLink With Icons (Position Icons in Right) */}
      {typePost == "base" && withIcons == true && positionIcons == "right" && (
        <Link
          className={`outline-none hocus:outline-none ${addClassName}`}
          href={addUrl}
        >
          {addTitle} {children}
        </Link>
      )}

      {/* PostLink (With Blank Link) */}
      {typePost === "blank-link" && withIcons == false && children === null && (
        <Link
          className={`outline-none hocus:outline-none ${addClassName}`}
          href={addUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {addTitle}
        </Link>
      )}

      {typePost === "blank-link" && withIcons == false && children && (
        <Link
          className={`outline-none hocus:outline-none ${addClassName}`}
          href={addUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      )}

      {/* PostLink With Icons (Position Icons in Left) */}
      {typePost === "blank-link" &&
        withIcons == true &&
        positionIcons == "left" && (
          <Link
            className={`outline-none hocus:outline-none ${addClassName}`}
            href={addUrl}
            prefetch={false}
            passHref
          >
            {children} {addTitle}
          </Link>
        )}

      {/* PostLink With Icons (Position Icons in Right) */}
      {typePost === "blank-link" &&
        withIcons == true &&
        positionIcons == "right" && (
          <Link
            className={`outline-none hocus:outline-none ${addClassName}`}
            href={addUrl}
            prefetch={false}
            passHref
          >
            {addTitle} {children}
          </Link>
        )}
    </>
  );
};

export default PostLink;
