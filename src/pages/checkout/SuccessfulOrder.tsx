import { Link, Stack, Typography } from "@mui/joy";
import { useCartStore } from "../../stores/cart-store/cart-store";
import { useCheckoutStore } from "../../stores/checkout-store/checkout-store";
import { useNavigate } from "react-router-dom";
import { SolidButton } from "../../components/button/SolidButton";
import { formatToEuros } from "../../utils/formatter";
import { addBusinessDays, format } from "date-fns";
import { useOrderData } from "../../hooks/use-order-data";
import { CheckoutStepper } from "../../components/checkout-stepper/CheckoutStepper";
import { PaymentMethods } from "../../constants";

export const SuccessfulOrder = () => {
  const { checkoutData, clearCheckoutData } = useCheckoutStore();
  const { cartProducts, totalPrice, clearCart } = useCartStore();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(window.location.search);
  const orderId = queryParams.get("order_id") as string;

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
          <b>{checkoutData.email}</b> com todos os detalhes do pedido
        </Typography>
      </Stack>
      <Stack
        sx={{
          textAlign: "center",
          gap: "1rem",
          padding: "2rem",
          border: "1px dashed #000",
        }}
      >
        <h2>Detalhes do pedido</h2>
        <Typography
          sx={{ textAlign: "start" }}
          alignSelf="start"
          level="body-md"
        >
          <b>ID: </b>
          {orderData?.id}
          <Stack>
            <small>
              (Acompanhe seu pedido por{" "}
              <Link component={"a"} href={`/pedidos/${orderData?.id}`}>
                aqui
              </Link>
              )
            </small>
          </Stack>
        </Typography>
        <Typography alignSelf="start" level="body-md">
          <b>Total: </b>
          {formatToEuros(totalPrice)}
        </Typography>
        <Typography alignSelf="start" level="body-md">
          <b>Forma de pagamento: </b>
          {/* {checkoutData.paymentMethod} */}
          {/* {orderData.payment_method} */}
          {orderData?.payment_method}
        </Typography>
        {orderData?.payment_method === PaymentMethods.MULTIBANCO && (
          <Stack>
            <Typography alignSelf="start" level="body-md">
              <b>Entidade: </b>
              {/* {checkoutData.paymentMethod} */}
              {/* {orderData.payment_method} */}
              1234567
            </Typography>
            <Typography alignSelf="start" level="body-md">
              <b>Referencia: </b>
              123 456 789
            </Typography>
            <Typography alignSelf="start" level="body-md">
              <b>Montante: </b>
              {formatToEuros(totalPrice)}
            </Typography>
          </Stack>
        )}
        <Typography alignSelf="start" level="body-md">
          <b>Forma de anvio: </b>
          <Typography level="body-sm" fontWeight={700}>
            CTT Envios
          </Typography>
        </Typography>
        <Typography alignSelf="start" level="body-md">
          <Typography level="body-sm">
            Entrega prevista: até o dia{" "}
            <b>{format(addBusinessDays(new Date(), 4), "dd/MM/yyyy")}</b>
          </Typography>
        </Typography>
      </Stack>

      <SolidButton
        onClick={() => {
          if (checkoutData.email || cartProducts.length) {
            clearCart();
            clearCheckoutData();
          }
          navigate("/");
        }}
      >
        Ir para o inicio
      </SolidButton>
    </Stack>
  );
};
