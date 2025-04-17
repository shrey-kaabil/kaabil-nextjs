import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image 
            src={logo}
            alt="Kaabil Logo" 
            width={150}
            height={50}
            className="img-fluid"
            priority
          />
        </Link>
        <div className="d-lg-none d-block ms-auto" role="search">
          <button className="btn nav-btn" type="submit">Try Now</button>
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
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/solutions">Solutions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/stories">Stories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/purpose">Purpose</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/for-you">For You</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/ai-schools">AI-Schools</Link>
            </li>
          </ul>
          <div className="d-flex ms-auto justify-content-center" role="search">
            <button className="btn nav-btn" type="submit">Try Now</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 