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
import { useCartStore } from "../../stores/cart-store/cart-store";
import { formatToEuros } from "../../utils/formatter";
import { checkout } from "../../services/checkout";

const PriceLine = ({ text, price }: { text: string; price: number }) => (
  <Stack
    gap={2}
    direction={"row"}
    justifyContent={"space-between"}
    alignItems={"center"}
    padding={"4px   16px"}
    border={"1px solid #bbb"}
    marginBottom={2}
  >
    <h3>{text}</h3>
    <Typography level="body-md" width={"100%"} textAlign={"right"}>
      {` ${formatToEuros(price)}`}
    </Typography>
  </Stack>
);

export const CheckoutPaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { clearClientSecret, checkoutData } = useCheckoutStore();

  const { totalPrice, cartProducts } = useCartStore();

  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    console.log({ elements });
    const { order } = await checkout(checkoutData, cartProducts);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/checkout/complete?order_id=${order.id}`,
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
    <Box sx={{ width: "100%", padding: "16px" }}>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PriceLine text="Produtos" price={totalPrice} />
        <PriceLine text="Envio" price={4.8} />
        <PriceLine text="Total" price={totalPrice + 4.8} />

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
    </Box>
  );
};
