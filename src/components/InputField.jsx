import React from "react";

export const InputField = ({ placeholder, unit, onChange, minValue }) => {
  return (
    <div className="flex flex-row justify-between relative">
      <input
        type="number"
        min={minValue}
        max="100"
        placeholder={placeholder}
        required={true}
        className="border-2 p-1 flex grow"
        controls={false}
        onChange={onChange}
      />
      <span className="absolute inset-y-1 right-0 border-l-1 mr-2 text-slate-400">
        {unit}
      </span>
    </div>
  );
};
