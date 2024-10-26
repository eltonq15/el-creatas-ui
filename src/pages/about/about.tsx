import { Divider, List, ListItem, Stack, Typography } from "@mui/joy";
import QuemSomos1 from "../../assets/quem-somos/quem-somos-1.png";
import QuemSomos2 from "../../assets/quem-somos/quem-somos-2.png";
import NossosProdutos1 from "../../assets/nossos-produtos/nossos-produtos-1.png";
import NossosProdutos2 from "../../assets/nossos-produtos/nossos-produtos-2.png";
import PorQueJesmonite1 from "../../assets/por-que-jesmonite/por-que-jesmonite-1.mp4";
import PorQueJesmonite2 from "../../assets/por-que-jesmonite/por-que-jesmonite-2.mp4";
import NossaIntencao1 from "../../assets/nossa-intencao/nossa-intencao-1.png";
import NossaIntencao2 from "../../assets/nossa-intencao/nossa-intencao-2.png";
import NossoCompromisso1 from "../../assets/nosso-compromisso/nosso-compromisso-1.png";
import NossoCompromisso2 from "../../assets/nosso-compromisso/nosso-compromisso-2.png";

import { AboutSection } from "./about-section";

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
        fontFamily: "arima",
        gap: 4,
      }}
    >
      <AboutSection
        title="Quem somos"
        text1="Uma marca apaixonada por decoração de interiores, com um amor especial
          pela criação de ambientes que refletem personalidade e proporcionam
          conforto e funcionalidade. Acreditamos que cada espaço deve contar uma
          história e ser um reflexo da identidade de quem o habita."
        text2="A decoração minimalista sempre nos encantou. Valorizamos a ideia de
          que cada item em um ambiente deve ter um propósito e se encaixar
          perfeitamente no todo. Esse estilo traz leveza aos espaços e permite
          apreciar a beleza em cada detalhe."
        media={[
          { src: QuemSomos1, alt: "Quem Somos 1" },
          { src: QuemSomos2, alt: "Quem Somos 2" },
        ]}
      />

      <Divider
        sx={{
          width: "80%",
          maxWidth: 600,
          alignSelf: "center",
        }}
      />

      <AboutSection
        title="nossos produtos"
        text1="Cada peça criada reflete nossa admiração pela produção artesanal,
          aliada a uma visão minimalista."
        text2="Nossas criações, feitas à mão localmente em Portugal, são produzidas
          com muita atenção aos detalhes. Trabalhamos com jesmonite em um
          processo lento e cuidadoso, garantindo que cada peça seja única."
        text3="Em um mundo onde a produção em massa é comum, buscamos oferecer uma
          alternativa: decoração consciente e sustentável."
        media={[
          { src: NossosProdutos1, alt: "Nossos Produtos 1" },
          { src: NossosProdutos2, alt: "Nossos Produtos 2" },
        ]}
      />

      <Divider
        sx={{
          width: "80%",
          maxWidth: 600,
          alignSelf: "center",
        }}
      />

      <AboutSection
        title="por que escolhemos jesmonite?"
        text1="Escolhemos o jesmonite por várias razões, entre as quais se destacam: "
        additionalContent={
          <List marker="disc">
            <ListItem>
              <Typography level="body-lg" sx={{ fontFamily: "inherit" }}>
                <b>Sustentabilidade:</b> Um material ecológico, com baixo
                impacto ambiental, ideal para quem busca uma decoração
                consciente.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography level="body-lg" sx={{ fontFamily: "inherit" }}>
                <b>Versatilidade:</b> Permite-nos criar peças com diversas
                texturas, acabamentos e cores, garantindo que cada item seja
                verdadeiramente único.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography level="body-lg" sx={{ fontFamily: "inherit" }}>
                <b>Durabilidade:</b> As peças em jesmonite são resistentes e
                projetadas para durar, tornando-se investimentos para a
                decoração.
              </Typography>
            </ListItem>
          </List>
        }
        media={[
          {
            src: PorQueJesmonite1,
            alt: "Por Que Jesmonite 1",
          },
          {
            src: PorQueJesmonite2,
            alt: "Por Que Jesmonite 2",
          },
        ]}
        mediaType="video"
      />

      <Divider
        sx={{
          width: "80%",
          maxWidth: 600,
          alignSelf: "center",
        }}
      />

      <AboutSection
        title="nossa intenção"
        text1="Na el creatas, acreditamos que uma vida equilibrada está profundamente conectada ao ambiente em que vivemos. Para avançar, muitas vezes é necessário dar um passo para trás e refletir."
        text2="Abraçamos essa filosofia ao nos concentrarmos na criação de espaços calmos e pacíficos dentro de nossos lares, promovendo um ambiente propício à restauração e recarga."
        text3="Nossa aspiração é que cada peça ilumine o seu espaço, se torne parte da sua história e contribua para a coleção de coisas que você ama."
        media={[
          { src: NossaIntencao1, alt: "Nossa Intencao 1" },
          { src: NossaIntencao2, alt: "Nossa Intencao 2" },
        ]}
      />

      <Divider
        sx={{
          width: "80%",
          maxWidth: 600,
          alignSelf: "center",
        }}
      />

      <AboutSection
        title="Nosso Compromisso"
        text1="Na el creatas, o compromisso consciente é fundamental em tudo  que fazemos. Acreditamos que cada ação tem um impacto."
        text2="Trabalhamos com jesmonite, um material ecológico, e garantimos que cada etapa do nosso processo minimize o desperdício e promova a reutilização, adotando práticas que respeitem o meio ambiente e que reduzam nossa pegada ecológica."
        text3="Ao fazer escolhas conscientes, podemos não apenas criar produtos de qualidade, mas também contribuir para um futuro mais sustentável e  valorizar a beleza do artesanal."
        media={[
          {
            src: NossoCompromisso1,
            alt: "Nosso Compromisso 1",
          },
          {
            src: NossoCompromisso2,
            alt: "Nosso Compromisso 2",
          },
        ]}
      />

      <Divider
        sx={{
          width: 0,
          maxWidth: 600,
          alignSelf: "center",
        }}
      />
    </Stack>
  );
};
