import React from 'react';
import './Launching.css';
import  ThumbsUp  from '../../assets/thums-up.svg';
import  ThumbsDown  from '../../assets/thums-down.svg';
import Image from 'next/image';

const Launching = () => {
  return (
    <section id="launching" className="launching-program-beta">
      <div className="section-title">
        <h2>Launching 1-Month FREE<br />Beta Program</h2>
      </div>

      <div className="launching-program">
        <div className="alternative-platforms">
          <h2>Current Resources</h2>
          <h1>₹ 600-2000</h1>
          <ul className="feature-list">
            <li>
              <Image src={ThumbsDown} alt="thumsUp" width={24} height={24} />
              Limited Pre-design Questions
            </li>
            <li>
              <Image src={ThumbsDown} alt="thumsDown" width={24} height={24} />
              Doubt Video Solutions
            </li>
            <li>
              <Image src={ThumbsDown} alt="thumsDown" width={24} height={24} />
              A Few Days Delay in Feedback
            </li>
            <li>
              <Image src={ThumbsDown} alt="thumsDown" width={24} height={24} />
              Relying On Scattered PDFs
            </li>
            <li>
              <Image src={ThumbsDown} alt="thumsDown" width={24} height={24} />
              Surface Level Analytics
            </li>
          </ul>
        </div>

        <div className="kaabil-card">
          <h2>Kaabil Learning</h2>
          <h1>FREEE !!</h1>
          <ul className="feature-list">
            <li>
              <Image src={ThumbsUp} alt="thumsUp" width={24} height={24} />
              Unlimited Customisable Questions
            </li>
            <li>
              <Image src={ThumbsUp} alt="thumsUp" width={24} height={24} />
              AI-Powered Kaabil TAs Available 24/7
            </li>
            <li>
              <Image src={ThumbsUp} alt="thumsUp" width={24} height={24} />
              Instant Answer Sheet Feedback
            </li>
            <li>
              <Image src={ThumbsUp} alt="thumsUp" width={24} height={24} />
              Make Tests from Your Own PDFs
            </li>
            <li>
              <Image src={ThumbsUp} alt="thumsUp" width={24} height={24} />
              Personalized Revision & Recommendations
            </li>
          </ul>
          <button className="start-learning-btn">
            Start Learning
          </button>
        </div>
      </div>
    </section>
  );
};

export default Launching; 