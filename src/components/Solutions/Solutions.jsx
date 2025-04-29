"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./Solutions.css";
import solutionImg from "../../assets/img01.png";
import solutionImg2 from "../../assets/img02.png";
import solutionImg3 from "../../assets/img03.png";
import solutionImg4 from "../../assets/img04.png";
import solutionShap1 from "../../assets/solution-shap1.svg";
import solutionShap2 from "../../assets/solution-shap2.svg";

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoSwitching, setIsAutoSwitching] = useState(true);

  const tabs = [
    {
      id: "1",
      title: "Test with Precision",
      bgColor: "EDF6FD",
      content: {
        text: {
          title: "Teachers Can Instantly Generate And Share Homework",
          points: [
            "Instantly Generate Curriculum-Aligned Questions",
            "Convert Any PDF Into A Custom Computer-Based Test",
            "Personalize Questions by Topic, Pattern, Difficulty, Pace, And Needs",
          ],
        },
        image: solutionImg2,
      },
    },
    {
      id: "2",
      title: "Learn by Doing",
      bgColor: "FEF1DA",
      content: {
        text: {
          title: "Understand The Thought Behind Each Question Asked",
          points: [
            "No Answers Given Directly",
            "A Safe Space to Practice and Try each Question",
            "Enjoy Freedom Of Learning",
            "Track Lesson Strengths through Earned XP",
          ],
        },
        image: solutionImg,
      },
    },
    {
      id: "3",
      title: "Practise with Clarity",
      bgColor: "ECF7FF",
      content: {
        text: {
          title: "No More Late Night Alone Problem Solving",
          points: [
            "Ask your Kaabil TA any Doubt any Time in English or Hindi",
            "Get Hints To Solve And Handy Tricks To Revise",
            "Build Critical Thinking",
            "Type, Talk or Upload PDF to receive Instant Feedback",
          ],
        },
        image: solutionImg3,
      },
    },
    {
      id: "4",
      title: "Revise with Insight",
      bgColor: "B5D5EB",
      content: {
        text: {
          title: "Personalized Guidance & Recommendations",
          points: [
            "Detailed Analysis Of Each Attempt Of The Question",
            "Targeted Revision Tips For Every Lesson",
            "Celebrate wins with Targeted Support and Correct Learning Gaps Early",
          ],
        },
        image: solutionImg4,
      },
    },
  ];

  // Auto switch tabs every 5 seconds
  useEffect(() => {
    let interval;
    if (isAutoSwitching) {
      interval = setInterval(() => {
        setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoSwitching, tabs.length]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    // Reset auto-switching timer
    setIsAutoSwitching(false);
    setTimeout(() => setIsAutoSwitching(true), 10000);
  };

  return (
    <section id="solutions" className="Solutions_wrapper">
      <div className="container position-relative">
        <div className="section-title_title">
          <h2>Our Solutions</h2>
        </div>
        <div className="solutions-tabs">
          <div className="nav-pills">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(index)}
                className={activeTab === index ? "active" : ""}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`tab-pane ${activeTab === index ? "active" : ""}`}
              >

                <div className={`content-card bg-${tab.bgColor}`}>
                  <div className="tab-wrapper-section">

                    <div className="text-content">
                      <h3>{tab.content.text.title}</h3>
                      <ul>
                        {tab.content.text.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="image-content">
                      <Image
                        src={tab.content.image}
                        alt={tab.title}
                        width={400}
                        height={400}
                        className="solution-image"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="vector-img-1">
          <Image
            src={solutionShap1}
            alt="Left decoration"
            width={373}
            height={402}
            className="shape-image"
            priority={false}
          />
        </div>
        <div className="vector-img-2">
          <Image
            src={solutionShap2}
            alt="Right decoration"
            width={135}
            height={190}
            className="shape-image"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
