import { Button, ButtonProps } from "@mui/joy";

export const OutlinedButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      variant="outlined"
      {...props}
      sx={{
        color: "black",
        borderColor: "black",
        transition: "all 0.3s ease",
        "&:hover": { backgroundColor: "black", color: "white" },
        ...(props.sx || {}),
      }}
    >
      {children}
    </Button>
  );
};
