import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FormLabel,
  FormControl,
  FormHelperText,
  Input,
  Button,
  Box,
} from "@mui/joy";
import { useCheckoutStore } from "../../stores/checkout-store/checkout-store";

import "./styles.scss";

const shippingAddressSchema = z.object({
  shippingAddress: z.string().min(4, {
    message: "A morada de entrega deve ter pelo menos 4 caracteres",
  }),
  city: z.string().min(2, { message: "Cidade Inválida" }),
  district: z.string().min(2, { message: "Distrito Inválido" }),
  zipCode: z.string().regex(/^\d{4}-\d{3}$/, {
    message: "Código postal inválido (deve estar no formato 0000-000)",
  }),
});

type ShippingAddress = z.infer<typeof shippingAddressSchema>;

export const ShippingAddressForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ShippingAddress>({
    resolver: zodResolver(shippingAddressSchema),
  });

  const { checkoutData, setCheckoutData, goPrevStep, goNextStep } =
    useCheckoutStore();

  return (
    <form className="shipping-address-form" onSubmit={handleSubmit(goNextStep)}>
      <FormControl>
        <FormLabel htmlFor="shippingAddress">
          Morada Completa (envio e faturação):
        </FormLabel>
        <Input
          {...register("shippingAddress")}
          placeholder="ex: Rua das Flores, 123 - Apto. 123"
          defaultValue={checkoutData.shippingAddress}
          onChange={(e) => {
            setCheckoutData({ shippingAddress: e.target.value });
            e.target.focus();
          }}
        />
        {errors.shippingAddress && (
          <FormHelperText>{errors.shippingAddress.message}</FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="city">Cidade:</FormLabel>
        <Input
          {...register("city")}
          placeholder="ex: Porto"
          defaultValue={checkoutData.city}
          onChange={(e) => {
            setCheckoutData({ city: e.target.value });
            e.target.focus();
          }}
        />
        {errors.city && <FormHelperText>{errors.city.message}</FormHelperText>}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="district">Distrito:</FormLabel>
        <Input
          {...register("district")}
          placeholder="ex: Porto"
          defaultValue={checkoutData.district}
          onChange={(e) => {
            setCheckoutData({ district: e.target.value });
            e.target.focus();
          }}
        />
        {errors.district && (
          <FormHelperText>{errors.district.message}</FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="zipCode">Código postal:</FormLabel>
        <Input
          {...register("zipCode")}
          placeholder="ex: 0000-000"
          defaultValue={checkoutData.zipCode}
          onChange={(e) => {
            setCheckoutData({ zipCode: e.target.value });
            e.target.focus();
          }}
        />
        {errors.zipCode && (
          <FormHelperText>{errors.zipCode.message}</FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="country">País:</FormLabel>
        <Input value={"Portugal"} disabled />
        <FormHelperText style={{ color: "gray" }}>
          {"No momento, estamos a fazer envios apenas para Portugal"}
        </FormHelperText>
      </FormControl>

      <Box sx={{ textAlign: "center" }}>Escolha seu envio</Box>

      <Button onClick={goPrevStep}>Anterior</Button>
      <Button disabled={isSubmitting} type="submit">
        Proximo
      </Button>
    </form>
  );
};
