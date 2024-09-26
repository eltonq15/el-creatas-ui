import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import { Box, Stack, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { useCheckoutStore } from "../../stores/checkout-store/checkout-store";
import { OutlinedButton } from "../button/OutlinedButton";
import { SolidButton } from "../button/SolidButton";

export const CheckoutPaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { clearClientSecret } = useCheckoutStore();

  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/checkout/complete?isPaymentSuccessful=true`,
        receipt_email: "info@elcreatas.com",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message as string);
    } else if (error.code === "payment_intent_unexpected_state") {
      clearClientSecret();
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "accordion",
    business: {
      name: "el Creatas",
    },
  };

  return (
    <Box sx={{ width: "100%", paddingTop: "3rem" }}>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <OutlinedButton
          style={{ marginTop: "1rem", width: "100%" }}
          onClick={() => {
            navigate("/checkout/endereco");
          }}
        >
          Anterior
        </OutlinedButton>
        <SolidButton
          style={{ marginTop: "1rem", width: "100%" }}
          disabled={isLoading || !stripe || !elements}
          id="submit"
          onClick={handleSubmit}
        >
          <span id="SolidButton-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pagar agora"
            )}
          </span>
        </SolidButton>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
      {/* [DEV]: Display dynamic payment methods annotation and integration checker */}
      <Stack direction="column" id="dpm-annotation">
        <Typography sx={{ color: "gray", fontSize: "sm", paddingTop: "1rem" }}>
          Os métodos de pagamento são exibidos dinamicamente de acordo com a
          localização do usuário, quantidade de itens e a moeda.
        </Typography>
      </Stack>
    </Box>
  );
};
