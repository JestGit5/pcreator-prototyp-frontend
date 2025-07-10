interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onKonfiguratorClick?: () => void;
  onKnowledgeClick?: () => void;
}

const Footer = ({
  onNavigate,
  onKonfiguratorClick,
  onKnowledgeClick,
}: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer-section footer-brand">
        <div className="footer-brand-content">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a2a0a67493ca40f49deef99f70bd185e/0ba4273162b7368e2db91b52a12d74de60cbb54a?placeholderIfAbsent=true"
            alt="Footer Logo"
            className="footer-logo"
          />
          <div className="footer-description-container">
            <div className="footer-description">
              Konfigurator jednostek desktopowych z wykorzystaniem asystenta Ai.
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section footer-links">
        <div
          className="footer-link"
          onClick={() => alert("Terms coming soon!")}
        >
          <div className="footer-link-text">Regulamin</div>
        </div>
        <div
          className="footer-link"
          onClick={() => alert("Privacy policy coming soon!")}
        >
          <div className="footer-link-text">Polityka prywatności</div>
        </div>
        <div className="footer-copyright-container">
          <div className="footer-copyright">
            <span>Wszelkie prawa zastrzeżone</span> <span>©</span> PCReator{" "}
            <span>2025</span>
          </div>
        </div>
      </div>

      <div className="footer-section footer-menu">
        <div className="footer-menu-title-container">
          <div className="footer-menu-title">Menu</div>
        </div>
        <div className="footer-menu-item" onClick={onKonfiguratorClick}>
          <div className="footer-menu-item-text">Konfigurator</div>
        </div>
        <div className="footer-menu-item" onClick={() => onNavigate("configs")}>
          <div className="footer-menu-item-text">Gotowe konfiguracja</div>
        </div>
        <div className="footer-menu-item" onClick={() => onNavigate("offer")}>
          <div className="footer-menu-item-text">Nasza oferta</div>
        </div>
        <div
          className="footer-menu-item"
          onClick={() => onNavigate("comparisons")}
        >
          <div className="footer-menu-item-text">Porównania podzespołów</div>
        </div>
        <div
          className="footer-menu-item"
          onClick={() => {
            if (onKnowledgeClick) {
              onKnowledgeClick();
            } else {
              onNavigate("knowledge");
            }
          }}
        >
          <div className="footer-menu-item-text">Przydatna wiedza</div>
        </div>
      </div>

      <div className="footer-section footer-social">
        <div
          className="social-item"
          onClick={() => window.open("https://youtube.com", "_blank")}
        >
          <div className="social-icon-container">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a2a0a67493ca40f49deef99f70bd185e/29335bcf02a0080d9461158c4a373b05fbcba2b9?placeholderIfAbsent=true"
              alt="YouTube icon"
              className="social-icon"
            />
          </div>
          <div className="social-text">YouTube</div>
        </div>
        <div
          className="social-item"
          onClick={() => window.open("https://facebook.com", "_blank")}
        >
          <div className="social-icon-container">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a2a0a67493ca40f49deef99f70bd185e/d56a4c1ccb9586d0d7d6c4e46b386bd5c8d0e6cf?placeholderIfAbsent=true"
              alt="Facebook icon"
              className="social-icon"
            />
          </div>
          <div className="social-text">Facebook</div>
        </div>
        <div
          className="social-item"
          onClick={() => window.open("https://instagram.com", "_blank")}
        >
          <div className="social-icon-container">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a2a0a67493ca40f49deef99f70bd185e/1562bb8f562082d046adf1cb512b17eb583cae3d?placeholderIfAbsent=true"
              alt="Instagram icon"
              className="social-icon"
            />
          </div>
          <div className="social-text">Instagram</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
