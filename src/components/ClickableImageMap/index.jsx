import React, { useState } from "react";
import "../../styles/ClickableImageMap.css";

//Assets
import plan from "../../assets/hebergement/plan.png";
import planZone1 from "../../assets/hebergement/plan-zone-1.png";
import planZone2 from "../../assets/hebergement/plan-zone-2.png";
import planZone3 from "../../assets/hebergement/plan-zone-3.png";

const ClickableImageMap = () => {
  const [currentImage, setCurrentImage] = useState(plan);
  const [isFading, setIsFading] = useState(false);
  const [isDetailView, setIsDetailView] = useState(false);

  const handleClick = (newImage) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImage(newImage);
      setIsFading(false);
      setIsDetailView(true);
    }, 500);
  };

  const handleBack = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImage(plan);
      setIsFading(false);
      setIsDetailView(false);
    }, 500);
  };

  return (
    <div className="image-container">
      <img
        src={currentImage}
        alt="Plan"
        className={`plan ${isFading ? "fade" : ""}`}
      />

      {!isDetailView && (
        <>
          <div className="zone" id="zone1" onClick={() => handleClick(planZone1)}></div>
          <div className="zone" id="zone2" onClick={() => handleClick(planZone2)}></div>
          <div className="zone" id="zone3" onClick={() => handleClick(planZone3)}></div>
        </>
      )}

      {isDetailView && (
        <button className="back-button" onClick={handleBack}>
          ← Retour au plan
        </button>
      )}
    </div>
  );
};

export default ClickableImageMap;
