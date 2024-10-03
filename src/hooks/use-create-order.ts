import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CheckoutData } from "../types";
import { createOrder } from "../api/orders-api";

export type OrderData = {
  addressId: string;
  created_at: string;
  id: string;
  paymentMethod: string;
  status: string;
  total_amount: number;
  user_id: string;
};

export type OrderParams = {};

export const useCreateOrder = (
  data: CheckoutData
): UseQueryResult<OrderData, Error> => {
  return useQuery<OrderData, Error>({
    queryKey: ["get-order", data],
    queryFn: createOrder,
    enabled: !!data,
  });
};
