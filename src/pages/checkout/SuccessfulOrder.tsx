import { Stack, Typography } from "@mui/joy";
import { useCartStore } from "../../stores/cart-store/cart-store";
import { useCheckoutStore } from "../../stores/checkout-store/checkout-store";
import { useNavigate } from "react-router-dom";
import { SolidButton } from "../../components/button/SolidButton";
import { useOrderData } from "../../hooks/use-order-data";
import { CheckoutStepper } from "../../components/checkout-stepper/CheckoutStepper";
import { OrderDetails } from "../../components/order-details/OrderDetails";

export const SuccessfulOrder = () => {
  const { checkoutData, clearCheckoutData } = useCheckoutStore();
  const { cartProducts, clearCart } = useCartStore();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(window.location.search);
  const orderId = queryParams.get("orderId") as string;

  const { data: orderData, isLoading } = useOrderData(orderId);

  if (!orderData && !isLoading) {
    return (
      <Stack
        sx={{ textAlign: "center", gap: "1rem", width: 400 }}
        direction={"column"}
      >
        <CheckoutStepper activeStep={3} />

        <h1>Ocorreu um erro</h1>
        <SolidButton onClick={() => navigate("/")}>
          Ir para o inicio
        </SolidButton>
      </Stack>
    );
  }

  if (checkoutData.email || cartProducts.length) {
    clearCart();
    clearCheckoutData();
  }

  return (
    <Stack
      sx={{
        textAlign: "center",
        gap: "1rem",
        width: 400,
      }}
      direction={"column"}
    >
      <CheckoutStepper activeStep={3} />
      <h1>Pedido confirmado 🖤</h1>
      <Stack
        sx={{
          textAlign: "center",
          gap: "1rem",
          padding: "2rem",
          border: "1px dashed #000",
        }}
      >
        <h2>Obrigado pela sua compra!</h2>
        <Typography level="body-md">
          Em breve você receberará um email no endereço{" "}
          <b>{orderData?.user?.email}</b> com todos os detalhes do pedido
        </Typography>
      </Stack>
      {orderData && <OrderDetails orderData={orderData} />}

      <SolidButton
        onClick={() => {
          navigate("/");
        }}
      >
        Ir para o inicio
      </SolidButton>
    </Stack>
  );
};
