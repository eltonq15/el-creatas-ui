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
        "&:hover": {
          backgroundColor: "transparent",
          color: "black",
          border: "1px solid black",
        },
        ...(props.sx || {}),
      }}
    >
      {children}
    </Button>
  );
};
