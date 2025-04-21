import React from 'react';
import Image from 'next/image';
import modalImg from '../../assets/module4.svg';
import './AISchoolsModal.css';

const AISchoolsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <div className="modal-text">
            <h2>AI Schools</h2>
            <p style={{fontWeight: "500"}}>
              Kaabil introduces the first generation of AI Schools—a learning network that binds parents, 
              teachers, institutes, and students and ensures learning never stops.
            </p>
            <p>
              With us, skip purchasing massive question banks, instantly create and share tests without printing or 
              writing on a board. When doubts arise, students work them out with a Kaabil TA first instead of watching 
              videos or reading answer keys; every session is tracked to spot weak areas. The teachers, parents, and 
              institutes can then deliver targeted support.
            </p>
          <div style={{textAlign: "center"}}>
          <button className="use-kaabil-btn">
              Use Kaabil.me Now
            </button>
          </div>

          </div>
          <div className="process-illustration">
            <Image 
              src={modalImg} 
              alt="AI Schools Learning Process" 
              width={600}
              height={200}
              className="modal-image"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISchoolsModal; 