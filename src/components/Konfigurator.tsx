import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface KonfiguratorProps {
  onNavigate?: (sectionId: string) => void;
  onBack?: () => void;
  onKonfiguratorClick?: () => void;
  onKnowledgeClick?: () => void;
  onGotoweKonfiguracjeClick?: () => void;
  onLoginClick?: () => void;
  onComponentComparisonsClick?: () => void;
}

const Konfigurator: React.FC<KonfiguratorProps> = ({
  onBack,
  onKonfiguratorClick,
  onKnowledgeClick,
  onGotoweKonfiguracjeClick,
  onLoginClick,
  onComponentComparisonsClick,
}) => {
  return (
    <div className="konfigurator">
      <Navbar
        onNavigate={(sectionId: string) => {
          if (sectionId === "configs" && onGotoweKonfiguracjeClick) {
            onGotoweKonfiguracjeClick();
          } else if (
            sectionId === "comparisons" &&
            onComponentComparisonsClick
          ) {
            onComponentComparisonsClick();
          } else if (onBack) {
            onBack();
          }
        }}
        onKonfiguratorClick={() => {
          // Already on konfigurator page, no navigation needed
        }}
        onKnowledgeClick={onKnowledgeClick}
        onLoginClick={onLoginClick}
      />

      <div className="konfigurator-content">
        <div className="konfigurator-title">
          <div className="konfigurator-title-text">Konfigurator</div>
        </div>

        <div className="konfigurator-search-section">
          <div className="konfigurator-search-input">
            <div className="konfigurator-search-text">Wyszukaj komponent</div>
          </div>
          <div className="konfigurator-search-controls">
            <div className="konfigurator-search-actions">
              <div className="konfigurator-search-btn">
                <div className="konfigurator-search-icon">
                  <img
                    src="https://via.placeholder.com/100x100/805BB3/FFFFFF?text=🔍"
                    alt=""
                  />
                </div>
                <div className="konfigurator-search-btn-text">Szukaj</div>
              </div>
            </div>
            <div className="konfigurator-action-buttons">
              <div className="konfigurator-action-btn new">
                <div className="konfigurator-action-icon">
                  <img
                    src="https://via.placeholder.com/100x100/0567A8/FFFFFF?text=+"
                    alt=""
                  />
                </div>
                <div className="konfigurator-action-btn-text">Nowy</div>
              </div>
              <div className="konfigurator-action-btn save">
                <div className="konfigurator-action-icon">
                  <img
                    src="https://via.placeholder.com/100x100/0567A8/FFFFFF?text=💾"
                    alt=""
                  />
                </div>
                <div className="konfigurator-action-btn-text">Zapisz</div>
              </div>
            </div>
          </div>
        </div>

        <div className="konfigurator-table-header">
          <div className="konfigurator-header-cell">
            <div className="konfigurator-header-text">Komponent</div>
          </div>
          <div className="konfigurator-header-cell">
            <div className="konfigurator-header-text">Produkt</div>
          </div>
          <div className="konfigurator-header-cell">
            <div className="konfigurator-header-text">Cena przed rabatem</div>
          </div>
          <div className="konfigurator-header-cell">
            <div className="konfigurator-header-text">Rabat</div>
          </div>
          <div className="konfigurator-header-cell">
            <div className="konfigurator-header-text">Dostępność</div>
          </div>
          <div className="konfigurator-header-cell">
            <div className="konfigurator-header-text">Cena po rabacie</div>
          </div>
        </div>

        <div className="konfigurator-table-row">
          <div className="konfigurator-component-cell">
            <div className="konfigurator-component-text">CPU</div>
          </div>
          <div className="konfigurator-product-cell">
            <div className="konfigurator-product-image">
              <img
                src="https://via.placeholder.com/100x100/CCCCCC/000000?text=CPU"
                alt=""
              />
            </div>
            <div className="konfigurator-product-description">
              <div className="konfigurator-product-text">
                AMD Ryzen 7 9800X3D 4.7 GHz 8-Core Processor
              </div>
            </div>
          </div>
          <div className="konfigurator-price-cell">
            <div className="konfigurator-price-text">1799.00</div>
          </div>
          <div className="konfigurator-discount-cell">
            <div className="konfigurator-discount-text">10%</div>
          </div>
          <div className="konfigurator-availability-cell">
            <div className="konfigurator-availability-text available">Duża</div>
          </div>
          <div className="konfigurator-final-price-cell">
            <div className="konfigurator-final-price-text">1619.10</div>
          </div>
          <div className="konfigurator-remove-cell">
            <img
              src="https://via.placeholder.com/100x100/FF0000/FFFFFF?text=X"
              alt=""
            />
          </div>
        </div>

        <div className="konfigurator-table-row">
          <div className="konfigurator-component-cell">
            <div className="konfigurator-component-text">Chłodzenie CPU</div>
          </div>
          <div className="konfigurator-product-cell">
            <div className="konfigurator-product-image">
              <img
                src="https://via.placeholder.com/100x100/CCCCCC/000000?text=COOL"
                alt=""
              />
            </div>
            <div className="konfigurator-product-description">
              <div className="konfigurator-product-text">
                NZXT Kraken 360 78.02 CFM Liquid CPU Cooler
              </div>
            </div>
          </div>
          <div className="konfigurator-price-cell">
            <div className="konfigurator-price-text">1379.00</div>
          </div>
          <div className="konfigurator-discount-cell">
            <div className="konfigurator-discount-text">10%</div>
          </div>
          <div className="konfigurator-availability-cell">
            <div className="konfigurator-availability-text unavailable">
              Brak
            </div>
          </div>
          <div className="konfigurator-final-price-cell">
            <div className="konfigurator-final-price-text">1241.10</div>
          </div>
          <div className="konfigurator-remove-cell">
            <img
              src="https://via.placeholder.com/100x100/FF0000/FFFFFF?text=X"
              alt=""
            />
          </div>
        </div>

        <div className="konfigurator-table-row select-row">
          <div className="konfigurator-component-cell">
            <div className="konfigurator-component-text">Płyta Główna</div>
          </div>
          <div className="konfigurator-select-cell">
            <div className="konfigurator-select-btn">
              <div className="konfigurator-select-text">
                Wybierz płytę główną
              </div>
            </div>
          </div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
        </div>

        <div className="konfigurator-table-row select-row">
          <div className="konfigurator-component-cell">
            <div className="konfigurator-component-text">Pamięć</div>
          </div>
          <div className="konfigurator-select-cell">
            <div className="konfigurator-select-btn">
              <div className="konfigurator-select-text">Wybierz pamięć</div>
            </div>
          </div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
        </div>

        <div className="konfigurator-table-row select-row">
          <div className="konfigurator-component-cell">
            <div className="konfigurator-component-text">Dysk</div>
          </div>
          <div className="konfigurator-select-cell">
            <div className="konfigurator-select-btn">
              <div className="konfigurator-select-text">Wybierz dysk</div>
            </div>
          </div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
        </div>

        <div className="konfigurator-table-row select-row">
          <div className="konfigurator-component-cell">
            <div className="konfigurator-component-text">Karta Graficzna</div>
          </div>
          <div className="konfigurator-select-cell">
            <div className="konfigurator-select-btn">
              <div className="konfigurator-select-text">
                Wybierz karta graficzna
              </div>
            </div>
          </div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
        </div>

        <div className="konfigurator-table-row select-row">
          <div className="konfigurator-component-cell">
            <div className="konfigurator-component-text">Obudowa</div>
          </div>
          <div className="konfigurator-select-cell">
            <div className="konfigurator-select-btn">
              <div className="konfigurator-select-text">Wybierz obudowa</div>
            </div>
          </div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
        </div>

        <div className="konfigurator-table-row select-row">
          <div className="konfigurator-component-cell">
            <div className="konfigurator-component-text">Zasilacz</div>
          </div>
          <div className="konfigurator-select-cell">
            <div className="konfigurator-select-btn">
              <div className="konfigurator-select-text">Wybierz zasilacz</div>
            </div>
          </div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
        </div>

        <div className="konfigurator-table-row select-row">
          <div className="konfigurator-component-cell">
            <div className="konfigurator-component-text">System operacyjny</div>
          </div>
          <div className="konfigurator-select-cell">
            <div className="konfigurator-select-btn">
              <div className="konfigurator-select-text">
                Wybierz system operacyjny
              </div>
            </div>
          </div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
        </div>

        <div className="konfigurator-table-row select-row">
          <div className="konfigurator-component-cell">
            <div className="konfigurator-component-text">Monitor</div>
          </div>
          <div className="konfigurator-select-cell">
            <div className="konfigurator-select-btn">
              <div className="konfigurator-select-text">Wybierz monitor</div>
            </div>
          </div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
          <div className="konfigurator-empty-cell"></div>
        </div>
      </div>

      <Footer
        onNavigate={(sectionId: string) => {
          if (sectionId === "configs" && onGotoweKonfiguracjeClick) {
            onGotoweKonfiguracjeClick();
          } else if (
            sectionId === "comparisons" &&
            onComponentComparisonsClick
          ) {
            onComponentComparisonsClick();
          } else if (onBack) {
            onBack();
          }
        }}
        onKonfiguratorClick={onKonfiguratorClick}
        onKnowledgeClick={onKnowledgeClick}
      />
    </div>
  );
};

export default Konfigurator;
