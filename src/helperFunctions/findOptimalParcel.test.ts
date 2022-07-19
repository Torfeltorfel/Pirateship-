// const findOptimalParcel = import("./findOptimalParcel");
import Parcel from "../res/parcel.types";
import { findOptimalParcel } from "./findOptimalParcel";

const parcelRestrictions: Parcel[] = [
  {
    value: "paekchenS",
    name: "Päckchen S",
    restrictions: {
      height: 35,
      width: 25,
      length: 10,
      weight: 2,
    },
    price: 3.99,
    tracking: "🚫",
    insurance: "🚫",
  },
  {
    value: "paekchenM",
    name: "Päckchen M",
    restrictions: {
      height: 60,
      width: 30,
      length: 15,
      weight: 2,
    },
    price: 4.79,
    tracking: "🚫",
    insurance: "🚫",
  },

  {
    value: "packet2kg",
    name: "Packet 2kg",
    restrictions: {
      height: 60,
      width: 30,
      length: 15,
      weight: 2,
    },
    price: 5.49,
    tracking: "✔️",
    insurance: "bis 500€",
  },
  {
    value: "packet5kg",
    name: "Packet 5kg",
    restrictions: {
      height: 120,
      width: 60,
      length: 60,
      weight: 5,
    },
    price: 6.99,
    tracking: "✔️",
    insurance: "bis 500€",
  },
  {
    value: "packet10kg",
    name: "Packet 10kg",
    restrictions: {
      height: 120,
      width: 60,
      length: 60,
      weight: 10,
    },
    price: 9.49,
    tracking: "✔️",
    insurance: "bis 500€",
  },
  {
    value: "packet31kg",
    name: "Packet 31,5kg",
    restrictions: {
      height: 120,
      width: 60,
      length: 60,
      weight: 31.5,
    },
    price: 16.99,
    tracking: "✔️",
    insurance: "bis 500€",
  },
];

const userInput = { width: 10, length: 10, height: 10, weight: 30 };

test("finds optimalParcels", () => {
  expect(findOptimalParcel(userInput, parcelRestrictions)).toEqual([
    {
      value: "packet31kg",
      name: "Packet 31,5kg",
      restrictions: {
        height: 120,
        width: 60,
        length: 60,
        weight: 31.5,
      },
      price: 16.99,
      tracking: "✔️",
      insurance: "bis 500€",
    },
  ]);
});
