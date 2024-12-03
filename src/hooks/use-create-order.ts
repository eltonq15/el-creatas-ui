import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { createOrder } from "../api/orders-api";
import { Payment } from "../api/payments-api";
import { UserData } from "../api/users-api";

export type OrderItem = {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
};
export type OrderData = {
  addressId: string;
  createdAt: string;
  id: string;
  orderItems?: OrderItem[];
  payment?: Payment;
  user?: UserData;
  userId: string;
  trackId?: string;
};

export type OrderParams = {
  userId: string;
  addressId: string;
};

export const useCreateOrder = (
  data: OrderParams
): UseQueryResult<OrderData, Error> => {
  return useQuery<any, Error>({
    queryKey: ["create-order"],
    queryFn: () => createOrder(data),
  });
};
