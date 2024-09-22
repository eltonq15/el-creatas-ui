import { Button, Stack } from "@mui/joy";
import { useCartStore } from "../../stores/cart-store/cart-store";
import { useCheckoutStore } from "../../stores/checkout-store/checkout-store";
import { useNavigate } from "react-router-dom";

export const SuccessfulOrder = () => {
  const { checkoutData, clearCheckoutData, clearClientSecret } =
    useCheckoutStore();
  const { cartProducts, clearCart } = useCartStore();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(window.location.search);
  const isPaymentSuccessful = queryParams.get("isPaymentSuccessful");

  if (!isPaymentSuccessful) {
    return (
      <Stack sx={{ textAlign: "center", gap: "1rem" }} direction={"column"}>
        <h1>Ocorreu um erro</h1>
        <Button component={"a"} href={"/"}>
          Ir para o inicio
        </Button>
      </Stack>
    );
  }

  return (
    <Stack sx={{ textAlign: "center", gap: "1rem" }} direction={"column"}>
      Obrigado pela sua compra!
      <Button
        onClick={() => {
          if (checkoutData.email || cartProducts.length) {
            clearCart();
            clearCheckoutData();
            clearClientSecret();
          }
          navigate("/");
        }}
      >
        Ir para o inicio
      </Button>
    </Stack>
  );
};
