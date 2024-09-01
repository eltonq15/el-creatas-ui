import { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/shadcn/components/ui/card";
import { productImages } from "./configs";
import { ProductCardSkeleton } from "../../components/product-card/ProductCard";
import { useGetProducts } from "../../hooks/use-get-products";

import "./styles.scss";

export const Products = () => {
  const { data: products, isLoading } = useGetProducts();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          minHeight: "600px",
          gap: 24,
          backgroundImage: "url(/background.jpg)",
        }}
      >
        <h1>JESMONITE + AMOR</h1>
        <h3 style={{ width: "80%", textAlign: "center" }}>
          O jesmonite é um material versátil, ecológico e durável, que permite
          criar formas e texturas únicas. É ideal para quem valoriza tanto a
          estética quanto a sustentabilidade. Na el Creatas utilizamos esse
          material para criar peças que unem arte e funcionalidade, tornando
          qualquer ambiente especial.
        </h3>
        <span
          style={{
            display: "flex",
            gap: 12,
            width: "80%",
            justifyContent: "space-evenly",
          }}
        >
          {productImages.map((imagePath: string) => (
            <img
              key={imagePath}
              src={imagePath}
              alt="products"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
          ))}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 24,
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
            //set max 3 items per row
            maxWidth: "1400px",
          }}
        >
          <Suspense fallback={<ProductCardSkeleton />}>
            {products?.map((product) => (
              <Card
                key={product.id}
                className="w-[400px] product-card"
                style={{ display: "flex", flexDirection: "column" }}
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
                    src={`formatted/${product.name.toLowerCase()}.jpeg`}
                    alt={product.name}
                    width={"100%"}
                  />
                </CardContent>
                <CardFooter>
                  <p>
                    {Intl.NumberFormat("pt-PT", {
                      style: "currency",
                      currency: "EUR",
                    }).format(product.price)}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
};
