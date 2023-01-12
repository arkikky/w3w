const SubHeading = ({ className, title, children }) => {
  const defltClass = `relative`;

  const addClassName = className
    ? `${defltClass} ${className}`
    : `${defltClass}`;

  const addTitle = title ? title : (title = false);

  return (
    <>
      <div className={`${addClassName}`}>
        {addTitle && (
          <h1 className="text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold text-center uppercase">
            {addTitle}
          </h1>
        )}
        {children && <div>{children}</div>}
      </div>
    </>
  );
};

export default SubHeading;
