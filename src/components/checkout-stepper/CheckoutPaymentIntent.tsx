import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutPaymentForm } from "./CheckoutPaymentForm";
import { useEffect, useState } from "react";
import { useCartStore } from "../../stores/cart-store/cart-store";
import { useCheckoutStore } from "../../stores/checkout-store/checkout-store";
import { StripeElementsOptions } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_TEST_PUBLISHABLE_KEY as string
);

export const CheckoutPaymentIntent = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [dpmCheckerLink, setDpmCheckerLink] = useState("");

  const { cartProducts } = useCartStore();
  const { checkoutData } = useCheckoutStore();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (cartProducts.length && checkoutData && !clientSecret) {
      fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartProducts.map((product) => ({
            ...product,
            amount: (product.price * product.quantity * 100).toFixed(0),
          })),
          customer: checkoutData,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
          // [DEV] For demo purposes only
          setDpmCheckerLink(data.dpmCheckerLink);
        })
        .catch((err) => console.log(err));
    }
  }, [cartProducts, checkoutData, clientSecret]);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {clientSecret && (
        <Elements
          stripe={stripePromise}
          options={options as StripeElementsOptions}
        >
          <CheckoutPaymentForm dpmCheckerLink={dpmCheckerLink} />
        </Elements>
      )}
    </>
  );
};
