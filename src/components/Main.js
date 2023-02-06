const Main = ({ className, children }) => {
  const defltClass = `relative`;

  const addClassName = className
    ? `${defltClass} ${className}`
    : `${defltClass}`;

  return (
    <>
      <main className={`${addClassName}`}>{children}</main>
    </>
  );
};

export default Main;
