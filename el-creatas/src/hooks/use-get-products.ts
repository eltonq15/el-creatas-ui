import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getAllProducts } from "../api/products-api";

export const useGetProducts = (): UseQueryResult<Product[], Error> => {
  return useQuery<Product[], Error>({
    queryKey: ["get-all-products"],
    queryFn: getAllProducts,
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
