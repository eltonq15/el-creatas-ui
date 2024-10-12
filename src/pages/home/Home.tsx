import { useEffect, useRef } from "react";
import Background from "../../assets/background-2.jpg";
import Aura from "../../assets/formatted/aura.png";
import Blossom from "../../assets/formatted/blossom.png";
import Elegance from "../../assets/formatted/elegance.png";
import Essence from "../../assets/formatted/essence.png";
import Harmonia from "../../assets/formatted/harmonia.png";
import Refine from "../../assets/formatted/refine.png";
import { AddToCartButton } from "../../components/add-to-cart-button/AddToCartButton";
import { useGetProducts } from "../../hooks/use-get-products";
import "./styles.scss";

export const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data: products } = useGetProducts();

  //on scroll of the scrollRef, console.log the current scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        console.log(scrollRef.current.scrollLeft);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <div className="best-sellers-slider" ref={scrollRef}>
          <div className="best-sellers-card-container">
            {[1, 2].flatMap(() =>
              products?.map((product) => (
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
              ))
            )}
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
