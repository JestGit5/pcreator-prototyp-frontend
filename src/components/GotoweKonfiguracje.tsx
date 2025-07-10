import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface GotoweKonfiguracjeProps {
  onNavigate: (sectionId: string) => void;
  onBack: () => void;
  onKonfiguratorClick: () => void;
  onKnowledgeClick: () => void;
  onLoginClick?: () => void;
}

const GotoweKonfiguracje: React.FC<GotoweKonfiguracjeProps> = ({
  onNavigate,
  onKonfiguratorClick,
  onKnowledgeClick,
  onLoginClick,
}) => {
  return (
    <div className="gotowe-konfiguracje-page">
      <Navbar
        onNavigate={onNavigate}
        onKonfiguratorClick={onKonfiguratorClick}
        onKnowledgeClick={onKnowledgeClick}
        onLoginClick={onLoginClick}
      />

      <div className="gotowe-content">
        <div className="gotowe-title-container">
          <div className="gotowe-title">Gotowe konfiguracje</div>
        </div>

        <div className="search-container">
          <div className="search-input-section">
            <div className="search-description-container">
              <div className="search-description">Wyszukaj komponent</div>
            </div>
          </div>
          <div className="search-button-section">
            <div className="search-button-wrapper">
              <button className="search-btn">
                <div className="search-icon-container">
                  <img
                    src="https://via.placeholder.com/100x60/805BB3/FFF?text=🔍"
                    alt="Search icon"
                    className="search-icon"
                  />
                </div>
                <div className="search-btn-text">Szukaj</div>
              </button>
            </div>
          </div>
        </div>

        <div className="configuration-list">
          <div className="configuration-item">
            <div className="config-item-content">
              <div className="config-image-section">
                <img
                  src="https://via.placeholder.com/775x400/24303D/D9D9D9?text=PC+Configuration"
                  alt="Computer configuration"
                  className="config-item-image"
                />
              </div>
              <div className="config-info-section">
                <div className="config-item-title-container">
                  <div className="config-item-title">Kumputer za 500 zł</div>
                </div>
                <div className="config-item-description-container">
                  <div className="config-item-description">
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book
                  </div>
                </div>
                <div className="config-item-cta-container">
                  <div className="config-item-cta">Sprawdź zestaw →</div>
                </div>
              </div>
            </div>
          </div>

          <div className="configuration-item">
            <div className="config-item-content">
              <div className="config-image-section">
                <img
                  src="https://via.placeholder.com/775x400/24303D/D9D9D9?text=PC+Configuration"
                  alt="Computer configuration"
                  className="config-item-image"
                />
              </div>
              <div className="config-info-section">
                <div className="config-item-title-container">
                  <div className="config-item-title">Kumputer za 500 zł</div>
                </div>
                <div className="config-item-description-container">
                  <div className="config-item-description">
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book
                  </div>
                </div>
                <div className="config-item-cta-container">
                  <div className="config-item-cta">Sprawdź zestaw →</div>
                </div>
              </div>
            </div>
          </div>

          <div className="configuration-item">
            <div className="config-item-content">
              <div className="config-image-section">
                <img
                  src="https://via.placeholder.com/775x400/24303D/D9D9D9?text=PC+Configuration"
                  alt="Computer configuration"
                  className="config-item-image"
                />
              </div>
              <div className="config-info-section">
                <div className="config-item-title-container">
                  <div className="config-item-title">Kumputer za 500 zł</div>
                </div>
                <div className="config-item-description-container">
                  <div className="config-item-description">
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book
                  </div>
                </div>
                <div className="config-item-cta-container">
                  <div className="config-item-cta">Sprawdź zestaw →</div>
                </div>
              </div>
            </div>
          </div>

          <div className="configuration-item">
            <div className="config-item-content">
              <div className="config-image-section">
                <img
                  src="https://via.placeholder.com/775x400/24303D/D9D9D9?text=PC+Configuration"
                  alt="Computer configuration"
                  className="config-item-image"
                />
              </div>
              <div className="config-info-section">
                <div className="config-item-title-container">
                  <div className="config-item-title">Kumputer za 500 zł</div>
                </div>
                <div className="config-item-description-container">
                  <div className="config-item-description">
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book
                  </div>
                </div>
                <div className="config-item-cta-container">
                  <div className="config-item-cta">Sprawdź zestaw →</div>
                </div>
              </div>
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

export default GotoweKonfiguracje;
