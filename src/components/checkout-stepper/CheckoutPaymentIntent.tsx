import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutPaymentForm } from "./CheckoutPaymentForm";
import { useCheckoutStore } from "../../stores/checkout-store/checkout-store";
import { StripeElementsOptions } from "@stripe/stripe-js";
import { CheckoutStepper } from "./CheckoutStepper";
import { useCreatePaymentIntent } from "../../hooks/use-create-payment-intent";
import { Skeleton, Stack } from "@mui/joy";

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_TEST_PUBLISHABLE_KEY as string
);

export const CheckoutPaymentIntent = () => {
  const { clientSecret, setClientSecret } = useCheckoutStore();
  const { data, isLoading } = useCreatePaymentIntent();

  if (data && !clientSecret) {
    setClientSecret(data);
  }

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret: data ?? clientSecret,
    appearance,
  };

  if (isLoading) {
    return (
      <>
        <Skeleton
          height={16}
          variant="rectangular"
          sx={{ height: 42, alignSelf: "start" }}
        />
        <Skeleton
          height={16}
          variant="rectangular"
          sx={{ height: 400, alignSelf: "start" }}
        />
      </>
    );
  }

  return (
    <>
      <CheckoutStepper activeStep={2} />
      {options.clientSecret && (
        <Elements
          stripe={stripePromise}
          options={options as StripeElementsOptions}
        >
          <CheckoutPaymentForm />
        </Elements>
      )}
    </>
  );
};
