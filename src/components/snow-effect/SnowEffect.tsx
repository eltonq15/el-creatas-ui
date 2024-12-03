import "./styles.scss";

const SnowEffect = () => {
  return (
    <div id="snow-container">
      {[...Array(50)].map((_, index) => (
        <div key={index} className="snow"></div>
      ))}
    </div>
  );
};

export default SnowEffect;
