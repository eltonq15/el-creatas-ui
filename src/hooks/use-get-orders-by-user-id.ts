import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { OrderData } from "./use-create-order";
import { getOrdersByUserId } from "../api/orders-api";

export const useGetOrdersByUserId = (
  userId?: string | null
): UseQueryResult<OrderData[], Error> => {
  return useQuery<OrderData[], Error>({
    queryKey: ["get-orders-by-user-id", userId],
    queryFn: () => getOrdersByUserId(userId),
    enabled: !!userId,
  });
};
