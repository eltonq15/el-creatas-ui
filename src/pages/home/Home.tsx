import Aura from "../../assets/formatted/aura.jpg";
import Background from "../../assets/background-2.jpg";
import Blossom from "../../assets/formatted/blossom.jpg";
import Elegance from "../../assets/formatted/elegance.jpg";
import Essence from "../../assets/formatted/essence.jpg";
import Harmonia from "../../assets/formatted/harmonia.jpg";
import Refine from "../../assets/formatted/refine.jpg";
import { Button } from "@mui/joy";
import { useCartStore } from "../../stores/cart-store/cart-store";
import React from "react";
import { useGetProducts } from "../../hooks/use-get-products";
import { CartProduct, Product } from "../../types";

import "./styles.scss";

export const Home = () => {
  const { cartProducts, setCartProducts } = useCartStore();
  const { data: products } = useGetProducts();

  const imageComponentsMap = {
    Aura,
    Blossom,
    Elegance,
    Essence,
    Harmonia,
    Refine,
  };

  const handleAddToCart = (product: Product) => {
    const isInCart = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );
    const products = isInCart
      ? cartProducts.map((cartProduct) =>
          cartProduct.id === product.id
            ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
            : cartProduct
        )
      : [...cartProducts, { ...product, quantity: 1 }];

    setCartProducts(products);
  };

  return (
    <div className="home-container">
      <div className="image-container">
        <img src={Background} alt="Background" />
      </div>
      <div className="best-sellers-container">
        <h1>Home & Decor</h1>
        <div className="best-sellers-slider">
          <div className="best-sellers-card-container">
            {products?.map((product) => (
              <div className="best-sellers-card">
                <div className="best-sellers-card-image">
                  <img
                    src={
                      imageComponentsMap[
                        product.name as keyof typeof imageComponentsMap
                      ]
                    }
                    alt="Best Sellers"
                  />
                </div>
                <div className="card-details">
                  {product.name}
                  <div className="price">{product.price.toFixed(2)} €</div>
                  <Button
                    variant="solid"
                    sx={{
                      backgroundColor: "#9f978d",
                      color: "white",
                      transition: "all 0.3s ease",
                      ":hover": {
                        backgroundColor: "#bdb8b1",
                        transform: "scale(1.02)",
                      },
                    }}
                    onClick={() => handleAddToCart(product)}
                  >
                    Adicionar ao carrinho
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1>Where minimalist style takes shape in every detail</h1>
      </div>
      <div className="image-container">
        <img src={Background} alt="Background" />
      </div>
    </div>
  );
};
