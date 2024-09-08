import { images } from "./configs";
import { ImageSlider } from "../../components/image-slider/ImageSlider";

import "./styles.scss";

export const Home = () => {
  return (
    <div className="home-container">
      {/* <ImageSlider images={images} /> */}
      <div className="image-container">
        <img src="/background-2.jpg" alt="Background" />
      </div>
      <div className="best-sellers-container">
        <h1>Home & Decor</h1>
        <div className="best-sellers-slider">
          <div className="best-sellers-card-container">
            <div className="best-sellers-card">
              <div className="best-sellers-card-image">
                <img src="/formatted/aura.jpeg" alt="Best Sellers" />
              </div>
              <div className="card-details">
                Aura
                <div className="price">32,19 €</div>
              </div>
            </div>
            <div className="best-sellers-card">
              <div className="best-sellers-card-image">
                <img src="/formatted/blossom.jpeg" alt="Best Sellers" />
              </div>
              <div className="card-details">
                Blossom
                <div className="price">13,90 €</div>
              </div>
            </div>
            <div className="best-sellers-card">
              <div className="best-sellers-card-image">
                <img src="/formatted/elegance.jpeg" alt="Best Sellers" />
              </div>
              <div className="card-details">
                Elegance
                <div className="price">15,90 €</div>
              </div>
            </div>
            <div className="best-sellers-card">
              <div className="best-sellers-card-image">
                <img src="/formatted/essence.jpeg" alt="Best Sellers" />
              </div>
              <div className="card-details">
                Essence
                <div className="price">29,90 €</div>
              </div>
            </div>
            <div className="best-sellers-card">
              <div className="best-sellers-card-image">
                <img src="/formatted/harmonia.jpeg" alt="Best Sellers" />
              </div>
              <div className="card-details">
                Harmonia
                <div className="price">12,90 €</div>
              </div>
            </div>
            <div className="best-sellers-card">
              <div className="best-sellers-card-image">
                <img src="/formatted/refine.jpeg" alt="Best Sellers" />
              </div>
              <div className="card-details">
                Refine
                <div className="price">17,90 €</div>
              </div>
            </div>
          </div>
        </div>
        <h1>Where minimalist style takes shape in every detail</h1>
      </div>
      <div className="image-container">
        <img src="/background-2.jpg" alt="Background" />
      </div>
    </div>
  );
};
