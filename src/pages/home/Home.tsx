import Aura from "../../assets/formatted/aura.jpg";
import Background from "../../assets/background-2.jpg";
import Blossom from "../../assets/formatted/blossom.jpg";
import Elegance from "../../assets/formatted/elegance.jpg";
import Essence from "../../assets/formatted/essence.jpg";
import Harmonia from "../../assets/formatted/harmonia.jpg";
import Refine from "../../assets/formatted/refine.jpg";

import "./styles.scss";

export const Home = () => {
  return (
    <div className="home-container">
      {/* <ImageSlider images={images} /> */}
      <div className="image-container">
        <img src={Background} alt="Background" />
      </div>
      <div className="best-sellers-container">
        <h1>Home & Decor</h1>
        <div className="best-sellers-slider">
          <div className="best-sellers-card-container">
            <div className="best-sellers-card">
              <div className="best-sellers-card-image">
                <img src={Aura} alt="Best Sellers" />
              </div>
              <div className="card-details">
                Aura
                <div className="price">32,19 €</div>
              </div>
            </div>
            <div className="best-sellers-card">
              <div className="best-sellers-card-image">
                <img src={Blossom} alt="Best Sellers" />
              </div>
              <div className="card-details">
                Blossom
                <div className="price">13,90 €</div>
              </div>
            </div>
            <div className="best-sellers-card">
              <div className="best-sellers-card-image">
                <img src={Elegance} alt="Best Sellers" />
              </div>
              <div className="card-details">
                Elegance
                <div className="price">15,90 €</div>
              </div>
            </div>
            <div className="best-sellers-card">
              <div className="best-sellers-card-image">
                <img src={Essence} alt="Best Sellers" />
              </div>
              <div className="card-details">
                Essence
                <div className="price">29,90 €</div>
              </div>
            </div>
            <div className="best-sellers-card">
              <div className="best-sellers-card-image">
                <img src={Harmonia} alt="Best Sellers" />
              </div>
              <div className="card-details">
                Harmonia
                <div className="price">12,90 €</div>
              </div>
            </div>
            <div className="best-sellers-card">
              <div className="best-sellers-card-image">
                <img src={Refine} alt="Best Sellers" />
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
        <img src={Background} alt="Background" />
      </div>
    </div>
  );
};
