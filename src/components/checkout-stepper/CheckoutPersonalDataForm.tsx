import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormLabel, FormControl, FormHelperText, Input, Stack } from "@mui/joy";
import { CountrySelect } from "../country-select/CountrySelect";
import { useCheckoutStore } from "../../stores/checkout-store/checkout-store";
import { useNavigate } from "react-router-dom";
import { SolidButton } from "../button/SolidButton";

import "./styles.scss";

const personalDataSchema = z.object({
  fullName: z.string().regex(/^[a-zA-Z]+ [a-zA-Z]+(?: [a-zA-Z]*)*$/, {
    message: "Nome inválido",
  }),
  email: z.string().email({ message: "Endereço de email inválido" }),
  phone: z.string().min(4, {
    message: "Telemovel inválido",
  }),
});

type PersonalData = z.infer<typeof personalDataSchema>;

export const CheckoutPersonalDataForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PersonalData>({
    resolver: zodResolver(personalDataSchema),
  });

  const { checkoutData, setCheckoutData } = useCheckoutStore();
  const navigate = useNavigate();

  return (
    <form
      className="personal-data-form"
      onSubmit={handleSubmit(() => {
        navigate("/checkout/endereco");
      })}
    >
      <FormControl>
        <FormLabel htmlFor="fullName">Nome completo:</FormLabel>
        <Input
          {...register("fullName")}
          name="fullName"
          placeholder="ex: João Silva"
          value={checkoutData.fullName}
          onChange={(e) => {
            setCheckoutData({ fullName: e.target.value });
            e.target.focus();
          }}
        />
        {errors.fullName && (
          <FormHelperText>{errors.fullName.message}</FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="email">Email:</FormLabel>
        <Input
          {...register("email")}
          placeholder="ex: joao@example.com"
          defaultValue={checkoutData.email}
          onChange={(e) => {
            setCheckoutData({ email: e.target.value });
            e.target.focus();
          }}
        />
        {errors.email && (
          <FormHelperText>{errors.email.message}</FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="phone">Telemóvel:</FormLabel>
        <Stack direction="row" gap={1}>
          <CountrySelect />
          <Input
            {...register("phone")}
            placeholder="ex: 912345678"
            value={checkoutData.phone}
            onChange={(e) => {
              setCheckoutData({ phone: e.target.value });
              e.target.focus();
            }}
          />
        </Stack>
        {errors.phone && (
          <FormHelperText>{errors.phone.message}</FormHelperText>
        )}
      </FormControl>

      <SolidButton disabled={isSubmitting} type="submit">
        Proximo
      </SolidButton>
    </form>
  );
};
