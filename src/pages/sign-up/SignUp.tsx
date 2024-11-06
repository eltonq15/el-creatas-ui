import { SignUp } from "@clerk/clerk-react";
import { Box } from "@mui/joy";

export const SignUpPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        backgroundColor: "#ede8de",
        paddingTop: "48px !important",
        minHeight: "120vh",
      }}
    >
      <SignUp signInUrl="/sign-in" path="/sign-up" />
    </Box>
  );
};
