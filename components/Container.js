const Container = ({ className, children }) => {
  const defltClass = `container`;

  const addClassName = className
    ? `${defltClass} ${className}`
    : `${defltClass}`;

  return (
    <>
      <div className={`${addClassName}`}>{children}</div>
    </>
  );
};

export default Container;
