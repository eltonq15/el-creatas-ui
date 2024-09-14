import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getAllCountries } from "../api/countries-api";

export type Country = {
  pais: string;
  img: string;
  ddi: number;
  continente: string;
};

export const useCountries = (): UseQueryResult<Country[], Error> => {
  return useQuery<Country[], Error>({
    queryKey: ["get-countries"],
    queryFn: getAllCountries,
  });
};
