export type AddressParams = {
  city: string;
  country: string;
  district: string;
  zipCode: string;
  shippingAddress: string;
};

export type AddressData = {
  city: string;
  country: string;
  createdAt: string;
  district: string;
  id: string;
  zipCode: string;
  street: string;
};

export const createAddress = (
  data: AddressParams,
  userId: string
): Promise<AddressData> => {
  return fetch(`${process.env.REACT_APP_API_URL}/addresses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      street: data.shippingAddress,
      userId,
    }),
  })
    .then((res) => res.json())
    .catch((err) => new Error(err));
};

export const getAddressByUserId = (userId: string): Promise<AddressData> => {
  return fetch(
    `${process.env.REACT_APP_API_URL}/addresses?userId=${userId}`
  ).then((res) => res.json());
};
