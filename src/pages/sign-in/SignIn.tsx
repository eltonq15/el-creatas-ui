import { SignIn } from "@clerk/clerk-react";
import { Box } from "@mui/joy";
import { useLocation } from "react-router-dom";

export const SignInPage = () => {
  const { state } = useLocation();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        backgroundColor: "#ede8de",
      }}
    >
      <SignIn
        signUpUrl="/sign-up"
        path="/sign-in"
        fallbackRedirectUrl={state?.from || "/home"}
      />
    </Box>
  );
};
