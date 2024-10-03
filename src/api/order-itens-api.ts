import { CartProduct } from "../types";

export type OrderItemsData = {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  name: string;
  price: number;
  created_at: Date;
};

export const createOrderItems = (
  orderId: string,
  products: CartProduct[]
): Promise<OrderItemsData> => {
  return fetch(`${process.env.REACT_APP_API_URL}/order-items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderId,
      products,
    }),
  }).then((res) => res.json());
};
