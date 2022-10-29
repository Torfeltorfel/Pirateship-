// const findOptimalParcel = import("./findOptimalParcel");
import Parcel from "../res/parcel.types";
import { findOptimalParcels } from "./findOptimalParcel";
import parcelinformation from "../res/parcelInformation.json";

const parcelRestrictions: Parcel[] = parcelinformation;
const userInput = { width: 10, length: 10, height: 10, weight: 30 };

test("Should find optimal parcel", () => {
  expect(findOptimalParcels(userInput, parcelRestrictions)).toEqual([
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
