const SctionSubHeading = ({ className, classNameLabel, title, label }) => {
  const addClassName = className ? className : "";
  const addClassNameLabel = classNameLabel ? classNameLabel : "";

  return (
    <>
      <div className={`col-span-full ${addClassName}`}>
        <h1 className="text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold text-center uppercase">
          {title}
        </h1>
        <span
          className={`text-primary font-space-mono text-sm sm:text-xl uppercase ${addClassNameLabel}`}
        >
          {label}
        </span>
      </div>
    </>
  );
};

export default SctionSubHeading;
