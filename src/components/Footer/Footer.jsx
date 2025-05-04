"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./Footer.css";
import logo from "../../assets/logo.png";
import instagram from "../../assets/Instagram.svg";
import linkedin from "../../assets/linkedIn.svg";
import icon3 from "../../assets/icon3.svg";
import xLogo from "../../assets/x-logo.svg";
import sendIcon from "../../assets/send.svg";
import mailIcon from "../../assets/mail.svg";
import youtube from "../../assets/youtube.svg";
import whatsappIcon from "../../assets/Whatsapp.svg";
import NextGenModal from "../Modal/NextGenModal";
import MathematicsModal from "../Modal/MathematicsModal";
import StudyModal from "../Modal/StudyModal";
import AISchoolsModal from "../Modal/AISchoolsModal";
import WatchDemoModal from "../Modal/WatchDemoModal";
import UnderConstructionModal from "../Modal/UnderConstructionModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMathModalOpen, setIsMathModalOpen] = useState(false);
  const [isStudyModalOpen, setIsStudyModalOpen] = useState(false);
  const [isAISchoolsModalOpen, setIsAISchoolsModalOpen] = useState(false);
  const [isWatchDemoModalOpen, setIsWatchDemoModalOpen] = useState(false);
  const [isUnderConstructionModalOpen, setIsUnderConstructionModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setSubmitStatus('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyVtxqnycgPdNFKwwxspsmEFW2ElUI4Ty-3cD_PmMDLjnSU4hHerqr731f1qiFwvf0_/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
        mode: 'no-cors' // Required for Google Apps Script
      });

      // Since we're using no-cors mode, we can't check response.ok
      setSubmitStatus('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitStatus('Error submitting email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <footer className="footer_wrapper">
        <div className="container">
          <div className="footer-inner-wrapper">
            <div className="row footer-social-email">
              <div className="col-md-6 col-sm-12">
                <div className="footer-logo">
                  <Image src={logo} alt="Kaabil Logo" width={150} height={50} />
                </div>
                <div className="footer-icon">
                  <p className="f-text1">© 2025</p>
                  <div className="icon">
                    <a
                      href="https://www.youtube.com/@Kaabilme/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={youtube}
                        alt="youtube"
                        width={32}
                        height={32}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/kaabilme/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={linkedin}
                        alt="LinkedIn"
                        width={32}
                        height={32}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/kaabil.me?igsh=MTAzdmc2N2h0MWNraw=="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={instagram}
                        alt="Instagram"
                        width={32}
                        height={32}
                      />
                    </a>
                    <a
                      href="https://x.com/kaabilme?s=21"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={xLogo}
                        alt="X (Twitter)"
                        width={32}
                        height={32}
                      />
                    </a>
                    <a
                      href="https://www.reddit.com/r/kaabilme/s/O8vqTExQKJ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={icon3} alt="Reddit" width={32} height={32} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <h3 className="f-text2">Lets Stay in Touch</h3>
                <form onSubmit={handleEmailSubmit} className="main-input-box">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                  <button  type="submit" disabled={isSubmitting}>
                    <Image src={sendIcon} alt="Send" width={24} height={24} />
                  </button>
                </form>
                {submitStatus && (
                  <p style={{ 
                    color: submitStatus.includes('Thank you') ? 'green' : 'red',
                    marginTop: '10px',
                    fontSize: '14px'
                  }}>
                    {submitStatus}
                  </p>
                )}
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-2 col">
                <div className="footer-menu-main">
                  <div className="footer-title">
                    <h3>GET ACCESS</h3>
                  </div>
                  <ul>
                    <li>
                      <a
                        href="/pdfs/Kaabil for Schools.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Free Beta - Kaabil for Schools
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pdfs/Kaabil For Teachers.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Kaabil for Teachers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsUnderConstructionModalOpen(true);
                        }}
                      >
                        Kaabil for Learners
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-6">
                <div className="footer-menu-main">
                  <div className="footer-title">
                    <h3>UPCOMING PROJECTS</h3>
                  </div>
                  <ul>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMathModalOpen(true);
                        }}
                      >
                        Mathematics with LLMs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsStudyModalOpen(true);
                        }}
                      >
                        Study with Kaabil
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsAISchoolsModalOpen(true);
                        }}
                      >
                        AI Schools
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsModalOpen(true);
                        }}
                      >
                        Next Gen Kaabil TAs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2 col-6">
                <div className="footer-menu-main">
                  <div className="footer-title">
                    <h3>EXPLORE FURTHER</h3>
                  </div>
                  <ul>
                    <li>
                      <a
                        href="https://app.kaabil.me/course/43"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quiz with Geetu Bhaiya
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsWatchDemoModalOpen(true);
                        }}
                      >
                        Watch Demo !
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu-main d-lg-none d-block">
                  <div className="footer-title">
                    <h3>POLICY</h3>
                  </div>
                  <ul>
                    <li>
                      <a
                        href="/pdfs/Kaabil Data Policy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Data Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pdfs/Kaabil Privacy Policy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pdfs/Kaabil AI Policy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        AI Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2 d-lg-block d-none">
                <div className="footer-menu-main">
                  <div className="footer-title">
                    <h3>POLICY</h3>
                  </div>
                  <ul>
                    <li>
                      <a
                        href="/pdfs/Kaabil Data Policy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Data Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pdfs/Kaabil Privacy Policy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pdfs/Kaabil AI Policy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        AI Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-6">
                <div className="footer-menu-main ">
                  <div className="footer-title">
                    <h3>CONTACT US</h3>
                  </div>
                  <ul >
                    <li className="text-black">IIMA- Ventures</li>
                    <li className="text-black">Ahmedabad, India- 380015</li>
                    <li className="footer-icon d-flex">
                      <a
                        href="mailto:contact@kaabil.me"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={mailIcon}
                          alt="Email"
                          width={24}
                          height={24}
                        />
                      </a>
                      <a
                        href="https://wa.me/918296019876"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={whatsappIcon}
                          alt="WhatsApp"
                          width={24}
                          height={24}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-link">
          <div className="container">
            <div className="footer-inner-wrapper">
              <div className="row">
                <div className="col-12 text-center">
                  <p className="m-0">
                    Kaabil is an early-stage pilot built to simplify learning
                    and ensure equal opportunities for every child.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <NextGenModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <MathematicsModal
        isOpen={isMathModalOpen}
        onClose={() => setIsMathModalOpen(false)}
      />
      <StudyModal
        isOpen={isStudyModalOpen}
        onClose={() => setIsStudyModalOpen(false)}
      />
      <AISchoolsModal
        isOpen={isAISchoolsModalOpen}
        onClose={() => setIsAISchoolsModalOpen(false)}
      />
      <WatchDemoModal
        isOpen={isWatchDemoModalOpen}
        onClose={() => setIsWatchDemoModalOpen(false)}
      />
      <UnderConstructionModal
        isOpen={isUnderConstructionModalOpen}
        onClose={() => setIsUnderConstructionModalOpen(false)}
      />
    </>
  );
};

export default Footer;
