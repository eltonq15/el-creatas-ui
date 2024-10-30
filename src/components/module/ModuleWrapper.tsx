import { Stack } from "@mui/joy";

export const ModuleWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "108px 24px 24px",
        backgroundColor: "#ede8de",
        flexGrow: 1,
        fontFamily: "arima",
        gap: 4,
      }}
    >
      {children}
    </Stack>
  );
};
