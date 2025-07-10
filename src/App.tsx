import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Knowledge from "./components/Knowledge";
import Comparisons from "./components/Comparisons";
import ReadyConfigurations from "./components/ReadyConfigurations";
import Footer from "./components/Footer";
import Konfigurator from "./components/Konfigurator";
import Poradniki from "./components/Poradniki";
import GotoweKonfiguracje from "./components/GotoweKonfiguracje";
import ComponentComparisons from "./components/ComponentComparisons";
import Logowanie from "./components/Logowanie";
import Rejestracja from "./components/Rejestracja";
import "./styles/MainPage.css";
import "./styles/Konfigurator.css";
import "./styles/Poradniki.css";
import "./styles/GotoweKonfiguracje.css";
import "./styles/ComponentComparisons.css";
import "./styles/Logowanie.css";
import "./styles/Rejestracja.css";

function App() {
  const [currentPage, setCurrentPage] = useState<
    | "home"
    | "konfigurator"
    | "poradniki"
    | "gotowe-konfiguracje"
    | "component-comparisons"
    | "logowanie"
    | "rejestracja"
  >("home");

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "configs") {
      setCurrentPage("gotowe-konfiguracje");
      return;
    }

    if (sectionId === "comparisons") {
      setCurrentPage("component-comparisons");
      return;
    }

    // If we're not on the home page, go back to home first
    if (currentPage !== "home") {
      setCurrentPage("home");
      // Add a delay to allow page to load before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const handleConfiguratorClick = () => {
    setCurrentPage("konfigurator");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
  };

  const handleKnowledgeClick = () => {
    setCurrentPage("poradniki");
  };

  const handleConfigClick = () => {
    setCurrentPage("gotowe-konfiguracje");
  };

  const handleGotoweKonfiguracjeClick = () => {
    setCurrentPage("gotowe-konfiguracje");
  };

  const handleLoginClick = () => {
    setCurrentPage("logowanie");
  };

  const handleRegistrationClick = () => {
    setCurrentPage("rejestracja");
  };

  const handleComponentComparisonsClick = () => {
    setCurrentPage("component-comparisons");
  };

  if (currentPage === "konfigurator") {
    return (
      <Konfigurator
        onNavigate={scrollToSection}
        onBack={handleBackToHome}
        onKonfiguratorClick={handleConfiguratorClick}
        onKnowledgeClick={handleKnowledgeClick}
        onGotoweKonfiguracjeClick={handleGotoweKonfiguracjeClick}
        onLoginClick={handleLoginClick}
        onComponentComparisonsClick={handleComponentComparisonsClick}
      />
    );
  }

  if (currentPage === "poradniki") {
    return (
      <Poradniki
        onBack={handleBackToHome}
        onKonfiguratorClick={handleConfiguratorClick}
        onGotoweKonfiguracjeClick={handleGotoweKonfiguracjeClick}
        onLoginClick={handleLoginClick}
        onComponentComparisonsClick={handleComponentComparisonsClick}
      />
    );
  }

  if (currentPage === "gotowe-konfiguracje") {
    return (
      <GotoweKonfiguracje
        onNavigate={scrollToSection}
        onBack={handleBackToHome}
        onKonfiguratorClick={handleConfiguratorClick}
        onKnowledgeClick={handleKnowledgeClick}
        onLoginClick={handleLoginClick}
      />
    );
  }

  if (currentPage === "component-comparisons") {
    return (
      <ComponentComparisons
        onNavigate={scrollToSection}
        onBack={handleBackToHome}
        onKonfiguratorClick={handleConfiguratorClick}
        onKnowledgeClick={handleKnowledgeClick}
        onGotoweKonfiguracjeClick={handleGotoweKonfiguracjeClick}
        onLoginClick={handleLoginClick}
      />
    );
  }

  if (currentPage === "logowanie") {
    return (
      <Logowanie
        onNavigate={scrollToSection}
        onBack={handleBackToHome}
        onKonfiguratorClick={handleConfiguratorClick}
        onKnowledgeClick={handleKnowledgeClick}
        onGotoweKonfiguracjeClick={handleGotoweKonfiguracjeClick}
        onRegistrationClick={handleRegistrationClick}
      />
    );
  }

  if (currentPage === "rejestracja") {
    return (
      <Rejestracja
        onNavigate={scrollToSection}
        onBack={handleLoginClick}
        onKonfiguratorClick={handleConfiguratorClick}
        onKnowledgeClick={handleKnowledgeClick}
        onGotoweKonfiguracjeClick={handleGotoweKonfiguracjeClick}
      />
    );
  }

  return (
    <div className="main-page">
      <Navbar
        onNavigate={scrollToSection}
        onKonfiguratorClick={handleConfiguratorClick}
        onKnowledgeClick={handleKnowledgeClick}
        onLoginClick={handleLoginClick}
      />

      <Hero onConfiguratorClick={handleConfiguratorClick} />

      <Knowledge onKnowledgeClick={handleKnowledgeClick} />

      <Comparisons />

      <ReadyConfigurations onConfigClick={handleConfigClick} />

      <Footer
        onNavigate={scrollToSection}
        onKonfiguratorClick={handleConfiguratorClick}
        onKnowledgeClick={handleKnowledgeClick}
      />
    </div>
  );
}

export default App;
