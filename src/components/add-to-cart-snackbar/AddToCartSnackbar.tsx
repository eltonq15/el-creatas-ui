import React from "react";
import { Snackbar, Stack, Typography } from "@mui/joy";
import { CheckCircleOutline } from "@mui/icons-material";
import { HandHeartIcon } from "../../assets/icons/HandHeartIcon";
import { ArrowRightIcon } from "../../assets/icons/ArrowRightIcon";
import { ShoppingBagIcon } from "../../assets/icons/ShoppingBagIcon";
import { OutlinedButton } from "../button/OutlinedButton";
import { SolidButton } from "../button/SolidButton";

type AddToCartSnackbarProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const AddToCartSnackbar = ({
  open,
  setOpen,
}: AddToCartSnackbarProps) => {
  return (
    <Snackbar
      variant="solid"
      size="lg"
      open={open}
      onClose={() => setOpen(false)}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      sx={{
        background: "#ede8de",
        maxWidth: 360,
        direction: "column",
        top: 100,
      }}
    >
      <Stack alignContent={"center"} gap={2}>
        <Typography textAlign={"center"} level="title-lg">
          Item adicionado ao carrinho!
        </Typography>
        <CheckCircleOutline
          fill="green"
          sx={{ fontSize: 32, alignSelf: "center", fill: "green" }}
        />
        <Stack direction={"row"} sx={{ alignSelf: "center", gap: 2 }}>
          <HandHeartIcon />
          <ArrowRightIcon />
          <ShoppingBagIcon />
        </Stack>

        <Typography sx={{ mt: 1, mb: 2, textAlign: "center" }}>
          O item foi adicionado com sucesso ao seu carrinho de compras.
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{ justifyContent: "space-evenly", display: "flex" }}
        >
          <OutlinedButton
            onClick={() => setOpen(false)}
            style={{ width: "50%" }}
          >
            Continuar Comprando
          </OutlinedButton>
          <SolidButton
            onClick={() => {
              setOpen(false);
              const cartIcon = document.getElementById("cart-icon");
              if (cartIcon) {
                cartIcon.click();
              }
            }}
            style={{ width: "50%" }}
          >
            Ir para o Carrinho
          </SolidButton>
        </Stack>
      </Stack>
    </Snackbar>
  );
};
