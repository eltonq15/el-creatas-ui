export type AddressParams = {
  city: string;
  country: string;
  district: string;
  zipCode: string;
};

export type AddressData = {
  city: string;
  country: string;
  createdAt: string;
  district: string;
  id: string;
  zipCode: string;
};

export const createAddress = (
  data: AddressParams,
  userId: string
): Promise<AddressData> => {
  return fetch(`${process.env.REACT_APP_API_URL}/address`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      userId,
    }),
  }).then((res) => res.json());
};

export const getAddressByUserId = (userId: string): Promise<AddressData> => {
  return fetch(
    `${process.env.REACT_APP_API_URL}/address?userId=${userId}`
  ).then((res) => res.json());
};
