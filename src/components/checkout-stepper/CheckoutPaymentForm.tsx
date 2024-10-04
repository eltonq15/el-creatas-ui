import React, { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { StripeCardNumberElement } from "@stripe/stripe-js";
import { Box, Button, Stack, ToggleButtonGroup, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { useCheckoutStore } from "../../stores/checkout-store/checkout-store";
import { OutlinedButton } from "../button/OutlinedButton";
import { SolidButton } from "../button/SolidButton";
import { useCartStore } from "../../stores/cart-store/cart-store";
import { formatToEuros } from "../../utils/formatter";
import { checkout } from "../../services/checkout";
import { PaymentMethods } from "../../constants";

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
    <Typography level="body-sm" width={"100%"} textAlign={"left"}>
      {text}
    </Typography>
    <Typography level="body-sm" width={"100%"} textAlign={"right"}>
      {` ${formatToEuros(price)}`}
    </Typography>
  </Stack>
);

export const CheckoutPaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { checkoutData } = useCheckoutStore();
  const { totalPrice, cartProducts } = useCartStore();

  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPaymentMethod, setselectedPaymentMethod] =
    useState<string>("card");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    console.log({ elements });

    const { error: backendError, clientSecret } = await fetch(
      `${process.env.REACT_APP_API_URL}/create-payment-intent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentMethodType:
            selectedPaymentMethod === PaymentMethods.MULTIBANCO
              ? PaymentMethods.MULTIBANCO
              : PaymentMethods.CARD,
          currency: "eur",
          items: cartProducts.map((product) => ({
            ...product,
            amount: (product.price * product.quantity * 100).toFixed(0),
          })),
          customer: checkoutData,
        }),
      }
    ).then((res) => res.json());

    if (backendError) {
      setMessage(backendError.message);
      setIsLoading(false);
      return;
    }

    const { error: cardPaymentError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(
            CardNumberElement
          ) as StripeCardNumberElement,
        },
      });

    if (cardPaymentError) {
      setMessage(cardPaymentError.message as string);
      setIsLoading(false);
      return;
    }
    console.log({ paymentIntent });

    const { order } = await checkout(checkoutData, cartProducts);

    setIsLoading(false);

    if (order) {
      navigate(`/complete?orderId=${order.id}`);
    }
  };

  // const paymentElementOptions: StripePaymentElementOptions = {
  //   layout: "accordion",
  //   business: {
  //     name: "el Creatas",
  //   },
  // };

  return (
    <Box sx={{ width: "100%", padding: "16px" }}>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PriceLine text="Produtos" price={totalPrice} />
        <PriceLine text="Envio" price={4.8} />
        <PriceLine text="Total" price={totalPrice + 4.8} />

        {/* <PaymentElement id="payment-element" options={paymentElementOptions} /> */}
        <Stack spacing={2} sx={{ maxWidth: 400, flex: 1 }}>
          <ToggleButtonGroup
            size="sm"
            buttonFlex={1}
            value={selectedPaymentMethod}
            onChange={(event, newValue) =>
              setselectedPaymentMethod(newValue || selectedPaymentMethod)
            }
          >
            <Button
              variant={selectedPaymentMethod === "card" ? "solid" : "outlined"}
              value="card"
              sx={{
                transition: "all 0.3s ease",
                borderColor: "#000",
                ":hover": {
                  backgroundColor: "#9f978d",
                  color: "white",
                },
              }}
            >
              Cartão
            </Button>
            <Button
              variant={
                selectedPaymentMethod === "multibanco" ? "solid" : "outlined"
              }
              value="multibanco"
              sx={{
                transition: "all 0.3s ease",
                borderColor: "#000",
                ":hover": {
                  backgroundColor: "#9f978d",
                  color: "white",
                },
              }}
            >
              Multibanco
            </Button>
            <Button
              variant={
                selectedPaymentMethod === "applepay" ? "solid" : "outlined"
              }
              value="applepay"
              sx={{
                transition: "all 0.3s ease",
                borderColor: "#000",
                ":hover": {
                  backgroundColor: "#9f978d",
                  color: "white",
                },
              }}
            >
              Apple Pay
            </Button>
          </ToggleButtonGroup>
          {selectedPaymentMethod === "card" && (
            <Stack
              border={"1px solid #000"}
              borderRadius={4}
              padding={2}
              gap={2}
            >
              <Stack>
                <Typography level="body-sm" width={"100%"} textAlign={"left"}>
                  Numero do Cartão
                </Typography>
                <CardNumberElement
                  id="card-number-element"
                  options={{
                    showIcon: true,
                  }}
                />
              </Stack>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack>
                  <Typography level="body-sm" width={"100%"} textAlign={"left"}>
                    Validade
                  </Typography>
                  <CardExpiryElement id="card-expiry-element" />
                </Stack>
                <Stack>
                  <Typography level="body-sm" width={"100%"} textAlign={"left"}>
                    CVC
                  </Typography>
                  <CardCvcElement
                    id="card-cvc-element"
                    options={{ placeholder: "123" }}
                  />
                </Stack>
              </Stack>
            </Stack>
          )}
        </Stack>
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
            {isLoading ? "Processing..." : "Pagar agora"}
          </span>
        </SolidButton>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </Box>
  );
};
