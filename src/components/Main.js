import React from "react";

const Main = ({ className = null, children }) => {
  const dfltClass = `relative`;
  const addClassName = className ? `${dfltClass} ${className}` : `${dfltClass}`;

  return (
    <>
      <main className={`${addClassName}`}>{children}</main>
    </>
  );
};

export default Main;
