import { OrderData } from "../hooks/use-order-data";

export const getOrderById = (orderId: string): Promise<OrderData> => {
  if (!orderId) {
    return Promise.resolve({} as OrderData);
  }

  return fetch(`${process.env.REACT_APP_API_URL}/order/${orderId}`).then(
    (res) => res.json()
  );
};
