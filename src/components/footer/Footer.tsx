import { Stack, Typography } from "@mui/joy";
import { Policies } from "../policies/Policies";

export const Footer = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        padding: "12px",
        fontFamily: "math, serif",
        backgroundColor: "#ede8de",
        borderTop: "1px solid #bbb",
      }}
    >
      <Policies />
      <Typography level="body-sm" fontFamily={"math, serif"} letterSpacing={2}>
        El Creatas © 2024. Todos os direitos reservados.
      </Typography>
    </Stack>
  );
};
