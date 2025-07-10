import Navbar from "./Navbar";
import Footer from "./Footer";

interface PoradnikiProps {
  onBack: () => void;
  onKonfiguratorClick: () => void;
  onGotoweKonfiguracjeClick?: () => void;
  onLoginClick?: () => void;
  onComponentComparisonsClick?: () => void;
}

const Poradniki = ({
  onBack,
  onKonfiguratorClick,
  onGotoweKonfiguracjeClick,
  onLoginClick,
  onComponentComparisonsClick,
}: PoradnikiProps) => {
  const articleData = {
    title: "Komputer do 3000zł",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };

  return (
    <div className="poradniki-page">
      <Navbar
        onNavigate={(sectionId: string) => {
          if (sectionId === "configs" && onGotoweKonfiguracjeClick) {
            onGotoweKonfiguracjeClick();
          } else if (
            sectionId === "comparisons" &&
            onComponentComparisonsClick
          ) {
            onComponentComparisonsClick();
          } else {
            onBack();
          }
        }}
        onKonfiguratorClick={onKonfiguratorClick}
        onKnowledgeClick={() => {
          // Already on knowledge page, no navigation needed
        }}
        onLoginClick={onLoginClick}
      />

      {/* Main Content */}
      <div className="poradniki-content">
        {/* Title */}
        <div className="poradniki-title-container">
          <div className="poradniki-title">Użyteczna wiedza</div>
        </div>

        {/* Search Section */}
        <div className="poradniki-search-section">
          <div className="poradniki-search-input">
            <div className="poradniki-search-placeholder">
              Wyszukaj komponent
            </div>
          </div>
          <div className="poradniki-search-button-container">
            <div className="poradniki-search-button">
              <div className="poradniki-search-icon">
                <img
                  src="https://via.placeholder.com/100x33/805BB3/FFFFFF?text=🔍"
                  alt="Search icon"
                  className="poradniki-search-image"
                />
              </div>
              <div className="poradniki-search-text">Szukaj</div>
            </div>
          </div>
        </div>

        {/* Articles Grid - First Row */}
        <div className="poradniki-articles-row">
          {[1, 2, 3].map((index) => (
            <div key={`row1-${index}`} className="poradniki-article-card">
              <div className="poradniki-article-header">
                <div className="poradniki-article-title">
                  {articleData.title}
                </div>
              </div>
              <img
                src="https://via.placeholder.com/400x147/888888/888888"
                alt="Article image"
                className="poradniki-article-image"
              />
              <div className="poradniki-article-description-container">
                <div className="poradniki-article-description">
                  {articleData.description}
                </div>
              </div>
              <div className="poradniki-article-link-container">
                <div
                  className="poradniki-article-link"
                  onClick={() => alert(`Reading article ${index}...`)}
                >
                  Dowiedz się więcej →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Articles Grid - Second Row */}
        <div className="poradniki-articles-row">
          {[4, 5, 6].map((index) => (
            <div key={`row2-${index}`} className="poradniki-article-card">
              <div className="poradniki-article-header">
                <div className="poradniki-article-title">
                  {articleData.title}
                </div>
              </div>
              <img
                src="https://via.placeholder.com/400x147/888888/888888"
                alt="Article image"
                className="poradniki-article-image"
              />
              <div className="poradniki-article-description-container">
                <div className="poradniki-article-description">
                  {articleData.description}
                </div>
              </div>
              <div className="poradniki-article-link-container">
                <div
                  className="poradniki-article-link"
                  onClick={() => alert(`Reading article ${index}...`)}
                >
                  Dowiedz się więcej →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Articles Grid - Third Row */}
        <div className="poradniki-articles-row">
          {[7, 8, 9].map((index) => (
            <div key={`row3-${index}`} className="poradniki-article-card">
              <div className="poradniki-article-header">
                <div className="poradniki-article-title">
                  {articleData.title}
                </div>
              </div>
              <img
                src="https://via.placeholder.com/400x147/888888/888888"
                alt="Article image"
                className="poradniki-article-image"
              />
              <div className="poradniki-article-description-container">
                <div className="poradniki-article-description">
                  {articleData.description}
                </div>
              </div>
              <div className="poradniki-article-link-container">
                <div
                  className="poradniki-article-link"
                  onClick={() => alert(`Reading article ${index}...`)}
                >
                  Dowiedz się więcej →
                </div>
              </div>
            </div>
          ))}
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
          } else {
            onBack();
          }
        }}
        onKonfiguratorClick={onKonfiguratorClick}
        onKnowledgeClick={() => {
          // Already on knowledge page, no navigation needed
        }}
      />
    </div>
  );
};

export default Poradniki;
