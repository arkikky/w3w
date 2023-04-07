import React from "react";

const Container = ({ className = null, children }) => {
  const dfltClass = `container`;
  const addClassName = className ? `${dfltClass} ${className}` : `${dfltClass}`;

  return (
    <>
      <div className={`${addClassName}`}>{children}</div>
    </>
  );
};

export default Container;
