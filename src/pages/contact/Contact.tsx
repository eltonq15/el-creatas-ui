import {
  FormControl,
  FormHelperText,
  Input,
  Stack,
  Textarea,
  Typography,
} from "@mui/joy";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SolidButton } from "../../components/button/SolidButton";

import "./styles.scss";

export const Contact = () => {
  const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Nome inválido" }),
    email: z.string().email({ message: "Email inválido" }),
    message: z.string().min(10, { message: "Mensagem inválida" }),
  });

  type ContactForm = z.infer<typeof contactFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  });

  return (
    <Stack
      sx={{
        gap: "1rem",
        paddingTop: "130px",
        paddingBottom: "48px",
        fontFamily: "math, serif",
        backgroundColor: "#ede8de",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <Typography
        level="h1"
        sx={{
          textAlign: "center",
          fontFamily: "math, serif",
          fontWeight: "400",
          fontSize: "24px",
          lineHeight: "36px",
        }}
      >
        CONTACTO
      </Typography>
      <Typography
        level="h2"
        sx={{
          textAlign: "justify",
          fontSize: "24px",
          lineHeight: "36px",
          fontFamily: "math, serif",
          fontWeight: "400",
          width: "80%",
        }}
      >
        Estamos aqui para ajudar! Se você tiver dúvidas, sugestões ou quiser
        saber mais sobre nossos produtos ou informações sobre o seu pedido,
        entre em contacto conosco por email em 
        <b>
          <a href="mailto:info@elcreatas.com">info@elcreatas.com</a>
        </b>
        .
      </Typography>
      <Typography
        level="h2"
        sx={{
          textAlign: "justify",
          fontSize: "24px",
          lineHeight: "36px",
          fontFamily: "math, serif",
          fontWeight: "400",
          width: "80%",
        }}
      >
        Para um atendimento mais rápido, preencha o formulário abaixo e nossa
        equipa entrará em contacto com você em breve.
      </Typography>
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(() => {
            alert("Enviado");
          });
        }}
        style={{ width: "80%" }}
      >
        <Stack sx={{ gap: "1rem", width: "100%", display: "flex", flex: 1 }}>
          <Stack
            direction={"row"}
            sx={{
              gap: "1rem",
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <FormControl sx={{ flexGrow: 1 }}>
              <Input
                {...register("name")}
                placeholder="Nome"
                onChange={(e) => {
                  e.target.focus();
                }}
                sx={{
                  backgroundColor: "transparent",
                  border: "0.3px solid gray",
                  borderRadius: 0,
                  padding: 1.5,
                }}
              />
              {errors.name && (
                <FormHelperText>{errors.name.message}</FormHelperText>
              )}
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <Input
                {...register("email")}
                placeholder="Email"
                onChange={(e) => {
                  e.target.focus();
                }}
                sx={{
                  backgroundColor: "transparent",
                  border: "0.3px solid gray",
                  borderRadius: 0,
                  padding: 1.5,
                }}
              />
              {errors.email && (
                <FormHelperText>{errors.email.message}</FormHelperText>
              )}
            </FormControl>
          </Stack>
          <FormControl>
            <Textarea
              {...register("message")}
              placeholder="Mensagem"
              onChange={(e) => {
                e.target.focus();
              }}
              sx={{
                backgroundColor: "transparent",
                border: "0.3px solid gray",
                borderRadius: 0,
                padding: 1.5,
                height: 200,
                "--Input-focusedHighlight": "none",
              }}
            />
            {errors.message && (
              <FormHelperText>{errors.message.message}</FormHelperText>
            )}
          </FormControl>
          <SolidButton type="submit" disabled={isSubmitting}>
            Enviar
          </SolidButton>
        </Stack>
      </form>
    </Stack>
  );
};
