type Parcel = {
  value: string;
  name: string;
  price: number;
  tracking: string;
  insurance: string;
  restrictions: {
    height: number;
    length: number;
    weight: number;
    width: number;
  };
};

export default Parcel;
