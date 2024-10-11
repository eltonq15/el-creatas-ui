import { Stack } from "@mui/joy";
import { Privacy } from "./privacy/Privacy";
import { Shipping } from "./shipping/Shipping";
import { TermsAndConditions } from "./terms-and-conditions/TermsAndConditions";
import { ComplaintsBook } from "./complaints/ComplaintsBook";

export const Policies = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        gap: 1,
        fontFamily: "math, serif",
        backgroundColor: "#ede8de",
      }}
    >
      <Privacy />
      <Shipping />
      <TermsAndConditions />
      <ComplaintsBook />
    </Stack>
  );
};