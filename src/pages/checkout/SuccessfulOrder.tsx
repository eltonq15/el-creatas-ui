import { Button, Stack } from "@mui/joy";
import { useCartStore } from "../../stores/cart-store/cart-store";
import { useCheckoutStore } from "../../stores/checkout-store/checkout-store";

export const SuccessfulOrder = () => {
  const { checkoutData, clearCheckoutData } = useCheckoutStore();
  const { cartProducts, clearCart } = useCartStore();
  if (checkoutData.email || cartProducts.length) {
    clearCart();
    clearCheckoutData();
  }

  return (
    <Stack sx={{ textAlign: "center", gap: "1rem" }} direction={"column"}>
      Obrigado pela sua compra!
      <Button component={"a"} href={"/"}>
        Ir para o inicio
      </Button>
    </Stack>
  );
};
