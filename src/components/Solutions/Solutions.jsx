'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import './Solutions.css';
import solutionImg from '../../assets/img01.png';
import solutionImg2 from '../../assets/img02.png';
import solutionImg3 from '../../assets/img03.png';
import solutionImg4 from '../../assets/img04.png';
import vector6 from '../../assets/Vector6.png';
import vector7 from '../../assets/Vector7.png';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: '1',
      title: 'Test with Precision',
      bgColor: 'EDF6FD',
      content: {
        text: {
          title: 'Teachers Can Instantly Generate And Share Homework',
          points: [
            'Generate Similar Questions On-Demand To Match Your Curriculum',
            'Convert Any PDF Into A Custom Computer-Based Test',
            'Curate Endless, Personalized Practice Questions'
          ]
        },
        image: solutionImg2
      }
    },
    {
      id: '2',
      title: 'Learn by Doing',
      bgColor: 'FEF1DA',
      content: {
        text: {
          title: 'Understand The Thought Behind Each Question Asked',
          points: [
            'No Answers Given Directly',
            'No Worries, Only A Safe Space',
            'Enjoy Freedom Of Learning',
            'Gain Experience (XP) And Know Your Strength In Chapter'
          ]
        },
        image: solutionImg
      }
    },
    {
      id: '3',
      title: 'Practise with Clarity',
      bgColor: 'ECF7FF',
      content: {
        text: {
          title: 'No More Late Night Alone Problem Solving',
          points: [
            'Ask Any Doubt 24/7 In English Or Hindi',
            'Get Hints To Solve And Tricks To Remember',
            'Build Critical Thinking',
            'Earn Coins With Each Question'
          ]
        },
        image: solutionImg3
      }
    },
    {
      id: '4',
      title: 'Revise with Insight',
      bgColor: 'B5D5EB',
      content: {
        text: {
          title: 'Personalized Guidance & Recommendations',
          points: [
            'Targeted Revision Tips For Every Lesson',
            'Detailed Analysis Of Each Attempt Of The Question',
            'Celebrate Small Wins Always',
            'Correct Major Learning Gaps Early'
          ]
        },
        image: solutionImg4
      }
    }
  ];

  return (
    <section id="solutions" className="Solutions_wrapper">
      <div className="container">
        <div className="section-title_title">
          <h2>Our Solutions</h2>
        </div>
        <div className="solutions-tabs">
          <div className="nav-pills">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={activeTab === index ? 'active' : ''}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="tab-content">
            <div className="vector-img-1">
              <Image
                src={vector6}
                alt="Left decoration"
                width={411}
                height={411}
                className="shape-image"
                priority={false}
              />
            </div>
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`tab-pane ${activeTab === index ? 'active' : ''}`}
              >
                <div className={`content-card bg-${tab.bgColor}`}>
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
            ))}
            <div className="vector-img-2">
              <Image
                src={vector7}
                alt="Right decoration"
                width={442}
                height={442}
                className="shape-image"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions; 