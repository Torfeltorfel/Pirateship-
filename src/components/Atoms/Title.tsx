import React, { FC } from "react";

interface TitleProps {
  headingLevel: any;
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ headingLevel, children }) => {
  const Title = headingLevel;
  return (
    <Title className="font-bold text-xl text-slate-800 m-auto capitalize">
      {children}
    </Title>
  );
};

export default Title;
