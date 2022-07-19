import React, { useState } from "react";
import { InputField } from "./Atoms/InputField";
import parcelInformation from "../res/parcelInformation.json";
import { findOptimalParcel } from "../helperFunctions/findOptimalParcel";
import Title from "./Atoms/Title";
import ListItems from "./Atoms/ListItems";
import Button from "./Atoms/Button";

const RateCalculator = () => {
  const [optimalParcel, setOptimalParcel] = useState({});
  const [userInput, setUserInput] = useState({
    width: 10,
    length: 10,
    height: 10,
    weight: 10,
  });
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setOptimalParcel(findOptimalParcel(userInput, parcelInformation));
  };
  const handleChange =
    (unit: string) => (event: React.ChangeEvent<HTMLInputElement>) =>
      setUserInput({ ...userInput, [unit]: +event.target.value });

  return (
    <div className="rateCalculator">
      <div className="inputForm">
        <Title headingLevel="h1">get your parcel</Title>
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
        <ListItems optimalParcel={optimalParcel}>your best choice</ListItems>
      )}
    </div>
  );
};

export default RateCalculator;
