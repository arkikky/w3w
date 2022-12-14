const Buttons = ({
  label,
  className,
  variety,
  size,
  position,
  varietyBtn,
  type,
  idModal,
}) => {
  const addClassName = className ? className : "";

  const btnPrimary = "btn-primary";
  const btnOtlneWhite = "btn-outline-white bg-white/40 text-white";

  const addVariety =
    variety === "btn-primary"
      ? btnPrimary
      : variety === "btn-outline-white"
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
      {varietyBtn === "btn" && (
        <button
          className={`btn ${addVariety} ${addSize} btn-square outline-none uppercase ${addPosition} ${addClassName}`}
          type={type}
        >
          {label}
        </button>
      )}

      {varietyBtn === "btn-modal" && (
        <button
          className={`btn ${addVariety} ${addSize} btn-square outline-none uppercase ${addPosition} ${addClassName}`}
          type={type}
          data-bs-toggle="modal"
          data-bs-target={idModal}
        >
          {label}
        </button>
      )}
    </>
  );
};

export default Buttons;
