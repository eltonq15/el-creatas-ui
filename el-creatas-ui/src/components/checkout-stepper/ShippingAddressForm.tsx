import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FormLabel,
  FormControl,
  FormHelperText,
  Input,
  Button,
} from "@mui/joy";

import "./styles.scss";

const shippingAddressSchema = z.object({
  street: z
    .string()
    .min(2, { message: "A rua deve ter pelo menos 2 caracteres" }),
  number: z
    .string()
    .min(1, { message: "O número deve ter pelo menos 1 caractere" }),
  city: z
    .string()
    .min(2, { message: "A cidade deve ter pelo menos 2 caracteres" }),
  state: z
    .string()
    .min(2, { message: "O estado deve ter pelo menos 2 caracteres" }),
  zipCode: z.string().regex(/^\d{4}-\d{3}$/, {
    message: "CEP inválido (deve estar no formato 0000-000)",
  }),
});

type ShippingAddress = z.infer<typeof shippingAddressSchema>;

export const ShippingAddressForm = ({
  goBackStep,
  goNextStep,
}: {
  goBackStep: () => void;
  goNextStep: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ShippingAddress>({
    resolver: zodResolver(shippingAddressSchema),
  });

  const onSubmit = (data: ShippingAddress) => {
    console.log(data);
    goNextStep();
  };

  return (
    <form className="shipping-address-form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="street">Rua:</FormLabel>
        <Input {...register("street")} />
        {errors.street && (
          <FormHelperText>{errors.street.message}</FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="number">Número:</FormLabel>
        <Input {...register("number")} />
        {errors.number && (
          <FormHelperText>{errors.number.message}</FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="city">Cidade:</FormLabel>
        <Input {...register("city")} />
        {errors.city && <FormHelperText>{errors.city.message}</FormHelperText>}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="state">Estado:</FormLabel>
        <Input {...register("state")} />
        {errors.state && (
          <FormHelperText>{errors.state.message}</FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="zipCode">CEP:</FormLabel>
        <Input {...register("zipCode")} />
        {errors.zipCode && (
          <FormHelperText>{errors.zipCode.message}</FormHelperText>
        )}
      </FormControl>

      <Button onClick={goBackStep}>Anterior</Button>
      <Button disabled={!isValid || isSubmitting} type="submit">
        Proximo
      </Button>
    </form>
  );
};
