import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getOrderById } from "../api/orders-api";

export type OrderData = {
  address_id: string;
  created_at: string;
  id: string;
  payment_method: string;
  payment_status: string;
  total_amount: number;
  user_id: string;
};

export const useOrderData = (
  orderId: string
): UseQueryResult<OrderData, Error> => {
  return useQuery<OrderData, Error>({
    queryKey: ["get-order", orderId],
    queryFn: () => getOrderById(orderId),
    enabled: !!orderId,
  });
};
