import React from "react";
import Title from "./Title";

const ListItems = ({ optimalParcel, children }) => {
  optimalParcel.sort((a, b) => {
    return a.price - b.price;
  });
  return (
    <div className="text-center">
      <Title headingLevel={"h2"}>{children}</Title>
      <div className="flex flex-wrap p-4 text-start">
        {optimalParcel.map((parcel, index) => (
          <ol key={parcel.name} className="p-4">
            <li className="font-semibold">Choice: {index + 1}</li>
            <li>Name: {parcel.name}</li>
            <li>Price: {parcel.price}€</li>
            <li>Width: {parcel.restrictions.width}cm</li>
            <li>Height: {parcel.restrictions.height}cm</li>
            <li>Length: {parcel.restrictions.length}cm</li>
            <li>Weight: {parcel.restrictions.weight}kg</li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default ListItems;
