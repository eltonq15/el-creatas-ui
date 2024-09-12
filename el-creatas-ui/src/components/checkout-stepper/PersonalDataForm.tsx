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

const personalDataSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" }),
  sureName: z
    .string()
    .min(2, { message: "O sobrenome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Endereço de email inválido" }),
  phone: z.string().regex(/^\d{9}$/, {
    message: "Número de telefone inválido (deve ter 9 dígitos)",
  }),
});

type PersonalData = z.infer<typeof personalDataSchema>;

export const PersonalDataForm = ({
  goNextStep,
}: {
  goNextStep: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<PersonalData>({
    resolver: zodResolver(personalDataSchema),
  });

  const onSubmit = (data: PersonalData) => {
    console.log(data);
    goNextStep();
  };

  return (
    <form className="personal-data-form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="name">Primeiro Nome:</FormLabel>
        <Input {...register("name")} />
        {errors.name && <FormHelperText>{errors.name.message}</FormHelperText>}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="sureName">Ultimo Nome:</FormLabel>
        <Input {...register("sureName")} />
        {errors.sureName && (
          <FormHelperText>{errors.sureName.message}</FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="email">Email:</FormLabel>
        <Input {...register("email")} />
        {errors.email && (
          <FormHelperText>{errors.email.message}</FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="phone">Telefone:</FormLabel>
        <Input {...register("phone")} />
        {errors.phone && (
          <FormHelperText>{errors.phone.message}</FormHelperText>
        )}
      </FormControl>

      <Button disabled={!isValid || isSubmitting} type="submit">
        Proximo
      </Button>
    </form>
  );
};
