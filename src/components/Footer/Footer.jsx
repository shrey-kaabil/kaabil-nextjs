import React from 'react';
import Image from 'next/image';
import './Footer.css';
import logo from '../../assets/logo.png';
import youtube from '../../assets/youtube.svg';
import instagram from '../../assets/Instagram.svg';
import linkedin from '../../assets/linkedIn.svg';
import icon3 from '../../assets/icon3.svg';
import xLogo from '../../assets/x-logo.svg';
import sendIcon from '../../assets/send.svg';
import mailIcon from '../../assets/mail.svg';
import whatsappIcon from '../../assets/Whatsapp.svg';

const Footer = () => {
  return (
    <footer className="footer_wrapper">
      <div className="container">
        <div className="row footer-social-email">
          <div className="col-md-6 col-sm-12">
            <div className="footer-logo">
              <Image src={logo} alt="Kaabil Logo" width={150} height={50} />
            </div>
            <div className="footer-icon">
              <p className="f-text1">© 2025</p>
              <div className="icon">
                <a href="#"><Image src={youtube} alt="YouTube" width={24} height={24} /></a>
                <a href="#"><Image src={instagram} alt="Instagram" width={24} height={24} /></a>
                <a href="#"><Image src={linkedin} alt="LinkedIn" width={24} height={24} /></a>
                <a href="#"><Image src={icon3} alt="Social Icon" width={24} height={24} /></a>
                <a href="#"><Image src={xLogo} alt="Twitter" width={24} height={24} /></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <h3 className="f-text2">Lets Stay in Touch</h3>
            <div className="main-input-box">
              <input type="email" placeholder="Enter your email address" />
              <Image src={sendIcon} alt="Send" width={24} height={24} />
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-2 col">
            <div className="footer-menu-main">
              <div className="footer-title">
                <h3>GET ACCESS</h3>
              </div>
              <ul>
                <li><a href="#">Free Beta - Kaabil for Schools</a></li>
                <li><a href="#">Kaabil for Teachers</a></li>
                <li><a href="#">Kaabil for Learners</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="footer-menu-main">
              <div className="footer-title">
                <h3>UPCOMING PROJECTS</h3>
              </div>
              <ul>
                <li><a href="#">Mathematics with LLMs</a></li>
                <li><a href="#">Kaabil Study Tools</a></li>
                <li><a href="#">AI Schools</a></li>
                <li><a href="#">AI Schools</a></li>
                <li><a href="#">AI Advancements</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-2 col-6">
            <div className="footer-menu-main">
              <div className="footer-title">
                <h3>EXPLORE FURTHER</h3>
              </div>
              <ul>
                <li><a href="#">Quiz with Geetu Bhaiya</a></li>
                <li><a href="#">Watch Demo !</a></li>
              </ul>
            </div>
            <div className="footer-menu-main d-lg-none d-block">
              <div className="footer-title">
                <h3>POLICY</h3>
          </div>
              <ul>
                <li><a href="#">Data Policy</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">AI Policy</a></li>
              </ul>
          </div>
        </div>

          <div className="col-md-2 d-lg-block d-none">
            <div className="footer-menu-main">
              <div className="footer-title">
                <h3>POLICY</h3>
              </div>
              <ul>
                <li><a href="#">Data Policy</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">AI Policy</a></li>
              </ul>
            </div>
                </div>

          <div className="col-md-3 col-6">
            <div className="footer-menu-main">
              <div className="footer-title">
                <h3>CONTACT US</h3>
              </div>
              <ul>
                <li><a href="#">IIMA- Ventures</a></li>
                <li><a href="#">Ahmedabad, India- 380015</a></li>
                <li className="footer-icon d-flex">
                  <a href="mailto:contact@kaabil.com"><Image src={mailIcon} alt="Email" width={24} height={24} /></a>
                  <a href="https://wa.me/your-number"><Image src={whatsappIcon} alt="WhatsApp" width={24} height={24} /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-link">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="m-0">
                Kaabil is an early-stage pilot built to simplify learning and ensure equal opportunities for every child.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 