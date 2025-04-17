'use client';
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const tabsData = [
    {
      title: "Kaabil Teachers",
      faqs: [
        {
          question: "Does Kaabil Teacher affect my device's performance?",
          answer: "Kaabil TA is engineered for efficiency—designed to use minimal battery power and data."
        },
        {
          question: "How often is Kaabil TA updated?",
          answer: "We continually improve and train our AI with regular updates, ensuring it stays smart and responsive and responsible."
        },
        {
          question: "How does Kaabil TA adapt to individual learning needs?",
          answer: "It personalizes learning by identifying gaps and curating personal guidance tips for each student."
        },
        {
          question: "Is my personal information safe with Kaabil TA?",
          answer: "Your privacy is our top priority—strong security measures are adopted to keep your data secure."
        },
        {
          question: "What teaching principles guide Kaabil TA?",
          answer: "Our approach is inspired by proven methods like Bloom's Mastery Learning and Universal Design for Learning to support every learner."
        }
      ]
    },
    {
      title: "Learners",
      faqs: [
        {
          question: "What kind of help will KaabilTeacher provide me?",
          answer: "Instant help, step-by-step guidance, and practice tailored just for you."
        },
        {
          question: "How will Kaabil help me stay focused while studying?",
          answer: "Smart study plans, bite-sized lesson pathways, and a safe space to build critical thinking."
        },
        {
          question: "Why can't I use other AI tools?",
          answer: "Because you shouldn't waste time prompting for answers. Kaabil is not a system where you search for answers—it adapts to your needs, instantly."
        },
        {
          question: "How will Kaabil keep me motivated to learn?",
          answer: "Clear progress, small wins, and challenges that excite you and grow with you."
        },
        {
          question: "Why do I need interactive learning for me?",
          answer: "Modern problems need modern solutions. A two-way learning space keeps knowledge in your active memory. Just 15 minutes twice a day on Kaabil will keep you ahead."
        },
        {
          question: "What if I forget what I have been learning?",
          answer: "Kaabil gives you a list of recommendations and quick revision tips to help you catch up with all gray areas effortlessly."
        }
      ]
    },
    {
      title: "Parents",
      faqs: [
        {
          question: "How do I ensure my child's screen time is productive?",
          answer: "Every session is structured, interactive, and goal-oriented with real-time insights."
        },
        {
          question: "How does Kaabil Teacher prepare my child for exams?",
          answer: "Targeted revision, practice tests, and personalized recommendations make exam prep stress-free."
        },
        {
          question: "How does Kaabil balance learning and practice?",
          answer: "Kaabil's AI smartly picks up urgent learning gaps while maintaining a structured mix of lessons, revision, and problem-solving."
        },
        {
          question: "What if my child falls behind?",
          answer: "Kaabil detects learning gaps and automatically provides extra support before they fall behind."
        },
        {
          question: "Can Kaabil Teacher support my child's school curriculum?",
          answer: "Yes! Kaabil covers CBSE, ICSE, state boards, and multiple languages with syllabus-aligned tests and practice modules."
        }
      ]
    },
    {
      title: "Institutes",
      faqs: [
        {
          question: "Why shift to Kaabil?",
          answer: "It unifies teachers, students, and parents in one ecosystem."
        },
        {
          question: "Who can use Kaabil?",
          answer: "Schools, coaching centers, personal tutors, and online educators."
        },
        {
          question: "How do I scale Kaabil across multiple campuses or departments?",
          answer: "Kaabil is built to be scalable, allowing you to manage multiple classrooms, campuses, or departments from a single admin dashboard."
        },
        {
          question: "What insights can administrators get from Kaabil?",
          answer: "Our analytics provide a bird's-eye view of overall performance, identify trends, and offer predictive data for resource allocation and policy decisions."
        },
        {
          question: "How do I onboard teachers and students on Kaabil?",
          answer: "We provide quick sign-up, dedicated support, guided tutorials, and onboarding sessions to streamline the transition, ensuring minimal disruption to your current workflow."
        },
        {
          question: "Is Kaabil customizable for different curricula or standards?",
          answer: "Kaabil's course creation tools fit various educational standards and syllabi, and support multiple languages!"
        },
        {
          question: "How does Kaabil improve student outcomes?",
          answer: "AI-driven recommendations, targeted practice, and structured-tailored revision practice sets help every student progress effectively."
        }
      ]
    },
    {
      title: "Teachers",
      faqs: [
        {
          question: "Can I create tests and share my own questions on Kaabil?",
          answer: "Yes! You can upload, customize, and share different MCQ or subjective questions, to different students, based on each learner's requirements."
        },
        {
          question: "Are my courses and teaching materials secure on Kaabil?",
          answer: "Yes! Your content stays private and secure—Kaabil does not access, modify, or share it."
        },
        {
          question: "What courses and exams is Kaabil suitable for?",
          answer: "Kaabil supports CBSE, ICSE, state boards, and all major curricula, along with competitive exams like JEE, NEET, UPSC, CAT, and Olympiads."
        },
        {
          question: "Can Kaabil help me identify struggling students quickly?",
          answer: "Yes, Kaabil provides real-time insights into each student's strengths and limitations."
        },
        {
          question: "Does Kaabil provide instant feedback?",
          answer: "Objective questions are auto-graded, and Subjective Answers are evaluated with AI-assisted insights."
        },
        {
          question: "Will Kaabil Teachers replace my role as a teacher?",
          answer: "Can't. Kaabil is here to automate repetitive tasks (like grading), so you can focus on creating personal connections."
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