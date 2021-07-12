import React from "react";

const Cover = ({ children, template }) => {
  return (
    <section className={`cover ${template}`}>
      <div className="cover-container">{children}</div>
    </section>
  );
};

export default Cover;
