import React, { useState } from "react";
import { InputField } from "./InputField";
import parcelInformation from "../res/parcelInformation.json";
import { findOptimalParcel } from "../helperFunctions/findOptimalParcel";
import { Button } from "./Button";

const Form = () => {
  const [optimalParcel, setOptimalParcel] = useState({});
  const [userInput, setUserInput] = useState({
    width: 10,
    length: 10,
    height: 10,
    weight: 10,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setOptimalParcel(findOptimalParcel(userInput, parcelInformation));
  };

  return (
    <>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <InputField
          placeholder="e.g. 17cm"
          unit="cm"
          id="height"
          name="Height"
          maxValue={"120"}
          onChange={(event) =>
            setUserInput({ ...userInput, height: event.target.value })
          }
        />
        <InputField
          placeholder="e.g. 23cm"
          unit="cm"
          id="width"
          name="Width"
          maxValue={"60"}
          onChange={(event) =>
            setUserInput({ ...userInput, width: event.target.value })
          }
        />
        <InputField
          placeholder="e.g. 20cm"
          unit="cm"
          id="length"
          name="Length"
          maxValue={"60"}
          onChange={(event) =>
            setUserInput({ ...userInput, length: event.target.value })
          }
        />

        <InputField
          placeholder="e.g. 10kg"
          unit="kg"
          id="weight"
          name="Weight"
          step="0.5"
          maxValue={"31.5"}
          onChange={(event) =>
            setUserInput({ ...userInput, weight: event.target.value })
          }
        />
        <Button>get best parcel</Button>
      </form>
      {optimalParcel && (
        <>
          <h2>Your Parcel</h2>
          <ul>
            <li>Name: {optimalParcel.name}</li>
            <li>Price: {optimalParcel.price}€</li>
          </ul>
        </>
      )}
    </>
  );
};

export default Form;
