import React, { useState } from "react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onKonfiguratorClick?: () => void;
  onKnowledgeClick?: () => void;
  onLoginClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  onKonfiguratorClick,
  onKnowledgeClick,
  onLoginClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a2a0a67493ca40f49deef99f70bd185e/3fe4550592b5a79a85fb8d859c4e2f901407a538?placeholderIfAbsent=true"
          alt="Konfigurator Logo"
        />
      </div>

      <div className="navbar-menu">
        <div className="menu-item" onClick={() => handleNavigate("offer")}>
          <div className="menu-item-text">Nasza oferta</div>
        </div>
        <div
          className="menu-item"
          onClick={() => {
            if (onKnowledgeClick) {
              onKnowledgeClick();
              setIsMobileMenuOpen(false);
            } else {
              handleNavigate("knowledge");
            }
          }}
        >
          <div className="menu-item-text">Użyteczna wiedza</div>
        </div>
        <div className="menu-item" onClick={() => handleNavigate("configs")}>
          <div className="menu-item-text">Gotowe konfiguracje</div>
        </div>
        <div
          className="menu-item"
          onClick={() => handleNavigate("comparisons")}
        >
          <div className="menu-item-text">Porównania podzespołów</div>
        </div>
      </div>

      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>

      <div className="navbar-buttons">
        <button
          className="configurator-btn"
          onClick={() => {
            if (onKonfiguratorClick) {
              onKonfiguratorClick();
              setIsMobileMenuOpen(false);
            }
          }}
        >
          <div className="configurator-btn-text">Konfigurator</div>
        </button>
        <button
          className="account-btn"
          onClick={() => {
            if (onLoginClick) {
              onLoginClick();
              setIsMobileMenuOpen(false);
            }
          }}
        >
          <div className="account-btn-text">Twoje konto</div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div
          className="mobile-menu-item"
          onClick={() => handleNavigate("offer")}
        >
          <div className="mobile-menu-item-text">Nasza oferta</div>
        </div>
        <div
          className="mobile-menu-item"
          onClick={() => {
            if (onKnowledgeClick) {
              onKnowledgeClick();
              setIsMobileMenuOpen(false);
            } else {
              handleNavigate("knowledge");
            }
          }}
        >
          <div className="mobile-menu-item-text">Użyteczna wiedza</div>
        </div>
        <div
          className="mobile-menu-item"
          onClick={() => handleNavigate("configs")}
        >
          <div className="mobile-menu-item-text">Gotowe konfiguracje</div>
        </div>
        <div
          className="mobile-menu-item"
          onClick={() => handleNavigate("comparisons")}
        >
          <div className="mobile-menu-item-text">Porównania podzespołów</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
