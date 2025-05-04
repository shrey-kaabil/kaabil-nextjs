"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Hero.css";
import heroImg from "../../assets/hero-banner-img.png";
import bannerShap1 from "../../assets/banner-shape1.svg";
import bannerShap2 from "../../assets/banner-shape2.svg";

const Hero = () => {
  const [showHelpContent, setShowHelpContent] = useState(false);

  const toggleContent = () => {
    setShowHelpContent(!showHelpContent);
  };

  const scrollToJoin = () => {
    const joinSection = document.getElementById("join");
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-12 banner-section-col banner-left-img-sec d-flex align-items-end">
            <div className="hero-banner-img">
              <Image
                src={heroImg}
                alt="Hero Banner"
                width={858}
                height={761}
                priority
                className="hero-image"
              />

              <div className="bner-tilt d-lg-none d-block">
                <h3>Start learning with</h3>
                <h3>
                  <span>Geetu Bhaiya</span> and <span>Pooja Didi</span>
                  <Link
                    href="https://app.kaabil.me/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      className="arrow-icon"
                    >
                      <path
                        fill="#ff8e25"
                        d="m16.004 9.414-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2z"
                      />
                    </svg>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-12 banner-section-col banner-right-content-sec d-flex align-items-start ">
            <div className="banner-content-inner-wrapper w-100">
              <div className="div-shap1">
                <div className="div-hero-box">
                  {!showHelpContent ? (
                    <>
                      <p className="hero-subtitle">First Generation</p>
                      <h1 className="hero-title">Kaabil TAs</h1>
                      <div className="d-flex gap-4 hero-box-action-btn">
                        <button className="blue-btn" onClick={toggleContent}>
                          Meet Us
                        </button>
                        <button className="border-btn" onClick={scrollToJoin}>
                          Let's Study
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="hero-subtitle">
                        You’re never alone in your learning.
                      </p>
                      {/* <h1 className="hero-title">Kaabil TAs</h1> */}
                      <div
                        className="d-flex gap-3 hero-box-action-btn"
                        style={{ marginTop: "20px" }}
                      >
                        <button className="blue-btn" onClick={toggleContent}>
                          Say Hi
                        </button>
                        <button className="border-btn" onClick={scrollToJoin}>
                          Let's Study
                        </button>
                      </div>
                    </>
                    // <div className="help-content">
                    //   <p className="help-text">You’re never alone in your learning.</p>
                    //   <div className="d-flex gap-2">
                    //     <button className="blue-btn" onClick={toggleContent}>Say Hi</button>
                    //     <button className="border-btn">Let's Study</button>
                    //   </div>
                    // </div>
                  )}
                </div>
                <div className="hero-shap1 position-absolute">
                  <Image
                    src={bannerShap1}
                    alt="Hero Banner"
                    width={450}
                    height={655}
                    priority
                    className="hero-image"
                  />
                </div>
                <div className="hero-shap2 position-absolute">
                  <Image
                    src={bannerShap2}
                    alt="Hero Banner"
                    width={420}
                    height={550}
                    priority
                    className="hero-image"
                  />
                </div>
              </div>
              <div className="bner-tilt d-lg-block d-none">
                <h3>Start learning with</h3>
                <h3>
                  <span>Geetu Bhaiya</span> and <span>Pooja Didi</span>
                  <Link
                    href="https://app.kaabil.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      className="arrow-icon"
                    >
                      <path
                        fill="#ff8e25"
                        d="m16.004 9.414-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2z"
                      />
                    </svg>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
