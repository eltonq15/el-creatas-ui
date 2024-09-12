import { Button, Stack } from "@mui/joy";

type StepperButtonsProps = {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
};

export const CheckoutStepperButtons = ({
  step,
  handleNext,
  handleBack,
}: StepperButtonsProps) => {
  return (
    <Stack
      sx={{ mt: 2, position: "absolute", bottom: 48 }}
      direction="row"
      spacing={4}
    >
      <Button
        sx={{
          backgroundColor: "black",
          ":hover": { backgroundColor: "black" },
        }}
        onClick={handleBack}
        disabled={step === 0}
      >
        Voltar
      </Button>
      <Button
        sx={{
          backgroundColor: "black",
          ":hover": { backgroundColor: "black" },
        }}
        onClick={handleNext}
        disabled={step === 3}
      >
        Continuar
      </Button>
    </Stack>
  );
};
