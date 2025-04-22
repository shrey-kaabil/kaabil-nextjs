'use client'; 
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Hero.css';
import heroImg from '../../assets/hero-img.png';

const Hero = () => {
  const [showHelpContent, setShowHelpContent] = useState(false);

  const toggleContent = () => {
    setShowHelpContent(!showHelpContent);
  };

  const scrollToJoin = () => {
    const joinSection = document.getElementById('join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <div className="hero-banner-img">
              <Image 
                src={heroImg}
                alt="Hero Banner" 
                width={800}
                height={692}
                priority
                className="hero-image"
              />
              <div className="bner-tilt d-lg-none d-block">
                <h3>Start Learning With Us</h3>
                <h3>
                  <span>Geetu Bhaiya</span> and <span>Neha Didi</span>
                  <Link href="https://kaabil.me/dashboard" target="_blank" rel="noopener noreferrer">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      version="1.1" 
                      width="50" 
                      height="50" 
                      viewBox="0 0 24 24"
                      className="arrow-icon"
                    >
                      <path fill="#ff8e25" d="m16.004 9.414-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2z" />
                    </svg>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-12">
            <div className="div-shap1">
              <div className="div-hero-box">
                {!showHelpContent ? (
                  <>
                    <p className="hero-subtitle">First Generation</p>
                    <h1 className="hero-title">Kaabil TAs</h1>
                    <div className="d-flex gap-2">
                      <button className="blue-btn" onClick={toggleContent}>Meet Us</button>
                      <button className="border-btn" onClick={scrollToJoin}>Let's Explore</button>
                    </div>
                  </>
                ) : (
                  <>
                   <p className="hero-subtitle" >
                      We are here to help you when any doubt arises</p>
                    {/* <h1 className="hero-title">Kaabil TAs</h1> */}
                    <div className="d-flex gap-2" style={{marginTop: '20px'}}>
                      <button className="blue-btn" onClick={toggleContent}>Meet Us</button>
                      <button className="border-btn" onClick={scrollToJoin}>Let's Explore</button>
                    </div>
                  </>
                  // <div className="help-content">
                  //   <p className="help-text">We are here to help you when any doubt arises</p>
                  //   <div className="d-flex gap-2">
                  //     <button className="blue-btn" onClick={toggleContent}>Meet Us</button>
                  //     <button className="border-btn">Let's Explore</button>
                  //   </div>
                  // </div>
                )}
              </div>
            </div>
            <div className="bner-tilt d-lg-block d-none">
              <h3>Start Learning With Us</h3>
              <h3>
                <span>Geetu Bhaiya</span> and <span>Pooja Didi</span>
                <Link href="https://kaabil.me/dashboard" target="_blank" rel="noopener noreferrer">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.1" 
                    width="50" 
                    height="50" 
                    viewBox="0 0 24 24"
                    className="arrow-icon"
                  >
                    <path fill="#ff8e25" d="m16.004 9.414-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2z" />
                  </svg>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;