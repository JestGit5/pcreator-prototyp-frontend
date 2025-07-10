import React from "react";

interface HeroProps {
  onConfiguratorClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onConfiguratorClick }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="welcome-container">
        <div className="hero-title-container">
          <div className="hero-title">Zbuduj własny komputer</div>
        </div>
        <div className="hero-subtitle-container">
          <div className="hero-subtitle">
            Szukasz komputera spełniającego wszystkie twoje wymagania ?
            Przetestuj nasz konfiguratora !
          </div>
        </div>
        <button className="hero-cta-btn" onClick={onConfiguratorClick}>
          <div className="hero-cta-text">Konfigurator</div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
