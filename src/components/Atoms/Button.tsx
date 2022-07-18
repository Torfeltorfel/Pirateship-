import React, { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button aria-label="Submit button" type="submit" className="button">
      {children}
    </button>
  );
};

export default Button;
