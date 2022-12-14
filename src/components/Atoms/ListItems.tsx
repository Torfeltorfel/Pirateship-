import React, { FC } from "react";
import { IndexKind } from "typescript";
import Parcel from "../../res/parcel.types";
import Title, { titleSizes } from "./Title";

interface ListItemsProps {
  optimalParcels: Parcel[];
  children: React.ReactNode;
}

const ListItems: FC<ListItemsProps> = ({ optimalParcels, children }) => {
  optimalParcels.sort((a, b) => {
    return a.price - b.price;
  });
  return (
    <div className="text-center bg-white p-4">
      <Title headingLevel={titleSizes.h2}>{children}</Title>
      <div className="flex flex-wrap p-4 text-start ">
        {optimalParcels.map((parcel: Parcel, index: IndexKind) => (
          <ol key={parcel.name} className="p-4">
            <li className="font-semibold">Choice: {index + 1}</li>
            <li>Name: {parcel.name}</li>
            <li>Price: {parcel.price}€</li>
            <li>Max Width: {parcel.restrictions.width}cm</li>
            <li>Max Height: {parcel.restrictions.height}cm</li>
            <li>Max Length: {parcel.restrictions.length}cm</li>
            <li>Max Weight: {parcel.restrictions.weight}kg</li>
            <li>Tracking: {parcel.tracking}</li>
            <li>Insurance: {parcel.insurance}</li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default ListItems;
