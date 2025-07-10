import React from "react";

interface KnowledgeProps {
  onKnowledgeClick: () => void;
}

const Knowledge: React.FC<KnowledgeProps> = ({ onKnowledgeClick }) => {
  const articleData = {
    title: "Komputer do 3000zł",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };

  return (
    <section id="knowledge" className="knowledge-section">
      <div className="knowledge-description">
        <div className="knowledge-content">
          <div className="knowledge-title-container">
            <div className="knowledge-title">Wiedza to klucz</div>
          </div>
          <div className="knowledge-text-container">
            <div className="knowledge-text">
              Potrzebujesz większej wiedzy z zakresu budowy komputerów ? Chcesz
              poznać przydatne ciekawostki i podpowiedzi ?
            </div>
          </div>
          <div className="knowledge-text-container">
            <div className="knowledge-highlight">
              Skorzystaj z naszych poradników !
            </div>
          </div>
        </div>
        <button className="knowledge-cta-btn" onClick={onKnowledgeClick}>
          <div className="knowledge-cta-text">Sprawdz →</div>
        </button>
      </div>

      {/* Article Cards */}
      {[1, 2, 3].map((index) => (
        <div key={index} className="article-card">
          <div className="article-header">
            <div className="article-title">{articleData.title}</div>
          </div>
          <div className="article-image"></div>
          <div className="article-description-container">
            <div className="article-description">{articleData.description}</div>
          </div>
          <div className="article-link-container">
            <div
              className="article-link"
              onClick={() => alert(`Reading article ${index}...`)}
            >
              Dowiedz się więcej
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Knowledge;
