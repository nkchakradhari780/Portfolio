import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Profile Image */}
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              {/* REPLACE THIS IMAGE: Add your profile photo to /src/assets/profile.jpg */}
              <img 
                src="/assets/profile.png" 
                alt="Nitin Chakradhari" 
                className="hero-image"
              />
              <div className="hero-image-glow"></div>
            </div>
            {/* Floating decorative elements */}
            <div className="hero-decoration hero-decoration-1"></div>
            <div className="hero-decoration hero-decoration-2"></div>
          </div>

          {/* Hero Text */}
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="wave">👋</span> Hi, I'm
            </div>
            <h1 className="hero-name">
              Nitin Chakradhari
            </h1>
            <h2 className="hero-title">
              <span className="gradient-text">Full Stack Developer</span>
              <span className="hero-title-sub">(Backend-Focused)</span>
            </h2>
            <p className="hero-description">
              I architect robust backend systems, design scalable APIs, and optimize 
              database performance. Passionate about building high-performance 
              server-side applications that power seamless user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <a 
                href="/assets/Resume.pdf" 
                download 
                className="btn btn-primary"
              >
                <FaDownload /> Download Resume
              </a>
              <a 
                href="#contact" 
                className="btn btn-secondary"
              >
                <FaEnvelope /> Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-social">
              <a 
                href="https://github.com/nkchakradhari780" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="www.linkedin.com/in/nkchakradhari" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:nitinchakradhari780@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
