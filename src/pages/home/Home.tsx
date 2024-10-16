import Background2 from "../../assets/background-2.jpg";
import BackgroundVideo from "../../assets/background-video.mp4";
import Aura from "../../assets/formatted/aura.png";
import Blossom from "../../assets/formatted/blossom.png";
import Elegance from "../../assets/formatted/elegance.png";
import Essence from "../../assets/formatted/essence.png";
import Harmonia from "../../assets/formatted/harmonia.png";
import Refine from "../../assets/formatted/refine.png";
import { AddToCartButton } from "../../components/add-to-cart-button/AddToCartButton";
import { useGetProducts } from "../../hooks/use-get-products";
import { useIsMobile } from "../../hooks/use-is-mobile";

import "./styles.scss";

export const Home = () => {
  const { data: products } = useGetProducts();
  const isMobile = useIsMobile();

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
        <img src={Background2} alt="Background" />
      </div>
      <div className="best-sellers-container">
        <h1>Home & Decor</h1>
        <div className="best-sellers-slider">
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
        <h1>minimalist in every detail</h1>
      </div>
      {isMobile ? (
        <video src={BackgroundVideo} autoPlay muted loop playsInline />
      ) : (
        <div className="image-container">
          <img src={Background2} alt="Background" />
        </div>
      )}
    </div>
  );
};
