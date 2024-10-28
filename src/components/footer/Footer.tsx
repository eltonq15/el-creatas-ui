import { Link, Stack, Typography } from "@mui/joy";
import { Policies } from "../policies/Policies";
import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
} from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        padding: "24px 12px",
        backgroundColor: "#fff",
        borderTop: "1px solid #bbb",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Link
          href="https://www.instagram.com/elcreatas"
          target="_blank"
          rel="noreferrer"
          underline="none"
          sx={{ color: "inherit" }}
        >
          <InstagramLogo size={32} />
        </Link>

        <Link
          href="https://www.facebook.com/profile.php?id=61566935308631"
          target="_blank"
          rel="noreferrer"
          underline="none"
          sx={{ color: "inherit" }}
        >
          <FacebookLogo size={32} />
        </Link>

        <Link
          href="https://www.pinterest.com/elcreatas"
          target="_blank"
          rel="noreferrer"
          underline="none"
          sx={{ color: "inherit" }}
        >
          <PinterestLogo size={32} />
        </Link>
        <Link
          href="mailto:info@elcreatas.com"
          target="_blank"
          rel="noreferrer"
          underline="none"
          sx={{ color: "inherit" }}
        >
          <EnvelopeSimple size={32} />
        </Link>
      </Stack>
      <Policies />
      <Typography
        level="body-sm"
        letterSpacing={2}
        sx={{ textAlign: "center" }}
      >
        el Creatas © 2024. Todos os direitos reservados.
      </Typography>
    </Stack>
  );
};
