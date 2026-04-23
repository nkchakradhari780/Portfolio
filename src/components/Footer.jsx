import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: 'https://github.com/nkchakradhari780', label: 'GitHub' },
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/nkchakradhari', label: 'LinkedIn' },
    { icon: <FaEnvelope />, link: 'mailto:nitinchakradhari780@gmail.com', label: 'Email' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="logo-text">Nkchakradhari</span>
            </h3>
            <p className="footer-tagline">
              Building scalable backend systems and crafting elegant code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="footer-social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Nitin Chakradhari. Made with <FaHeart className="heart-icon" /> using React
          </p>
          <p className="footer-credits">
            Designed & Developed by Nitin Chakradhari
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
