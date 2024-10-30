import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/shadcn/components/ui/card";

import Aura from "../../assets/formatted/aura.png";
import Blossom from "../../assets/formatted/blossom.png";
import Elegance from "../../assets/formatted/elegance.png";
import Essence from "../../assets/formatted/essence.png";
import Harmonia from "../../assets/formatted/harmonia.png";
import Refine from "../../assets/formatted/refine.png";

import { useGetProducts } from "../../hooks/use-get-products";
import { Typography } from "@mui/joy";
import { AddToCartButton } from "../../components/add-to-cart-button/AddToCartButton";

import "./styles.scss";
import { ModuleWrapper } from "../../components/module/ModuleWrapper";
import { ModuleSection } from "../../components/module/ModuleSection";

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
  return (
    <ModuleWrapper>
      <ModuleSection title="Produtos">
        {products?.map((product) => (
          <Card
            key={product.id}
            className="w-[400px] product-card"
            style={{
              display: "flex",
              flexDirection: "column",
              scrollSnapAlign: "start",
            }}
          >
            <CardHeader>
              <CardTitle style={{ textAlign: "center", marginBottom: 12 }}>
                {product.name}
              </CardTitle>
              <CardDescription
                style={{
                  textAlign: "center",
                  height: 320,
                  fontSize: 18,
                  lineHeight: 1.5,
                }}
              >
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                style={{ margin: "0 auto", borderRadius: "20px" }}
                src={imagesMap[product.name as keyof typeof imagesMap]}
                alt={product.name}
                width={"100%"}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Typography>
                {Intl.NumberFormat("pt-PT", {
                  style: "currency",
                  currency: "EUR",
                }).format(product.price)}
              </Typography>
              <AddToCartButton product={product} />
            </CardFooter>
          </Card>
        ))}
      </ModuleSection>
    </ModuleWrapper>
  );
};
