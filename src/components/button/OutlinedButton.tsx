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
        "&:hover": { backgroundColor: "#9f978d" },
        ...(props.sx || {}),
      }}
    >
      {children}
    </Button>
  );
};
