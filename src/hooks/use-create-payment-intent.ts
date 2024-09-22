import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { createPaymentIntent } from "../api/stripe-api";
import { useCartStore } from "../stores/cart-store/cart-store";
import { useCheckoutStore } from "../stores/checkout-store/checkout-store";

export const useCreatePaymentIntent = (): UseQueryResult<string, Error> => {
  const { cartProducts } = useCartStore();
  const { checkoutData, clientSecret } = useCheckoutStore();

  return useQuery({
    queryKey: ["create-payment-intent", cartProducts, checkoutData],
    queryFn: createPaymentIntent,
    enabled:
      !!cartProducts.length &&
      !!Object.values(checkoutData).every((item) => !!item) &&
      !clientSecret,
  });
};
