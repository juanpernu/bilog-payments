import React from "react";

const Cover = ({ children }) => {
  return (
    <section className="cover">
      <div className="cover-container">{children}</div>
    </section>
  );
};

export default Cover;
