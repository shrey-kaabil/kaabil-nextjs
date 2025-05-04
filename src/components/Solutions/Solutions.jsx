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
          title: "Generate & Share Homework, Tests, Practise Questions in Seconds",
          points: [
            "Auto-Generate Curriculum-Aligned Questions",
            "Turn PDFs into Customised Computer-Based Tests",
            "Personalize by Topic, Difficulty, Pace & Student Needs",
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
          title: "Understand the Reasoning Behind Every Question",
          points: [
            "Try First, Answer Later",
            "Hints on Demand, Understand Every Step",
            "Explore Independently, Practise Freely",
            "Track progress through XP milestones and lesson analytics",
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
          title: "Never Face Late-Night Doubts Alone— Practice with us",
          points: [
            "Get help from your Kaabil TA—24/7, in English or Hindi",
            "Receive targeted hints and quick revision tips",
            "Strengthen your problem-solving mindset",
            "Type, talk, or upload a PDF to get instant feedback",
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
          title: "Data-Driven Insights & Smart Recommendations",
          points: [
            "View detailed stats on every attempt",
            "Tailored revision tips that guide both practice and instruction",
            "Identify strengths and weaknesses at a glance—Empowering Learners, Educators & Institutes",
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
