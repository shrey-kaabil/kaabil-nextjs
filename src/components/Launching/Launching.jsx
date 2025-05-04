"use client";
import React from "react";
import "./Launching.css";
import ThumbsUp from "../../assets/thums-up.svg";
import ThumbsDown from "../../assets/thums-down.svg";
import PricingShap1 from "../../assets/pricing-shap1.svg";
import Image from "next/image";
import Link from "next/link";

const Launching = () => {
  return (
    <section id="launching" className="launching-program-beta">
      <div className="container">
        <div className="section-title">
          <h2>Launching 1-Month FREE Beta Program</h2>
        </div>

        <div className="launching-program">
          <div className="alternative-platforms">
            <h2>Alternative Platforms</h2>
            <h1>₹ 600-2000</h1>
            <ul className="feature-list">
              <li>
                <Image
                  src={ThumbsDown}
                  alt="thums Down"
                  width={40}
                  height={40}
                  className="thums-down-icon"
                />
                Pre-Designed Question Banks
              </li>
              <li>
                <Image
                  src={ThumbsDown}
                  alt="thumsDown"
                  width={40}
                  height={40}
                  className="thums-down-icon"
                />
                Limited Doubt Support
              </li>
              <li>
                <Image
                  src={ThumbsDown}
                  alt="thumsDown"
                  width={40}
                  height={40}
                  className="thums-down-icon"
                />
                Hours to Days for feedback
              </li>
              <li>
                <Image
                  src={ThumbsDown}
                  alt="thumsDown"
                  width={40}
                  height={40}
                  className="thums-down-icon"
                />
                Reliance on Scattered Xerox
              </li>
              <li>
                <Image
                  src={ThumbsDown}
                  alt="thumsDown"
                  width={40}
                  height={40}
                  className="thums-down-icon"
                />
                Surface Level Insights only
              </li>
            </ul>
          </div>

          <div className="kaabil-card">
            <h2>Kaabil Learning</h2>
            <h1>FREEE !!</h1>
            <ul className="feature-list">
              <li>
                <Image
                  src={ThumbsUp}
                  alt="thumsUp"
                  width={40}
                  height={40}
                  className="thums-up-icon"
                />
                Unlimited Customisable Questions
              </li>
              <li>
                <Image
                  src={ThumbsUp}
                  alt="thumsUp"
                  width={40}
                  height={40}
                  className="thums-up-icon"
                />
                24/7 Available AI-Powered Kaabil TAs
              </li>
              <li>
                <Image
                  src={ThumbsUp}
                  alt="thumsUp"
                  width={40}
                  height={40}
                  className="thums-up-icon"
                />
                Instant Answer Sheet Feedback
              </li>
              <li>
                <Image
                  src={ThumbsUp}
                  alt="thumsUp"
                  width={40}
                  height={40}
                  className="thums-up-icon"
                />
                Make Tests from your own PDFs
              </li>
              <li>
                <Image
                  src={ThumbsUp}
                  alt="thumsUp"
                  width={40}
                  height={40}
                  className="thums-up-icon"
                />
                Personalized Revision & Recommendations
              </li>
            </ul>
            <div className="text-center md-mt-4">
            <Link
              href="https://app.kaabil.me/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="start-learning-btn" >
                Easy Demo Instant Setup
              </button>
            </Link>
            </div>
          </div>
        </div>
        <div className="pricing-vector-shap1 position-absolute">
          <Image src={PricingShap1} alt="shap" width={559} height={515} />
        </div>
      </div>
    </section>
  );
};

export default Launching;
