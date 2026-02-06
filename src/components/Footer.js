import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-brand">
                <div className="footer-logo">KS</div>
                <h3>Kelvin Chwara</h3>
                <p>IT Student & Developer</p>
              </div>
              <p className="footer-description">
                Passionate Information Technology student specializing in networking, 
                web development, and research. ⭐ Seeking intern/job opportunities to apply technical 
                skills in real-world environments.
              </p>
              <div className="footer-cta">
                <span className="cta-badge">⭐ Open to Work - Seeking Intern/Job Opportunities</span>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <nav className="footer-nav">
                <a href="#hero">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#education">Education</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <nav className="footer-nav">
                <a href="#contact">Web Development</a>
                <a href="#contact">Network Configuration</a>
                <a href="#contact">IT Consulting</a>
                <a href="#contact">System Administration</a>
                <a href="#contact">Database Management</a>
                <a href="#contact">Technical Support</a>
              </nav>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="footer-contact">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:kelvi20sagini@gmail.com">kelvi20sagini@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <a href="tel:+254757450768">+254 757 450 768</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💬</span>
                  <a href="https://wa.me/254791639902">WhatsApp</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Kisii, Kenya</span>
                </div>
              </div>
              <div className="footer-actions">
                <a href="#contact" className="btn btn-primary">Get In Touch</a>
                <a href="/KELVIN.pdf" download className="btn btn-secondary">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Kelvin Sagini. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;