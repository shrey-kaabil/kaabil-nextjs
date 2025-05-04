import React from "react";
import Image from "next/image";
import demo1 from "../../assets/demo1.svg";
import demo2 from "../../assets/demo2.svg";
import demo3 from "../../assets/demo3.svg";
import "./Modal.css";
import Link from "next/link";

const WatchDemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay modal_popup_box" onClick={onClose}>
      <div
        className="modal-content watch-demo-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="study-modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-body">
          <h2 className="text-center">Watch Demo</h2>
          <div className="demo-cards">
            <div className="demo-card">
              <Image
                src={demo3}
                alt="Question Creation"
                className="demo-image"
              />
              {/* <p>Question Creation</p> */}
            </div>
            <div className="demo-card">
           
              <Image
                src={demo2}
                alt="Question Solving"
                className="demo-image"
              />
              {/* <p>Question Solving</p> */}
            </div>
            <div className="demo-card">
            <Link
                    href="https://youtube.com/shorts/V9NCqTPSjz4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
              <Image
                src={demo1}
                alt="Question Analysis"
                className="demo-image"
              />
              </Link>
              {/* <p>Question Analysis</p> */}
            </div>
          </div>
          <Link
                    href="https://app.kaabil.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
          <button className="start-learning-btn1">Start Learning</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WatchDemoModal;
