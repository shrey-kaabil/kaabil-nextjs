import React from "react";
import Image from "next/image";
import "./UnderConstructionModal.css";

const UnderConstructionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="under-construction-modal-overlay modal_popup_mathematics" onClick={onClose}>
      <div
        className="under-construction-modal-content common-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="under-construction-modal-close common-modal-close" onClick={onClose}>
          ×
        </button>
        <div className="under-construction-modal-body common-modal-body">
          <div className="under-construction-modal-text">
            <h2>Under Construction</h2>
            <p>
              We're working hard to bring you an amazing learning experience with Kaabil for Learners. 
              Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionModal; 