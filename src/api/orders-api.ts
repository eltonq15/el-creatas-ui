import { OrderData, OrderParams } from "../hooks/use-create-order";

export const createOrder = async (data: OrderParams): Promise<OrderData> => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const getOrderById = async (orderId: string): Promise<OrderData> => {
  if (!orderId) {
    return Promise.resolve({} as OrderData);
  }

  const res = await fetch(`${process.env.REACT_APP_API_URL}/orders/${orderId}`);
  return await res.json();
};
