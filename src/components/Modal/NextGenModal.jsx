import React from 'react';
import Image from 'next/image';
import modalImg from '../../assets/modal1.svg';
import './NextGenModal.css';

const NextGenModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="nextgen-modal-overlay" onClick={onClose}>
      <div className="nextgen-modal-content" onClick={e => e.stopPropagation()}>
        <button className="nextgen-modal-close" onClick={onClose}>×</button>
        <div className="nextgen-modal-body">
          <div className="nextgen-modal-text">
            <h2>Next Gen Kaabil TAs</h2>
            <p>
              Kaabil TA 2.0 Builds On Our Initial Release By Adding Predictive Insights And Multi-Modal Explanations. 
              Helping Every Student Learn Better With Personalized, Tailored Drills That Help You Till The End And 
              Evolve As You Learn. So Every Session Feels Like A One-On-One Tutorial.
            </p>
            <a href="https://kaabil.me" className="nextgen-try-now-btn">
              Try Kaabil.me Now
            </a>
          </div>
          <div className="nextgen-modal-image-container">
            <Image 
              src={modalImg} 
              alt="Next Gen Kaabil TAs" 
              width={500}
              height={300}
              className="nextgen-modal-image"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenModal; 