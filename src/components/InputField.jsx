import React from "react";

export const InputField = ({
  placeholder,
  unit,
  onChange,
  minValue,
  maxValue,
  step,
  id,
  name,
}) => {
  return (
    <div className="flex flex-row justify-between relative">
      <label htmlFor={id}>{name}</label>
      <input
        id={id}
        name={name}
        type="number"
        min={minValue}
        max={maxValue}
        placeholder={placeholder}
        required={true}
        className="border-2 p-1 flex grow"
        controls={false}
        onChange={onChange}
        step={step}
      />

      <span className="absolute inset-y-1 right-0 border-l-1 mr-2 text-slate-400">
        {unit}
      </span>
    </div>
  );
};
