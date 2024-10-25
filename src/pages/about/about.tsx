import { Divider, List, ListItem, Stack, Typography } from "@mui/joy";
import QuemSomosImage1 from "../../assets/quem-somos/quem-somos-1.png";
import QuemSomosImage2 from "../../assets/quem-somos/quem-somos-2.png";
import NossosProdutos1 from "../../assets/nossos-produtos/nossos-produtos-1.png";
import NossosProdutos2 from "../../assets/nossos-produtos/nossos-produtos-2.png";
import PorQueJesmonite1 from "../../assets/por-que-jesmonite/por-que-jesmonite-1.mp4";
import PorQueJesmonite2 from "../../assets/por-que-jesmonite/por-que-jesmonite-2.mp4";

export const About = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        paddingTop: 14,
        backgroundColor: "#ede8de",
        flexGrow: 1,
        fontFamily: "arima madurai",
        gap: 4,
      }}
    >
      <Stack sx={{ width: "80%", gap: "1rem", maxWidth: 600 }}>
        <Typography
          level="h1"
          sx={{
            fontSize: 24,
            fontFamily: "inherit",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          QUEM SOMOS
        </Typography>

        <Typography
          level="body-md"
          sx={{ fontFamily: "inherit", textAlign: "center" }}
        >
          Uma marca apaixonada por decoração de interiores, com um amor especial
          pela criação de ambientes que refletem personalidade e proporcionam
          conforto e funcionalidade. Acreditamos que cada espaço deve contar uma
          história e ser um reflexo da identidade de quem o habita.
        </Typography>
        <Typography
          level="body-md"
          sx={{ fontFamily: "inherit", textAlign: "center" }}
        >
          A decoração minimalista sempre nos encantou. Valorizamos a ideia de
          que cada item em um ambiente deve ter um propósito e se encaixar
          perfeitamente no todo. Esse estilo traz leveza aos espaços e permite
          apreciar a beleza em cada detalhe.
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "1rem 0",
            flexWrap: "wrap",
          }}
        >
          <img src={QuemSomosImage1} width={256} alt="Quem Somos 1" />
          <img src={QuemSomosImage2} width={256} alt="Quem Somos 2" />
        </Stack>
      </Stack>
      <Divider
        sx={{
          width: "80%",
          maxWidth: 600,
          alignSelf: "center",
        }}
      />
      <Stack sx={{ width: "80%", gap: "1rem", maxWidth: 600 }}>
        <Typography
          level="h1"
          sx={{
            fontSize: 24,
            fontFamily: "inherit",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          NOSSOS PRODUTOS
        </Typography>

        <Typography
          level="body-md"
          sx={{ fontFamily: "inherit", textAlign: "center" }}
        >
          Cada peça criada reflete nossa admiração pela produção artesanal,
          aliada a uma visão minimalista.
        </Typography>
        <Typography
          level="body-md"
          sx={{ fontFamily: "inherit", textAlign: "center" }}
        >
          Nossas criações, feitas à mão localmente em Portugal, são produzidas
          com muita atenção aos detalhes. Trabalhamos com jesmonite em um
          processo lento e cuidadoso, garantindo que cada peça seja única.
        </Typography>
        <Typography
          level="body-md"
          sx={{ fontFamily: "inherit", textAlign: "center" }}
        >
          Em um mundo onde a produção em massa é comum, buscamos oferecer uma
          alternativa: decoração consciente e sustentável.
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "1rem 0",
            flexWrap: "wrap",
          }}
        >
          <img src={NossosProdutos1} width={256} alt="Nossos Produtos 1" />
          <img src={NossosProdutos2} width={256} alt="Nossos Produtos 2" />
        </Stack>
      </Stack>
      <Divider
        sx={{
          width: "80%",
          maxWidth: 600,
          alignSelf: "center",
        }}
      />
      <Stack sx={{ width: "80%", gap: "1rem", maxWidth: 600 }}>
        <Typography
          level="h1"
          sx={{
            fontSize: 24,
            fontFamily: "inherit",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          POR QUE ESCOLHEMOS JESMONITE?
        </Typography>

        <Typography
          level="body-md"
          sx={{ fontFamily: "inherit", textAlign: "center" }}
        >
          Escolhemos o jesmonite por várias razões, entre as quais se destacam:
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "1rem 0",
            flexWrap: "wrap",
          }}
        >
          <ListItem>
            <Typography
              level="body-md"
              sx={{ fontFamily: "inherit", textAlign: "center" }}
            >
              Sustentabilidade: Um material ecológico, com baixo impacto
              ambiental, ideal para quem busca uma decoração consciente.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              level="body-md"
              sx={{ fontFamily: "inherit", textAlign: "center" }}
            >
              Versatilidade: Permite-nos criar peças com diversas texturas,
              acabamentos e cores, garantindo que cada item seja verdadeiramente
              único.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              level="body-md"
              sx={{ fontFamily: "inherit", textAlign: "center" }}
            >
              Durabilidade: As peças em jesmonite são resistentes e projetadas
              para durar, tornando-se investimentos para a decoração.
            </Typography>
          </ListItem>
        </List>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "1rem 0",
            flexWrap: "wrap",
          }}
        >
          <video
            src={PorQueJesmonite1}
            autoPlay
            loop
            muted
            width={256}
            height={256}
            playsInline
          />
          <video
            src={PorQueJesmonite2}
            autoPlay
            loop
            muted
            width={256}
            height={256}
            playsInline
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
