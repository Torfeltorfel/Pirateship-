import React from "react";
import Title from "./Title";

const ListItems = ({ optimalParcel }) => {
  optimalParcel.sort((a, b) => {
    return a.price - b.price;
  });
  return (
    <div className="flex">
      <Title headingLevel={"h2"}>best choice</Title>
      {optimalParcel.map((parcel, index) => (
        <ol key={parcel.name}>
          <li>Choice: {index + 1}</li>
          <li>Name: {parcel.name}</li>
          <li>Price: {parcel.price}€</li>
          <li>Width: {parcel.restrictions.width}€</li>
          <li>Height: {parcel.restrictions.height}€</li>
          <li>Length: {parcel.restrictions.length}€</li>
          <li>Weight: {parcel.restrictions.weight}€</li>
        </ol>
      ))}
    </div>
  );
};

export default ListItems;
