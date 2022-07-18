export const findOptimalParcel = (userParcel, deliveryRestrictions) => {
  const result = deliveryRestrictions.filter((parcel) => {
    const {
      restrictions: { weight, length, width, height },
    } = parcel;
    return (
      userParcel.length <= length &&
      userParcel.weight <= weight &&
      userParcel.width <= width &&
      userParcel.height <= height
    );
  });
  const lowestPrice = result.reduce(function (prev, curr) {
    return prev.price < curr.price ? prev : curr;
  });
  return result;
};
