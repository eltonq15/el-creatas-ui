import { CartProduct, CheckoutData } from "../types";

export const createPaymentIntent = async ({
  queryKey: [_, cartProducts, checkoutData],
}: {
  queryKey: [string, CartProduct[], CheckoutData];
}) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/create-payment-intent`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cartProducts.map((product) => ({
          ...product,
          amount: (product.price * product.quantity * 100).toFixed(0),
        })),
        customer: checkoutData,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const { clientSecret } = await response.json();

  return clientSecret;
};
