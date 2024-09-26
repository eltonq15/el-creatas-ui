import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FormLabel,
  FormControl,
  FormHelperText,
  Input,
  Box,
  Typography,
  Radio,
  Stack,
} from "@mui/joy";
import { useCheckoutStore } from "../../stores/checkout-store/checkout-store";
import { useNavigate } from "react-router-dom";
import { SolidButton } from "../button/SolidButton";
import { OutlinedButton } from "../button/OutlinedButton";
import { addBusinessDays, format } from "date-fns";

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

export const CheckoutAddressForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ShippingAddress>({
    resolver: zodResolver(shippingAddressSchema),
  });

  const { checkoutData, setCheckoutData } = useCheckoutStore();
  const navigate = useNavigate();

  return (
    <form
      className="shipping-address-form"
      onSubmit={handleSubmit(() => {
        navigate("/checkout/pagamento");
      })}
    >
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

      <Box sx={{ textAlign: "center" }}>
        <Typography level="body-lg">Escolha seu envio</Typography>
        <Stack
          direction={"row"}
          sx={{
            gap: "2rem",
            alignItems: "center",
            justifyContent: "start",
            border: "1px solid black",
            borderRadius: 8,
            padding: "1rem",
          }}
        >
          <Radio
            value={checkoutData.shippingMethod}
            checked={checkoutData.shippingMethod === "CTT"}
            onChange={(e) => {
              setCheckoutData({ shippingMethod: e.target.value });
            }}
            sx={{
              color: "black",
              "& .Mui-checked": { color: "black", borderColor: "black" },
            }}
          />
          <Stack justifyContent="start" alignItems="start">
            <Typography level="body-sm" fontWeight={700}>
              CTT Express - 5,90€
            </Typography>
            <Typography level="body-sm">
              (Receba até o dia{" "}
              <b>{format(addBusinessDays(new Date(), 4), "dd/MM/yyyy")}</b>)
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <OutlinedButton
        onClick={() => {
          navigate("/checkout/dados");
        }}
      >
        Anterior
      </OutlinedButton>
      <SolidButton disabled={isSubmitting} type="submit">
        Proximo
      </SolidButton>
    </form>
  );
};
