import React from "react";
import { Button, Snackbar, Stack, Typography } from "@mui/joy";
import { CheckCircleOutline } from "@mui/icons-material";
import { HandHeartIcon } from "../../assets/icons/HandHeartIcon";
import { ArrowRightIcon } from "../../assets/icons/ArrowRightIcon";
import { ShoppingBagIcon } from "../../assets/icons/ShoppingBagIcon";

type AddToCartSnackbarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
        position: "fixed",
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
          sx={{ justifyContent: "space-evenly" }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "black",
              borderColor: "black",
              width: "45%",
              "&:hover": { backgroundColor: "#9f978d" },
            }}
            onClick={() => setOpen(false)}
          >
            Continuar Comprando
          </Button>
          <Button
            variant="solid"
            sx={{
              backgroundColor: "black",
              borderColor: "white",
              width: "45%",
              "&:hover": { backgroundColor: "#9f978d" },
            }}
            onClick={() => {
              setOpen(false);
              const cartIcon = document.getElementById("cart-icon");
              if (cartIcon) {
                cartIcon.click();
              }
            }}
          >
            Ir para o Carrinho
          </Button>
        </Stack>
      </Stack>
    </Snackbar>
  );
};
