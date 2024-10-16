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
    <div className="products-page-container">
      <div className="products-page-header">
        <h1>JESMONITE</h1>
        <h3 style={{ width: "80%", textAlign: "justify" }}>
          O jesmonite é um material versátil, ecológico e durável, que permite
          criar formas e texturas únicas. É ideal para quem valoriza tanto a
          estética quanto a sustentabilidade. Na el Creatas utilizamos esse
          material para criar peças que unem arte e funcionalidade, tornando
          qualquer ambiente especial.
        </h3>
      </div>

      <div
        style={{
          alignItems: "center",
          backgroundColor: "#ede8de",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          justifyContent: "space-evenly",
          padding: 36,
        }}
      >
        <h2 style={{ padding: 24 }}>PRODUTOS</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: 36,
            flexWrap: "wrap",
            maxWidth: "1400px",
            scrollSnapType: "both mandatory",
          }}
        >
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
        </div>
      </div>
    </div>
  );
};
