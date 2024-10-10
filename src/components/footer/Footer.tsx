import { Stack, Typography } from "@mui/joy";
import { Policies } from "../policies/Policies";

export const Footer = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        padding: "24px",
        fontFamily: "math, serif",
        backgroundColor: "#ede8de",
      }}
    >
      <Policies />
      <Typography level="body-md" fontFamily={"math, serif"} letterSpacing={2}>
        El Creatas © 2024. Todos os direitos reservados.
      </Typography>
    </Stack>
  );
};
