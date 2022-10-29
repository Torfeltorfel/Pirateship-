import React, { FC } from "react";

export enum titleSizes {
  h1 = "h1",
  h2 = "h2",
}

interface TitleProps {
  headingLevel: titleSizes;
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
