export const findOptimalParcel = (size, parcelInformation) => {
  const userParcelWeight = size.weight;
  const userParcelLength = size.length;
  const userParcelWidth = size.width;
  const userParcelHeight = size.height;
  const result = parcelInformation.filter((parcel) => {
    const {
      restrictions: { weight, length, width, height },
    } = parcel;
    return (
      userParcelLength <= length &&
      userParcelWeight <= weight &&
      userParcelWidth <= width &&
      userParcelHeight <= height
    );
  });
  const lowestPrice = result.reduce(function (prev, curr) {
    return prev.price < curr.price ? prev : curr;
  });
  return lowestPrice;
};
