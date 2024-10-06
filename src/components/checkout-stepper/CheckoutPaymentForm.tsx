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
import { FRETE, PaymentMethods } from "../../constants";
import { CheckoutStepper } from "./CheckoutStepper";

import "./styles.scss";

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
  const { checkoutData } = useCheckoutStore();
  const { totalPrice, cartProducts } = useCartStore();

  const navigate = useNavigate();

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

    if (selectedPaymentMethod === PaymentMethods.MULTIBANCO) {
      const { order } = await checkout(
        checkoutData,
        cartProducts,
        PaymentMethods.MULTIBANCO
      );

      if (order) {
        return navigate(`/checkout/sucesso?orderId=${order.id}`);
      }
    }

    const { error: backendError, clientSecret } = await fetch(
      `${process.env.REACT_APP_API_URL}/create-payment-intent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentMethodType: PaymentMethods.CARD,
          currency: "eur",
          items: [
            ...cartProducts.map((product) => ({
              ...product,
              amount: (product.price * product.quantity * 100).toFixed(0),
            })),
            {
              id: "frete",
              name: "Frete",
              price: FRETE,
              quantity: 1,
              amount: (FRETE * 100).toFixed(0),
            },
          ],
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
    console.log({ paymentIntent, elements });

    const { order } = await checkout(
      checkoutData,
      cartProducts,
      PaymentMethods.CARD
    );

    setIsLoading(false);

    if (order) {
      navigate(`/checkout/sucesso?orderId=${order.id}`);
    }
  };

  return (
    <Stack sx={{ width: 400, alignSelf: "center" }}>
      <CheckoutStepper activeStep={2} />
      <Box sx={{ width: "100%", padding: "16px" }}>
        <form id="payment-form" onSubmit={handleSubmit}>
          <PriceLine text="Produtos" price={totalPrice} />
          <PriceLine text="Envio" price={4.8} />
          <PriceLine text="Total" price={totalPrice + 4.8} />

          <Stack spacing={2} sx={{ maxWidth: 400, flex: 1 }}>
            <ToggleButtonGroup
              size="sm"
              buttonFlex={1}
              value={selectedPaymentMethod}
              onChange={(_, newValue) =>
                setselectedPaymentMethod(newValue || selectedPaymentMethod)
              }
            >
              <Button
                variant={
                  selectedPaymentMethod === "card" ? "solid" : "outlined"
                }
                value="card"
                sx={{
                  transition: "all 0.3s ease",
                  borderColor: "#000",
                  ":hover": {
                    backgroundColor: "#9f978d",
                    color: "#fff",
                  },
                  ":active,:focus": {
                    backgroundColor: "#000",
                    color: "#fff",
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
                    color: "#fff",
                  },
                  ":active,:focus": {
                    backgroundColor: "#000",
                    color: "#fff",
                  },
                }}
              >
                Multibanco
              </Button>
              {/* 
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
                    color: "#fff",
                  },
                  ":active,:focus": {
                    backgroundColor: "#000",
                    color: "#fff",
                  },
                }}
              >
                Apple Pay
              </Button> */}
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
                    <Typography level="body-sm" width={80} textAlign={"left"}>
                      Validade
                    </Typography>
                    <CardExpiryElement id="card-expiry-element" />
                  </Stack>
                  <Stack>
                    <Typography level="body-sm" width={80} textAlign={"left"}>
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
            {selectedPaymentMethod === "multibanco" && (
              <Stack
                border={"1px solid #000"}
                borderRadius={4}
                padding={2}
                // gap={2}
              >
                {/* <Stack> */}
                {/* <Typography level="body-sm" width={"100%"} textAlign={"left"}>
                    Email
                  </Typography> */}
                {/* <Input
                    id="multibanco-element"
                    placeholder="ex: 6Y6gP@example.com"
                    defaultValue={checkoutData.email}
                    sx={{
                      backgroundColor: "#ede8de",
                      border: "0.5px solid #000",
                      ":focus,:focus-visible,:focus-within,:active": {
                        outline: "none",
                      },
                    }}
                  /> */}
                <Typography level="body-sm">
                  Após confirmar, receberá as instruções de pagamento por email
                </Typography>
                {/* </Stack> */}
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
    </Stack>
  );
};
