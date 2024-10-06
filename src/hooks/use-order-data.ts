import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getOrderById } from "../api/orders-api";
import { OrderData } from "./use-create-order";

export const useOrderData = (
  orderId: string
): UseQueryResult<OrderData, Error> => {
  return useQuery<OrderData, Error>({
    queryKey: ["get-order", orderId],
    queryFn: () => getOrderById(orderId),
    enabled: !!orderId,
  });
};
