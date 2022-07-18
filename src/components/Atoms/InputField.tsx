import React, { FC } from "react";

interface InputFieldProps {
  placeholder: string;
  unit: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  minValue?: number;
  maxValue?: number;
  step?: number;
  id: string;
  name: string;
}

export const InputField: FC<InputFieldProps> = ({
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
    <div className="">
      <label
        className="text-xs text-slate-500 font-bold left-6 bottom-7"
        htmlFor={id}
      >
        {`${name}*`}
      </label>
      <div className="flex flex-row justify-between relative">
        <input
          id={id}
          name={name}
          type="number"
          min={minValue}
          max={maxValue}
          placeholder={placeholder}
          required={true}
          className="border-2 p-1 flex grow"
          onChange={onChange}
          step={step}
        />

        <span className="absolute inset-y-1 right-0 border-l-1 mr-2 text-slate-700">
          {unit}
        </span>
      </div>
    </div>
  );
};
