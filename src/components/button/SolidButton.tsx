import { Button, ButtonProps } from "@mui/joy";

export const SolidButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      variant="solid"
      {...props}
      sx={{
        backgroundColor: "black",
        borderColor: "white",
        transition: "all 0.3s ease",
        "&:hover": { backgroundColor: "#9f978d" },
        ...(props.sx || {}),
      }}
    >
      {children}
    </Button>
  );
};
