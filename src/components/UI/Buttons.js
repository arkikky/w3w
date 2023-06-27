import React from "react";
import Link from "next/link";

const Buttons = ({
  typeBtn = "btn",
  className,
  url,
  type = "button",
  label,
  variants,
  size = null,
  rounded = null,
  text,
  ariaLabel = null,
  position = null,
  withIcons = false,
  positionIcons = "left",
  children,
}) => {
  const addUrl = url ? url : "";

  const addVariants =
    variants === "btn-primary"
      ? "btn-primary"
      : variants === "btn-subtle"
      ? "btn-subtle"
      : variants === "btn-white"
      ? "btn-white"
      : variants === "btn-outline-primary"
      ? "btn-outline-primary"
      : variants === "btn-outline-white"
      ? "btn-outline-white bg-white/40"
      : "btn-white";

  const addSize =
    size === "base"
      ? "btn btn-base"
      : size === "xs"
      ? "btn btn-xs"
      : size === "sm"
      ? "btn btn-sm"
      : size === "lg"
      ? "btn sm:btn-lg"
      : size
      ? size
      : "btn btn-base";

  const addRounded =
    rounded === "base"
      ? ""
      : rounded === "pill"
      ? "btn-pill"
      : rounded === "square"
      ? "btn-square"
      : "";

  const addPosition =
    position === "center"
      ? "mx-auto"
      : position === "left"
      ? "mr-auto"
      : position === "right"
      ? "ml-auto"
      : "m-0";

  const addText =
    text === "uppercase"
      ? "uppercase"
      : text === "capitalize"
      ? "capitalize"
      : text === "lowercase"
      ? "lowercase"
      : "capitalize";

  const addAriaLabel = ariaLabel ? ariaLabel : (ariaLabel = "btnCompnts");

  const addTypeBtn = type ? type : "button";

  const defltClass = `${addSize} ${addVariants} ${addRounded} ${addText} ${addPosition}`;
  const addClassName = className
    ? `${defltClass} ${className}`
    : `${defltClass}`;

  return (
    <>
      {/* Buttons (Default) */}
      {typeBtn === "btn" && withIcons == false && (
        <button
          className={`${addClassName}`}
          aria-label={addAriaLabel}
          aria-labelledby={addAriaLabel}
          type={addTypeBtn}
          role="button"
        >
          {label}
        </button>
      )}

      {/* Buttons (Status Disabled) */}
      {typeBtn === "btn-disabled" && withIcons == false && (
        <button
          className={`${addClassName} disabled`}
          aria-label={addAriaLabel}
          aria-labelledby={addAriaLabel}
          type={addTypeBtn}
          role="button"
          disabled
        >
          {label}
        </button>
      )}

      {/* Buttons (Status Disabled (Position Icons in Left)) */}
      {typeBtn === "btn-disabled" &&
        withIcons == true &&
        positionIcons == "left" && (
          <button
            className={`${addClassName}`}
            aria-label={addAriaLabel}
            aria-labelledby={addAriaLabel}
            type={addTypeBtn}
            role="button"
            disabled
          >
            {children}
            {label}
          </button>
        )}

      {/* Buttons (Status Disabled (Position Icons in Right)) */}
      {typeBtn === "btn-disabled" &&
        withIcons == true &&
        positionIcons == "right" && (
          <button
            className={`${addClassName}`}
            aria-label={addAriaLabel}
            aria-labelledby={addAriaLabel}
            type={addTypeBtn}
            role="button"
            disabled
          >
            {label}
            {children}
          </button>
        )}

      {/* Buttons With Icons (Position Icons in Left) */}
      {typeBtn === "btn" &&
        withIcons == true &&
        positionIcons == "left" && (
          <button
            className={`${addClassName}`}
            aria-label={addAriaLabel}
            aria-labelledby={addAriaLabel}
            type={addTypeBtn}
            role="button"
          >
            {children}
            {label}
          </button>
        )}

      {/* Buttons With Icons (Position Icons in Right) */}
      {typeBtn === "btn" &&
        withIcons == true &&
        positionIcons == "right" && (
          <button
            className={`${addClassName}`}
            aria-label={addAriaLabel}
            aria-labelledby={addAriaLabel}
            type={addTypeBtn}
            role="button"
          >
            {label}
            {children}
          </button>
        )}

      {/* Buttons (Link) */}
      {typeBtn === "btn-link" && withIcons == false && (
        <Link className="outline-none hocus:outline-none" href={addUrl}>
          <button
            className={`${addClassName}`}
            aria-label={addAriaLabel}
            aria-labelledby={addAriaLabel}
            type={addTypeBtn}
            role="button"
          >
            {label}
          </button>
        </Link>
      )}

      {/* Buttons Link With Icons (Position Icons in Left) */}
      {typeBtn === "btn-link" &&
        withIcons == true &&
        positionIcons == "left" && (
          <Link className="outline-none hocus:outline-none" href={addUrl}>
            <button
              className={`${addClassName}`}
              aria-label={addAriaLabel}
              aria-labelledby={addAriaLabel}
              type={addTypeBtn}
              role="button"
            >
              {children}
              {label}
            </button>
          </Link>
        )}

      {/* Buttons Link With Icons (Position Icons in Right) */}
      {typeBtn === "btn-link" &&
        withIcons == true &&
        positionIcons == "right" && (
          <Link className="outline-none hocus:outline-none" href={addUrl}>
            <button
              className={`${addClassName}`}
              aria-label={addAriaLabel}
              aria-labelledby={addAriaLabel}
              type={addTypeBtn}
              role="button"
            >
              {label}
              {children}
            </button>
          </Link>
        )}

      {/* Buttons Blank Link (Open Link) */}
      {typeBtn === "btn-blank-link" && withIcons == false && (
        <Link
          className="outline-none hocus:outline-none"
          href={addUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className={`${addClassName}`}
            aria-label={addAriaLabel}
            aria-labelledby={addAriaLabel}
            type={addTypeBtn}
            role="button"
          >
            {label}
          </button>
        </Link>
      )}

      {/* Buttons Blank Link With Icons (Position Icons in Left) */}
      {typeBtn === "btn-blank-link" &&
        withIcons == true &&
        positionIcons == "left" && (
          <Link
            className="outline-none hocus:outline-none"
            href={addUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`${addClassName}`}
              aria-label={addAriaLabel}
              aria-labelledby={addAriaLabel}
              type={addTypeBtn}
              role="button"
            >
              {children}
              {label}
            </button>
          </Link>
        )}

      {/* Buttons Blank Link With Icons (Position Icons in Right) */}
      {typeBtn === "btn-blank-link" &&
        withIcons == true &&
        positionIcons == "right" && (
          <Link
            className="outline-none hocus:outline-none"
            href={addUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`${addClassName}`}
              aria-label={addAriaLabel}
              aria-labelledby={addAriaLabel}
              type={addTypeBtn}
              role="button"
            >
              {label}
              {children}
            </button>
          </Link>
        )}
    </>
  );
};

export default Buttons;
