import React from "react";

const Comparisons: React.FC = () => {
  const rtx5070Ti = {
    name: "ASUS GeForce RTX 5070 Ti TUF Gaming OC",
    image: "https://via.placeholder.com/350x350/666666/ffffff?text=RTX+5070+Ti",
    specs: [
      { label: "Układ graficzny", value: "GeForce RTX 5070 Ti" },
      { label: "Pamięć", value: "16 GB" },
      { label: "Rodzaj pamięci", value: "GDDR7" },
      {
        label: "Złącza",
        value: "HDMI 2.1b - 2 szt., DisplayPort 2.1a - 3 szt.",
      },
    ],
    score: "25422",
    isWinner: false,
  };

  const rtx4070Ti = {
    name: "Gigabyte GeForce RTX 4070 Ti GAMING OC",
    image: "https://via.placeholder.com/350x350/666666/ffffff?text=RTX+4070+Ti",
    specs: [
      { label: "Układ graficzny", value: "GeForce RTX 4070 Ti" },
      { label: "Pamięć", value: "12 GB" },
      { label: "Rodzaj pamięci", value: "GDDR6X" },
      { label: "Złącza", value: "HDMI 2.1 - 1 szt., DisplayPort 1.4 - 3 szt." },
    ],
    score: "31038",
    isWinner: true,
  };

  const ComparisonCard = ({
    product,
    isTop = false,
    imagePosition = "left",
  }: {
    product: typeof rtx5070Ti;
    isTop?: boolean;
    imagePosition?: "left" | "right";
  }) => (
    <div className={`comparison-element ${isTop ? "top" : "bottom"}`}>
      {imagePosition === "left" && (
        <div className="comparison-image-box">
          <img
            src={product.image}
            alt={product.name}
            className="comparison-image"
          />
        </div>
      )}

      <div className="comparison-specs">
        <div className="comparison-product-title-container">
          <div className="comparison-product-title">{product.name}</div>
        </div>

        {product.specs.map((spec, index) => (
          <div
            key={index}
            className={`comparison-row ${index > 0 ? "small-padding" : ""}`}
          >
            <div className="comparison-label">
              <div className="comparison-label-text">{spec.label}</div>
            </div>
            <div className="comparison-value">
              <div className="comparison-value-text">{spec.value}</div>
            </div>
          </div>
        ))}

        <div className="comparison-score-container">
          <div
            className={`comparison-score ${product.isWinner ? "winner" : "loser"}`}
          >
            3D Mark Fire Strike: {product.score}
          </div>
        </div>
      </div>

      {imagePosition === "right" && (
        <div className="comparison-image-box">
          <img
            src={product.image}
            alt={product.name}
            className="comparison-image"
          />
        </div>
      )}
    </div>
  );

  return (
    <section id="comparisons" className="comparisons-section">
      <div className="comparison-title-container">
        <div className="comparison-title">
          <div>GeForce RTX 5070 Ti</div>
          <div className="comparison-vs">VS</div>
          <div>GeForce RTX 4070 Ti</div>
        </div>
      </div>

      <ComparisonCard product={rtx5070Ti} isTop={true} imagePosition="left" />
      <ComparisonCard product={rtx4070Ti} isTop={false} imagePosition="right" />
    </section>
  );
};

export default Comparisons;
