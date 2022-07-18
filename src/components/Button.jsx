import React from "react";

export const Button = ({ children }) => {
  return (
    <button aria-label="Submit button" type="submit" className="button">
      {children}
    </button>
  );
};
