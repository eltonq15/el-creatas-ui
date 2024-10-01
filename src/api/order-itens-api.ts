import { CartProduct } from "../types";

export type OrderItensData = {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  name: string;
  price: number;
  created_at: Date;
};

export const createOrderItens = (
  orderId: string,
  products: CartProduct[]
): Promise<OrderItensData> => {
  return fetch(`${process.env.REACT_APP_API_URL}/order-itens`, {
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
