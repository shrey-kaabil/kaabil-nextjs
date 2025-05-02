import React from "react";
import Image from "next/image";
import modalImg from "../../assets/module3.svg";
import "./StudyModal.css";

const StudyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="study-modal-overlay modal_popup_mathematics"
      onClick={onClose}
    >
      <div
        className="study-modal-content common-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="study-modal-close common-modal-close"
          onClick={onClose}
        >
          ×
        </button>
        <div className="study-modal-body common-modal-body">
          <div className="study-modal-text">
            <h2>Study With Kaabil</h2>
            <p>
              Kaabil Helps You Get Your Own Private Tutor In Depth Learning
              Insights, Build And Share Virtual Tests Simultaneously, Get Best
              Practice Questions And Answers, And Get A Custom Lesson
              Plan—Complete With Kaabil TAs Explanations On Your Virtual
              Blackboard!
            </p>
            <a href="https://kaabil.me" className="study-try-now-btn">
              Try Kaabil.me Now
            </a>
          </div>
          <div className="study-modal-image-container">
            <Image
              src={modalImg}
              alt="Study With Kaabil"
              width={500}
              height={300}
              className="study-modal-image"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyModal;
