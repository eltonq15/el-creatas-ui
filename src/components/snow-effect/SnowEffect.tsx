import "./styles.scss";

const SNOWFLAKES = ["❄", "❅", "❆", "❉", "❊", "✻", "✼", "❋"];

const SnowEffect = () => {
  return (
    <div id="snow-container">
      {[...Array(50)].map((_, index) => (
        <div key={index} className="snow">
          {SNOWFLAKES[Math.floor(Math.random() * SNOWFLAKES.length)]}
        </div>
      ))}
    </div>
  );
};

export default SnowEffect;
