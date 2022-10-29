import React, { useState } from "react";
import { InputField } from "./Atoms/InputField";
import parcelInformation from "../res/parcelInformation.json";
import { findOptimalParcels } from "../helperFunctions/findOptimalParcel";
import Title, { titleSizes } from "./Atoms/Title";
import ListItems from "./Atoms/ListItems";
import Button from "./Atoms/Button";
import Parcel from "../res/parcel.types";

const RateCalculator = () => {
  const [optimalParcel, setOptimalParcel] = useState<Parcel[]>([]);
  const [error, setError] = useState("");
  const [userInput, setUserInput] = useState({
    width: 10,
    length: 10,
    height: 10,
    weight: 10,
  });
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setOptimalParcel(findOptimalParcels(userInput, parcelInformation));
  };
  const handleChange =
    (unit: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      //This is a very very basic validation, in which errors don't persist if another input field is handled
      //To make sure that the error persist, ideally next to the field, the fields require states to which the error could be passed. I left this out due to time restrictions
      const pattern = /\d{1,}/gi;
      if (pattern.test(event.target.value)) {
        setUserInput({ ...userInput, [unit]: +event.target.value });
        setError("");
      } else {
        setError("Input Value not correct");
      }
    };

  return (
    <div className="rateCalculator">
      <div className="inputForm">
        <Title headingLevel={titleSizes.h1}>get your parcel</Title>
        <p className="text-xs text-center text-rose-600">{error}</p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <InputField
            placeholder="e.g. 17cm"
            unit="cm"
            id="height"
            name="Height"
            maxValue={120}
            onChange={handleChange("height")}
          />
          <InputField
            placeholder="e.g. 23cm"
            unit="cm"
            id="width"
            name="Width"
            maxValue={60}
            onChange={handleChange("width")}
          />
          <InputField
            placeholder="e.g. 20cm"
            unit="cm"
            id="length"
            name="Length"
            maxValue={60}
            onChange={handleChange("length")}
          />

          <InputField
            placeholder="e.g. 10kg"
            unit="kg"
            id="weight"
            name="Weight"
            step={0.5}
            maxValue={31.5}
            onChange={handleChange("weight")}
          />
          <Button>get best parcel</Button>
        </form>
      </div>
      {Object.keys(optimalParcel).length > 0 && (
        <ListItems optimalParcels={optimalParcel}>your best choice</ListItems>
      )}
    </div>
  );
};

export default RateCalculator;
