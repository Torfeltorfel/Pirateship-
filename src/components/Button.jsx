import React from "react";

export const Button = ({ children }) => {
  return (
    <button
      aria-label="Submit button"
      type="submit"
      className="w-64 p-1 bg-slate-600 hover:bg-slate-500 focus:bg-slate-600 text-slate-100 focus:text-slate-50 uppercase font-bold"
    >
      {children}
    </button>
  );
};
