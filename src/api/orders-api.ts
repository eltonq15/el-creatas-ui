import { OrderParams } from "../hooks/use-create-order";
import { OrderData } from "../hooks/use-order-data";

export const createOrder = (data: OrderParams): Promise<OrderData> => {
  return fetch(`${process.env.REACT_APP_API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const getOrderById = (orderId: string): Promise<OrderData> => {
  if (!orderId) {
    return Promise.resolve({} as OrderData);
  }

  return fetch(`${process.env.REACT_APP_API_URL}/orders/${orderId}`).then(
    (res) => res.json()
  );
};
