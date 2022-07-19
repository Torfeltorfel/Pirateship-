type Parcel = {
  value: string;
  name: string;
  price: number;
  restrictions: {
    height: number;
    length: number;
    weight: number;
    width: number;
    "insured value": string;
  };
};

export default Parcel;
