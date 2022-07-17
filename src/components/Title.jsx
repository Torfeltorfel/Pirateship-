import React from "react";

const Title = ({ headingLevel, children }) => {
  const Title = headingLevel;
  return (
    <Title className="font-bold text-xl text-slate-800 m-auto capitalize">
      {children}
    </Title>
  );
};

export default Title;
