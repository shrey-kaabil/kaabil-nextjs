"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close the mobile menu after clicking
      const navbarCollapse = document.getElementById("navbarSupportedContent");
      if (navbarCollapse) {
        navbarCollapse.classList.remove("show");
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image
            src={logo}
            alt="Kaabil Logo"
            width={160}
            height={60}
            className="img-fluid"
            priority
          />
        </Link>
        <div className="d-lg-none d-block ms-auto" role="search">
          <Link
            href="https://app.kaabil.me/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn nav-btn" type="submit">
              Use The App
            </button>
          </Link>
        </div>
        <button
          className="navbar-toggler ms-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("hero")}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("solutions")}
              >
                Solutions
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("stories")}
              >
                Stories
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("challenge")}
              >
                Purpose
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("faq")}
              >
                For You
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("launching")}
              >
                AI Schools
              </button>
            </li>
          </ul>
          <div className="d-flex ms-auto justify-content-center" role="search">
            <Link
              href="https://app.kaabil.me/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn nav-btn" type="submit">
                Use The App
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
