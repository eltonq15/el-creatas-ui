import { Button, ButtonProps } from "@mui/joy";

export const OutlinedButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      sx={{
        color: "black",
        borderColor: "black",
        transition: "all 0.3s ease",
        "&:hover": { backgroundColor: "#9f978d" },
      }}
      variant="outlined"
      {...props}
    >
      {children}
    </Button>
  );
};
