import React, { useState } from "react";
import { InputField } from "./InputField";
import parcelInformation from "../res/parcelInformation.json";
import { findOptimalParcel } from "../helperFunctions/findOptimalParcel";

const Form = () => {
  const [userInput, setUserInput] = useState({
    width: 10,
    length: 10,
    height: 10,
    weight: 10,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(findOptimalParcel(userInput, parcelInformation));
  };

  return (
    <>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <InputField
          placeholder="Height"
          unit="cm"
          name="height"
          onChange={(event) =>
            setUserInput({ ...userInput, height: event.target.value })
          }
        />
        <InputField
          placeholder="Width"
          unit="cm"
          name="width"
          onChange={(event) =>
            setUserInput({ ...userInput, width: event.target.value })
          }
        />
        <InputField
          placeholder="Length"
          unit="cm"
          name="length"
          onChange={(event) =>
            setUserInput({ ...userInput, length: event.target.value })
          }
        />

        <InputField
          placeholder="kg"
          unit="kg"
          name="kg"
          step="0.5"
          onChange={(event) =>
            setUserInput({ ...userInput, weight: event.target.value })
          }
        />
        <button className="w-64 p-1 bg-slate-600 hover:bg-slate-500 focus:bg-slate-600 text-slate-100 focus:text-slate-50 uppercase font-bold">
          Find best parcel price
        </button>
      </form>
    </>
  );
};

export default Form;
