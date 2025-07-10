import React, { useState } from "react";
import "../styles/Rejestracja.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface RejestracjaProps {
  onNavigate: (sectionId: string) => void;
  onBack: () => void;
  onKonfiguratorClick: () => void;
  onKnowledgeClick: () => void;
  onGotoweKonfiguracjeClick: () => void;
}

const Rejestracja: React.FC<RejestracjaProps> = ({
  onNavigate,
  onBack,
  onKonfiguratorClick,
  onKnowledgeClick,
  onGotoweKonfiguracjeClick,
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
    <div className="rejestracja-page">
      <Navbar
        onNavigate={handleNavigate}
        onKonfiguratorClick={onKonfiguratorClick}
        onKnowledgeClick={onKnowledgeClick}
        onLoginClick={onBack}
      />

      <div className="main-content">
        <div className="registration-container">
          <div className="title-section">
            <div className="page-title">Rejestracja</div>
          </div>
          <div className="form-content">
            <div className="social-login-section">
              <div className="social-login-button email-login">
                <div className="social-login-text">
                  Zaloguj się przy użyciu e-mail
                </div>
              </div>
            </div>
            <div className="social-login-section">
              <div className="social-login-button google-login">
                <div className="social-login-text">
                  Zaloguj się przy użyciu Google
                </div>
              </div>
            </div>
            <div className="input-section">
              <div className="input-field">
                <div className="input-text">login</div>
              </div>
            </div>
            <div className="input-section">
              <div className="input-field">
                <div className="input-text">e-mail</div>
              </div>
            </div>
            <div className="input-section">
              <div className="input-field">
                <div className="input-text">hasło</div>
              </div>
            </div>
            <div className="input-section">
              <div className="input-field">
                <div className="input-text">powtórz hasło</div>
              </div>
            </div>
            <div className="submit-section">
              <div className="submit-button">
                <div className="submit-text">Stwóz konto</div>
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

export default Rejestracja;
