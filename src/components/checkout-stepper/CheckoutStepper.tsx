import React from "react";
import Stepper from "@mui/joy/Stepper";
import Step, { stepClasses } from "@mui/joy/Step";
import StepIndicator, { stepIndicatorClasses } from "@mui/joy/StepIndicator";
import Typography from "@mui/joy/Typography";
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useTheme } from "@mui/joy";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCheckoutStore } from "../../stores/checkout-store/checkout-store";

const stepperContainerStyle = {
  width: "100%",
  "--StepIndicator-size": "3rem",
  "--Step-connectorInset": "0px",
  [`& .${stepIndicatorClasses.root}`]: {
    borderWidth: 2,
  },
  [`& .${stepClasses.root}::after`]: {
    height: 4,
  },
  [`& .${stepClasses.completed}`]: {
    [`& .${stepIndicatorClasses.root}`]: {
      borderColor: "black.300",
      color: "black",
    },
    "&::after": {
      bgcolor: "black",
    },
  },
  [`& .${stepClasses.active}`]: {
    [`& .${stepIndicatorClasses.root}`]: {
      borderColor: "black",
    },
  },
  [`& .${stepClasses.disabled} *`]: {
    color: "neutral.outlinedDisabledColor",
  },
};

const stepConfigs = {
  active: {
    sx: {
      color: "black",
      borderColor: "black",
    },
    variant: "outlined" as "outlined",
  },
  completed: {
    sx: {
      stroke: `#fff`,
      borderColor: "black",
      backgroundColor: "black",
    },
    variant: "solid" as "solid",
  },
  disabled: {
    sx: {
      color: "black",
      borderColor: "#9fa6ae",
    },
    variant: "outlined" as "outlined",
  },
};

export const CheckoutStepper = ({ activeStep }: { activeStep: number }) => {
  const navigate = useNavigate();
  const { checkoutData } = useCheckoutStore();

  const isActive = (step: number) => {
    return activeStep === step;
  };

  const isCompleted = (step: number) => {
    return activeStep > step;
  };

  const isDisabled = (step: number, forceDisabled?: boolean) => {
    return forceDisabled && activeStep < step;
  };

  const getConfig = (step: number) => {
    return stepConfigs[
      isActive(step) ? "active" : isCompleted(step) ? "completed" : "disabled"
    ];
  };

  const theme = useTheme();
  const methods = useForm();

  const disableStepValidator = [
    !checkoutData["fullName"],
    !checkoutData["shippingAddress"],
  ];

  return (
    <FormProvider {...methods}>
      <Stepper
        size="md"
        sx={{
          ...stepperContainerStyle,
          paddingTop: "120px",
          [theme.breakpoints.down("sm")]: {
            paddingTop: "30px",
          },
        }}
      >
        <Step
          active={isActive(0)}
          completed={isCompleted(0)}
          disabled={isDisabled(0, disableStepValidator[0])}
          indicator={
            <StepIndicator variant={getConfig(0).variant} sx={getConfig(0).sx}>
              <ContactsRoundedIcon
                onClick={() =>
                  !isDisabled(0, disableStepValidator[0]) &&
                  navigate("/checkout/dados")
                }
              />
            </StepIndicator>
          }
          orientation="vertical"
        >
          {isActive(0) && (
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "lg",
                fontSize: "0.75rem",
                letterSpacing: "0.5px",
              }}
            >
              Seus dados
            </Typography>
          )}
        </Step>
        <Step
          active={isActive(1)}
          completed={isCompleted(1)}
          disabled={isDisabled(1, disableStepValidator[1])}
          indicator={
            <StepIndicator variant={getConfig(1).variant} sx={getConfig(1).sx}>
              <LocalShippingRoundedIcon
                onClick={() =>
                  !isDisabled(1, disableStepValidator[1]) &&
                  navigate("/checkout/endereco")
                }
              />
            </StepIndicator>
          }
          orientation="vertical"
        >
          {isActive(1) && (
            <>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "lg",
                  fontSize: "0.75rem",
                  letterSpacing: "0.5px",
                }}
              >
                Dados da entrega
              </Typography>
            </>
          )}
        </Step>
        <Step
          active={isActive(2)}
          completed={isCompleted(2)}
          disabled={isDisabled(
            2,
            disableStepValidator[0] && disableStepValidator[1]
          )}
          indicator={
            <StepIndicator variant={getConfig(2).variant} sx={getConfig(2).sx}>
              <CreditCardRoundedIcon
                onClick={() =>
                  !isDisabled(
                    2,
                    disableStepValidator[0] && disableStepValidator[1]
                  ) && navigate("/checkout/pagamento")
                }
              />
            </StepIndicator>
          }
          orientation="vertical"
        >
          {isActive(2) && (
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "lg",
                fontSize: "0.75rem",
                letterSpacing: "0.5px",
              }}
            >
              Pagamento
            </Typography>
          )}
        </Step>
        <Step
          orientation="vertical"
          active={isActive(3)}
          completed={isCompleted(3)}
          disabled={isDisabled(3)}
          indicator={
            <StepIndicator variant={getConfig(3).variant} sx={getConfig(3).sx}>
              <CheckCircleRoundedIcon />
            </StepIndicator>
          }
        >
          {isActive(3) && (
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "lg",
                fontSize: "0.75rem",
                letterSpacing: "0.5px",
              }}
            >
              Finalizado
            </Typography>
          )}
        </Step>
      </Stepper>
    </FormProvider>
  );
};
