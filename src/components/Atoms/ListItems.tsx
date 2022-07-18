import React, { FC } from "react";
import Title from "./Title";

interface ListItemsProps {
  optimalParcel: any;
  children: React.ReactNode;
}

const ListItems: FC<ListItemsProps> = ({ optimalParcel, children }) => {
  optimalParcel.sort((a: any, b: any) => {
    return a.price - b.price;
  });
  return (
    <div className="text-center bg-white p-4">
      <Title headingLevel={"h2"}>{children}</Title>
      <div className="flex flex-wrap p-4 text-start ">
        {optimalParcel.map((parcel: any, index: any) => (
          <ol key={parcel.name} className="p-4">
            <li className="font-semibold">Choice: {index + 1}</li>
            <li>Name: {parcel.name}</li>
            <li>Price: {parcel.price}€</li>
            <li>Max Width: {parcel.restrictions.width}cm</li>
            <li>Max Height: {parcel.restrictions.height}cm</li>
            <li>Max Length: {parcel.restrictions.length}cm</li>
            <li>Max Weight: {parcel.restrictions.weight}kg</li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default ListItems;
