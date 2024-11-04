import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getProductById } from "../api/products-api";

export const useGetProductById = (
  productId: string
): UseQueryResult<Product, Error> => {
  return useQuery<Product, Error>({
    queryKey: ["get-product-by-id", productId],
    queryFn: () => getProductById(productId),
  });
};

export type Product = {
  id: string;
  name: string;
  description: string;
  size: string;
  price: number;
  createdAt: string;
};
