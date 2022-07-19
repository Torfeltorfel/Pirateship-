import Parcel from "../res/parcel.types";

export const findOptimalParcel = (
  userParcel: { width: number; length: number; height: number; weight: number },
  parcelInformation: Parcel[]
) => {
  const result = parcelInformation.filter(
    ({ restrictions: { weight, length, width, height } }) => {
      return (
        userParcel.length <= length &&
        userParcel.weight <= weight &&
        userParcel.width <= width &&
        userParcel.height <= height
      );
    }
  );
  return result;
};
