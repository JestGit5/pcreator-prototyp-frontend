import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LogowanieProps {
  onNavigate: (sectionId: string) => void;
  onBack: () => void;
  onKonfiguratorClick: () => void;
  onKnowledgeClick: () => void;
  onGotoweKonfiguracjeClick: () => void;
  onRegistrationClick: () => void;
}

const Logowanie: React.FC<LogowanieProps> = ({
  onNavigate,
  onBack,
  onKonfiguratorClick,
  onKnowledgeClick,
  onGotoweKonfiguracjeClick,
  onRegistrationClick,
}) => {
  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
  };

  return (
    <div className="logowanie-page">
      <Navbar
        onNavigate={handleNavigate}
        onKonfiguratorClick={onKonfiguratorClick}
        onKnowledgeClick={onKnowledgeClick}
        onLoginClick={() => {}} // Empty function since we're already on login page
      />

      <div className="login-main-content">
        <div className="login-container">
          <div className="login-title-section">
            <div className="login-title">Logowania</div>
          </div>
          <div className="login-form-content">
            <div className="login-form-container">
              <div
                className="login-button primary-login"
                onClick={() => {
                  // Handle email login
                  alert("Email login functionality would be implemented here");
                }}
              >
                <div className="login-button-text">
                  Zaloguj się przy użyciu e-mail
                </div>
              </div>
            </div>
            <div className="login-form-container">
              <div
                className="login-button primary-login"
                onClick={() => {
                  // Handle social login (Google, Facebook, etc.)
                  alert("Social login functionality would be implemented here");
                }}
              >
                <div className="login-button-text">
                  Zaloguj się przy użyciu konta społecznościowego
                </div>
              </div>
            </div>
            <div className="login-form-container">
              <div
                className="login-button primary-login"
                onClick={() => {
                  onRegistrationClick();
                }}
              >
                <div className="login-button-text">Utwórz nowe konto</div>
              </div>
            </div>
            <div className="login-input-container">
              <div className="login-input-field">
                <input
                  type="email"
                  className="login-input-text"
                  placeholder="login"
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "rgba(181, 181, 181, 1)",
                    font: "600 28px/70px Roboto, -apple-system, Roboto, Helvetica, sans-serif",
                    width: "100%",
                  }}
                />
              </div>
            </div>
            <div className="login-input-container">
              <div className="login-input-field">
                <input
                  type="password"
                  className="login-input-text"
                  placeholder="hasło"
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "rgba(181, 181, 181, 1)",
                    font: "600 28px/70px Roboto, -apple-system, Roboto, Helvetica, sans-serif",
                    width: "100%",
                  }}
                />
              </div>
              <div
                className="forgot-password-link"
                onClick={() => {
                  // Handle forgot password
                  alert(
                    "Forgot password functionality would be implemented here",
                  );
                }}
              >
                <div className="forgot-password-text">Zapomniałeś hasła?</div>
              </div>
            </div>
            <div className="login-submit-container">
              <div
                className="login-submit-button"
                onClick={() => {
                  // Handle login logic here
                  alert("Login functionality would be implemented here");
                }}
              >
                <div className="login-submit-text">Zaloguj</div>
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

export default Logowanie;
