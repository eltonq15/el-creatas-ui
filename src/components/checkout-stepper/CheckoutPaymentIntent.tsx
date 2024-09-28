import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutPaymentForm } from "./CheckoutPaymentForm";
import { useCheckoutStore } from "../../stores/checkout-store/checkout-store";
import { StripeElementsOptions } from "@stripe/stripe-js";
import { CheckoutStepper } from "./CheckoutStepper";
import { useCreatePaymentIntent } from "../../hooks/use-create-payment-intent";
import { Skeleton, Stack, Typography } from "@mui/joy";

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_TEST_PUBLISHABLE_KEY as string
);

export const CheckoutPaymentIntent = () => {
  const { clientSecret: persistedClientSecret, setClientSecret } =
    useCheckoutStore();
  const { data: createdClientSecret, isLoading } = useCreatePaymentIntent();

  if (createdClientSecret && !persistedClientSecret) {
    setClientSecret(createdClientSecret);
  }

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret: persistedClientSecret,
    appearance,
  };

  if (!isLoading && !persistedClientSecret) {
    return (
      <Stack
        sx={{
          width: 400,
          height: 400,
          alignitems: "center",
          justifyContent: "center",
        }}
      >
        <CheckoutStepper activeStep={2} />
        <Typography
          level="body-md"
          sx={{
            marginTop: "1rem",
            textAlign: "center",
            height: 320,
          }}
        >
          Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.
        </Typography>
      </Stack>
    );
  }

  return (
    <Stack sx={{ width: 400, alignSelf: "center" }}>
      <CheckoutStepper activeStep={2} />
      {isLoading ? (
        <Skeleton
          height={16}
          variant="rectangular"
          sx={{ height: 400, maxWidth: 400, alignSelf: "start", marginTop: 3 }}
        />
      ) : (
        options.clientSecret && (
          <Stack sx={{ maxWidth: 400, alignSelf: "center" }}>
            <Elements
              stripe={stripePromise}
              options={options as StripeElementsOptions}
            >
              <CheckoutPaymentForm />
            </Elements>
          </Stack>
        )
      )}
    </Stack>
  );
};
