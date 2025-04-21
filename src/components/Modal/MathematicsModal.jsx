import React from 'react';
import Image from 'next/image';
import modalImg from '../../assets/module2.svg';
import './MathematicsModal.css';

const MathematicsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="math-modal-overlay" onClick={onClose}>
      <div className="math-modal-content" onClick={e => e.stopPropagation()}>
        <button className="math-modal-close" onClick={onClose}>×</button>
        <div className="math-modal-body">
          <div className="math-modal-text">
            <h2>Mathematics And LLMs</h2>
            <p>
              In Partnership With Prof. Dr. Siddhartha Gadgil, Indian Institute Of 
              Science, We're Developing An AI-Driven LLM That Rigorously 
              Reasons Through Any Mathematics Question To Deliver Precise, 
              Step-By-Step Solutions. This Will Be Specifically Designed To 
              Improve Conceptual Clarity In Students And Empower Deeper 
              Problem-Solving By Mastering The Students Logical Inference 
              Process.
            </p>
            <a href="https://kaabil.me" className="math-try-now-btn">
              Try Kaabil.me Now
            </a>
          </div>
          <div className="math-modal-image-container">
            <Image 
              src={modalImg} 
              alt="Mathematics and LLMs" 
              width={500}
              height={300}
              className="math-modal-image"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathematicsModal; 