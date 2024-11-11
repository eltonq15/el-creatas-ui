import { Typography } from "@mui/joy";
import { ModuleWrapper } from "../../components/module/ModuleWrapper";
import { ModuleSection } from "../../components/module/ModuleSection";
import { useParams } from "react-router-dom";
import { useGetProductById } from "../../hooks/use-get-product-by-id";
import { AddToCartButton } from "../../components/add-to-cart-button/AddToCartButton";

import Aura from "../../assets/formatted/aura.png";
import Blossom from "../../assets/formatted/blossom.png";
import Elegance from "../../assets/formatted/elegance.png";
import Essence from "../../assets/formatted/essence.png";
import Harmonia from "../../assets/formatted/harmonia.png";
import Refine from "../../assets/formatted/refine.png";

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

export const Product = () => {
  const { productId } = useParams();
  const { data: product } = useGetProductById(productId || "");

  if (!product) {
    return null;
  }

  return (
    <ModuleWrapper>
      <ModuleSection title={product.name} width={800}>
        <img
          className="product-image"
          src={imagesMap[product.name as keyof typeof imagesMap]}
          width={400}
          alt={product.name}
        />
        <Typography
          level="body-lg"
          sx={{
            fontFamily: "inherit",
            textAlign: "center",
            lineHeight: "32px",
          }}
        >
          {product.description}
        </Typography>
        <AddToCartButton text="Adicionar ao carrinho" product={product} />
      </ModuleSection>
    </ModuleWrapper>
  );
};
