'use client';
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const tabsData = [
    {
      title: "Kaabil TAs",
      faqs: [
        {
          question: "What kind of help will Kaabil provide me?",
          answer: "Kaabil TAs provide personalized learning support, mentorship, and guidance in programming, mathematics, and computer science fundamentals."
        },
        {
          question: "How can I connect with Geetu Bhaiya and Neha Didi?",
          answer: "You can connect through our live sessions, one-on-one mentoring sessions, and our community discussion forums."
        }
      ]
    },
    {
      title: "Learners",
      faqs: [
        {
          question: "What resources are available for learners?",
          answer: "We offer live sessions, recorded content, practice assignments, projects, and personalized mentoring to support your learning journey."
        },
        {
          question: "How is the learning experience structured?",
          answer: "Our learning experience combines interactive live sessions, hands-on projects, and regular feedback from experienced TAs."
        }
      ]
    },
    {
      title: "Parents",
      faqs: [
        {
          question: "How can parents track their child's progress?",
          answer: "Parents receive regular progress reports and can schedule meetings with our TAs to discuss their child's learning journey."
        },
        {
          question: "What support do you provide for parents?",
          answer: "We offer parent orientation sessions, regular updates, and direct communication channels with our TAs."
        }
      ]
    },
    {
      title: "Teachers",
      faqs: [
        {
          question: "How can teachers collaborate with Kaabil?",
          answer: "Teachers can join our platform as mentors, create content, and participate in our teaching excellence program."
        },
        {
          question: "What resources do you provide for teachers?",
          answer: "We provide teaching materials, professional development opportunities, and a supportive community of educators."
        }
      ]
    },
    {
      title: "Institutes",
      faqs: [
        {
          question: "How can institutes partner with Kaabil?",
          answer: "Institutes can partner with us to provide their students with additional learning support and access to our experienced TAs."
        },
        {
          question: "What benefits do institute partnerships offer?",
          answer: "Partners get access to our complete learning platform, customized content, and dedicated TA support for their students."
        }
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq_wrapper">
      <div className="container">
        <div className="faq_header">
          <h2>How It Works for You?</h2>
        </div>
        <div className="faq_content">
          <div className="faq_tabs">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                className={`tab_button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="faq_list">
            {tabsData[activeTab].faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq_item ${activeIndex === index ? 'active' : ''}`}
              >
                <div 
                  className="faq_question"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3>{faq.question}</h3>
                  <span className="faq_icon">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
                <div className={`faq_answer ${activeIndex === index ? 'show' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 