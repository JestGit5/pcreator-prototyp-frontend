import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ComponentComparisonsProps {
  onNavigate: (sectionId: string) => void;
  onBack: () => void;
  onKonfiguratorClick?: () => void;
  onKnowledgeClick?: () => void;
  onGotoweKonfiguracjeClick?: () => void;
  onLoginClick?: () => void;
}

const ComponentComparisons: React.FC<ComponentComparisonsProps> = ({
  onNavigate,
  onBack,
  onKonfiguratorClick,
  onKnowledgeClick,
  onGotoweKonfiguracjeClick,
  onLoginClick,
}) => {
  return (
    <div className="component-comparisons-page">
      <Navbar
        onNavigate={onNavigate}
        onKonfiguratorClick={onKonfiguratorClick}
        onKnowledgeClick={onKnowledgeClick}
        onLoginClick={onLoginClick}
      />

      <div className="comparisons-content">
        <div className="comparisons-title-section">
          <div className="comparisons-page-title">
            <div className="comparisons-page-title-text">
              Porównania podzespołów
            </div>
          </div>
        </div>

        <div className="search-filter-section">
          <div className="search-box">
            <div className="search-input-container">
              <div className="search-input-text">Wyszukaj komponent</div>
            </div>
          </div>
          <div className="filter-controls">
            <div className="search-button-container">
              <div className="search-icon-wrapper">
                <img
                  src="https://via.placeholder.com/100x33/805BB3/FFFFFF?text=Search"
                  alt="Search icon"
                  className="search-icon"
                />
              </div>
              <div className="search-button-text">Szukaj</div>
            </div>
            <div className="filter-buttons">
              <div className="sort-button-container">
                <div className="sort-icon-wrapper">
                  <img
                    src="https://via.placeholder.com/100x56/24303D/FFFFFF?text=Sort"
                    alt="Sort icon"
                    className="sort-icon"
                  />
                </div>
                <div className="sort-button-text">Sortuj</div>
              </div>
              <div className="filter-button-container">
                <div className="filter-icon-wrapper">
                  <img
                    src="https://via.placeholder.com/100x56/24303D/FFFFFF?text=Filter"
                    alt="Filter icon"
                    className="filter-icon"
                  />
                </div>
                <div className="filter-button-text">Filtruj</div>
              </div>
            </div>
          </div>
        </div>

        <div className="components-list">
          <div className="component-row">
            <div className="component-preview">
              <div className="component-title-section">
                <div className="component-title">
                  <div className="component-title-text">Podzespół</div>
                </div>
              </div>
              <div className="component-image-container">
                <img
                  src="https://via.placeholder.com/220x242/666666/FFFFFF?text=GPU"
                  alt="Component"
                  className="component-image"
                />
              </div>
            </div>
            <div className="component-specs">
              <div className="spec-row">
                <div className="spec-label">
                  <div className="spec-label-text">Układ graficzny</div>
                </div>
                <div className="spec-value">
                  <div className="spec-value-text">GeForce RTX 5070 Ti</div>
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-label">
                  <div className="spec-label-text">Pamięć</div>
                </div>
                <div className="spec-value">
                  <div className="spec-value-text">16 GB</div>
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-label">
                  <div className="spec-label-text">Rodzaj pamięci</div>
                </div>
                <div className="spec-value">
                  <div className="spec-value-text">GDDR7</div>
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-label">
                  <div className="spec-label-text">
                    Rekomendowana moc zasilacza
                  </div>
                </div>
                <div className="spec-value">
                  <div className="spec-value-text">850 W</div>
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-label">
                  <div className="spec-label-text">Rodzaje wyjść</div>
                </div>
                <div className="spec-value">
                  <div className="spec-value-text">
                    HDMI 2.1b - 2 szt. DisplayPort 2.1a - 3 szt.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="component-row">
            <div className="component-preview">
              <div className="component-title-section">
                <div className="component-title">
                  <div className="component-title-text">Podzespół</div>
                </div>
              </div>
              <div className="component-image-container">
                <img
                  src="https://via.placeholder.com/220x242/666666/FFFFFF?text=GPU"
                  alt="Component"
                  className="component-image"
                />
              </div>
            </div>
            <div className="component-specs">
              <div className="spec-row">
                <div className="spec-label">
                  <div className="spec-label-text">Układ graficzny</div>
                </div>
                <div className="spec-value">
                  <div className="spec-value-text">GeForce RTX 5070 Ti</div>
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-label">
                  <div className="spec-label-text">Pamięć</div>
                </div>
                <div className="spec-value">
                  <div className="spec-value-text">16 GB</div>
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-label">
                  <div className="spec-label-text">Rodzaj pamięci</div>
                </div>
                <div className="spec-value">
                  <div className="spec-value-text">GDDR7</div>
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-label">
                  <div className="spec-label-text">
                    Rekomendowana moc zasilacza
                  </div>
                </div>
                <div className="spec-value">
                  <div className="spec-value-text">850 W</div>
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-label">
                  <div className="spec-label-text">Rodzaje wyjść</div>
                </div>
                <div className="spec-value">
                  <div className="spec-value-text">
                    HDMI 2.1b - 2 szt. DisplayPort 2.1a - 3 szt.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="component-row">
            <div className="component-preview">
              <div className="component-title-section">
                <div className="component-title">
                  <div className="component-title-text">Podzespół</div>
                </div>
              </div>
              <div className="component-image-container">
                <img
                  src="https://via.placeholder.com/220x242/666666/FFFFFF?text=GPU"
                  alt="Component"
                  className="component-image"
                />
              </div>
            </div>
            <div className="component-specs">
              <div className="spec-row">
                <div className="spec-label">
                  <div className="spec-label-text">Układ graficzny</div>
                </div>
                <div className="spec-value">
                  <div className="spec-value-text">GeForce RTX 5070 Ti</div>
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-label">
                  <div className="spec-label-text">Pamięć</div>
                </div>
                <div className="spec-value">
                  <div className="spec-value-text">16 GB</div>
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-label">
                  <div className="spec-label-text">Rodzaj pamięci</div>
                </div>
                <div className="spec-value">
                  <div className="spec-value-text">GDDR7</div>
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-label">
                  <div className="spec-label-text">
                    Rekomendowana moc zasilacza
                  </div>
                </div>
                <div className="spec-value">
                  <div className="spec-value-text">850 W</div>
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-label">
                  <div className="spec-label-text">Rodzaje wyjść</div>
                </div>
                <div className="spec-value">
                  <div className="spec-value-text">
                    HDMI 2.1b - 2 szt. DisplayPort 2.1a - 3 szt.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="detailed-comparisons">
          <div className="comparison-title-container">
            <div className="comparison-title">
              <span className="comparison-product-name">
                GeForce RTX 5070 Ti{" "}
              </span>
              <span className="comparison-vs">VS</span>
              <span className="comparison-product-name">
                {" "}
                GeForce RTX 4070 Ti
              </span>
            </div>
          </div>

          <div className="comparison-element top-comparison">
            <div className="comparison-image-box">
              <img
                src="https://via.placeholder.com/188x348/666666/FFFFFF?text=RTX+5070+Ti"
                alt="RTX 5070 Ti"
                className="comparison-image"
              />
            </div>
            <div className="comparison-specs-container">
              <div className="comparison-product-title-container">
                <div className="comparison-product-title">
                  ASUS GeForce RTX 5070 Ti TUF Gaming OC
                </div>
              </div>
              <div className="comparison-spec-row">
                <div className="comparison-spec-label">
                  <div className="comparison-spec-label-text">
                    Układ graficzny
                  </div>
                </div>
                <div className="comparison-spec-value">
                  <div className="comparison-spec-value-text">
                    GeForce RTX 5070 Ti
                  </div>
                </div>
              </div>
              <div className="comparison-spec-row">
                <div className="comparison-spec-label">
                  <div className="comparison-spec-label-text">Pamięć</div>
                </div>
                <div className="comparison-spec-value">
                  <div className="comparison-spec-value-text">16 GB</div>
                </div>
              </div>
              <div className="comparison-spec-row">
                <div className="comparison-spec-label">
                  <div className="comparison-spec-label-text">
                    Rodzaj pamięci
                  </div>
                </div>
                <div className="comparison-spec-value">
                  <div className="comparison-spec-value-text">GDDR7</div>
                </div>
              </div>
              <div className="comparison-spec-row">
                <div className="comparison-spec-label">
                  <div className="comparison-spec-label-text">Złącza</div>
                </div>
                <div className="comparison-spec-value">
                  <div className="comparison-spec-value-text">
                    HDMI 2.1b - 2 szt., DisplayPort 2.1a - 3 szt.
                  </div>
                </div>
              </div>
              <div className="comparison-score-container">
                <div className="comparison-score loser">
                  3D Mark Fire Strike: 25422
                </div>
              </div>
            </div>
          </div>

          <div className="comparison-element bottom-comparison">
            <div className="comparison-specs-container">
              <div className="comparison-product-title-container">
                <div className="comparison-product-title">
                  Gigabyte GeForce RTX 4070 Ti GAMING OC
                </div>
              </div>
              <div className="comparison-spec-row">
                <div className="comparison-spec-label">
                  <div className="comparison-spec-label-text">
                    Układ graficzny
                  </div>
                </div>
                <div className="comparison-spec-value">
                  <div className="comparison-spec-value-text">
                    GeForce RTX 4070 Ti
                  </div>
                </div>
              </div>
              <div className="comparison-spec-row">
                <div className="comparison-spec-label">
                  <div className="comparison-spec-label-text">Pamięć</div>
                </div>
                <div className="comparison-spec-value">
                  <div className="comparison-spec-value-text">12 GB</div>
                </div>
              </div>
              <div className="comparison-spec-row">
                <div className="comparison-spec-label">
                  <div className="comparison-spec-label-text">
                    Rodzaj pamięci
                  </div>
                </div>
                <div className="comparison-spec-value">
                  <div className="comparison-spec-value-text">GDDR6X</div>
                </div>
              </div>
              <div className="comparison-spec-row">
                <div className="comparison-spec-label">
                  <div className="comparison-spec-label-text">Złącza</div>
                </div>
                <div className="comparison-spec-value">
                  <div className="comparison-spec-value-text">
                    HDMI 2.1 - 1 szt., DisplayPort 1.4 - 3 szt.
                  </div>
                </div>
              </div>
              <div className="comparison-score-container">
                <div className="comparison-score winner">
                  3D Mark Fire Strike: 31038
                </div>
              </div>
            </div>
            <div className="comparison-image-box">
              <img
                src="https://via.placeholder.com/188x348/666666/FFFFFF?text=RTX+4070+Ti"
                alt="RTX 4070 Ti"
                className="comparison-image"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer
        onNavigate={onNavigate}
        onKonfiguratorClick={onKonfiguratorClick}
        onKnowledgeClick={onKnowledgeClick}
      />
    </div>
  );
};

export default ComponentComparisons;
