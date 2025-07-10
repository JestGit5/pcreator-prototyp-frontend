import React from "react";

interface ReadyConfigurationsProps {
  onConfigClick: () => void;
}

const ReadyConfigurations: React.FC<ReadyConfigurationsProps> = ({
  onConfigClick,
}) => {
  return (
    <section id="configs" className="ready-configs-section">
      <div className="ready-configs-content">
        <div className="config-image-container">
          <img
            src="https://via.placeholder.com/600x400/666666/ffffff?text=Computer+Setup"
            alt="Computer configuration"
            className="config-image"
          />
        </div>

        <div className="config-details">
          <div className="config-title-container">
            <div className="config-title">Kumputer za 500 zł</div>
          </div>

          <div className="config-description-container">
            <div className="config-description">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book
            </div>
          </div>

          <div className="config-cta-container">
            <div className="config-cta" onClick={onConfigClick}>
              Sprawdź zestaw →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyConfigurations;
