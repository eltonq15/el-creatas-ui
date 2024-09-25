import Aura from "../../assets/formatted/aura.jpg";
import Background from "../../assets/background-2.jpg";
import Blossom from "../../assets/formatted/blossom.jpg";
import Elegance from "../../assets/formatted/elegance.jpg";
import Essence from "../../assets/formatted/essence.jpg";
import Harmonia from "../../assets/formatted/harmonia.jpg";
import Refine from "../../assets/formatted/refine.jpg";
import React from "react";
import { useGetProducts } from "../../hooks/use-get-products";
import { AddToCartButton } from "../../components/add-to-cart-button/AddToCartButton";
import "./styles.scss";

export const Home = () => {
  const { data: products } = useGetProducts();

  const imageComponentsMap = {
    Aura,
    Blossom,
    Elegance,
    Essence,
    Harmonia,
    Refine,
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
                  <AddToCartButton product={product} />
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
