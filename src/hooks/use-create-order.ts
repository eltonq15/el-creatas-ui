import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { createOrder } from "../api/orders-api";

export type OrderItem = {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
};
export type OrderData = {
  addressId: string;
  created_at: string;
  id: string;
  paymentMethod: string;
  status: string;
  userId: string;
  orderItems?: OrderItem[];
};

export type OrderParams = {
  userId: string;
  addressId: string;
  paymentMethod: string;
  status: string;
};

export const useCreateOrder = (
  data: OrderParams
): UseQueryResult<OrderData, Error> => {
  return useQuery<any, Error>({
    queryKey: ["create-order"],
    queryFn: () => createOrder(data),
  });
};
