const SubHeading = ({ className, title, children }) => {
  const addClassName = className ? className : "";

  return (
    <>
      <div className={`relative ${addClassName}`}>
        {title && (
          <h1 className="text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold text-center uppercase">
            {title}
          </h1>
        )}
        {children && <div>{children}</div>}
      </div>
    </>
  );
};

export default SubHeading;
