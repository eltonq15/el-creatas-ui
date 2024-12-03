import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getUserByEmail, UserData } from "../api/users-api";

export const useGetUserByEmail = (
  email: string
): UseQueryResult<UserData, Error> => {
  return useQuery<UserData, Error>({
    queryKey: ["get-user-by-email", email],
    queryFn: () => getUserByEmail(email),
  });
};
