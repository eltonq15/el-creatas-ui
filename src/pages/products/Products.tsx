import Aura from "../../assets/formatted/aura.png";
import Blossom from "../../assets/formatted/blossom.png";
import Elegance from "../../assets/formatted/elegance.png";
import Essence from "../../assets/formatted/essence.png";
import Harmonia from "../../assets/formatted/harmonia.png";
import Refine from "../../assets/formatted/refine.png";

import { useEffect } from "react";
import { useGetProducts } from "../../hooks/use-get-products";
import { Stack, Typography } from "@mui/joy";
import { ModuleWrapper } from "../../components/module/ModuleWrapper";
import { ModuleSection } from "../../components/module/ModuleSection";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles.scss";

const imagesMap = {
  Aura,
  Blossom,
  Elegance,
  Essence,
  Harmonia,
  Refine,
};

export const Products = () => {
  const { data: products } = useGetProducts();

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <ModuleWrapper>
      <ModuleSection title="Produtos">
        <ModuleSection title="DECORAÇÃO DE CASA" level="h2" size={18}>
          <Typography
            level="body-lg"
            sx={{
              fontFamily: "inherit",
              textAlign: "center",
              lineHeight: "32px",
            }}
          >
            Descubra peças de decoração modernas e práticas que transmitem nossa
            admiração pelo artesanato, minimalismo e estilo de vida consciente.
            Eleve sua casa com nossas peças artesanais, para todas as ocasiões e
            momentos diários.
          </Typography>
        </ModuleSection>
        <Stack
          sx={{
            flexDirection: "row",
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 2,
          }}
        >
          {products?.map((product, index) => (
            <Stack
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => {
                window.location.href = `/produtos/${product.id}`;
              }}
              sx={{
                backgroundColor: "#ede8de",
                borderRadius: 8,
                position: "relative",
                boxShadow: "0 0 24px -22px black",
                cursor: "pointer",
                boxSizing: "border-box",
                minHeight: "256px",
                border: "1px solid transparent",
                ":hover": {
                  borderColor: "black",
                },
              }}
            >
              <img
                style={{
                  margin: "0 auto",
                  borderRadius: "20px",
                }}
                src={imagesMap[product.name as keyof typeof imagesMap]}
                alt={product.name}
                width={256}
              />
              <Stack
                sx={{
                  position: "absolute",
                  bottom: 4,
                  left: "50%",
                  transform: "translate(-50%)",
                }}
              >
                <Typography
                  level="body-lg"
                  textAlign={"center"}
                  fontFamily={"Arima"}
                  fontWeight={"bold"}
                >
                  {product.name}
                </Typography>
                <Typography textAlign={"center"}>
                  {Intl.NumberFormat("pt-PT", {
                    style: "currency",
                    currency: "EUR",
                  }).format(product.price)}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <ModuleSection title="COMPRE DECORAÇÃO ARTESANAL" level="h2" size={18}>
          <Typography
            level="body-lg"
            sx={{
              fontFamily: "inherit",
              textAlign: "center",
              lineHeight: "32px",
            }}
          >
            Descubra bandejas únicas que elevam seus espaços. Na El Creatas,
            oferecemos uma coleção de bandejas artesanais, projetadas para
            adicionar elegância a cada canto da sua casa. Nossos produtos
            combinam funcionalidade e estética.
          </Typography>
        </ModuleSection>
      </ModuleSection>
    </ModuleWrapper>
  );
};
