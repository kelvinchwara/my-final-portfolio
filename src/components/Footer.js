import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-brand">
                <div className="footer-logo">KS</div>
                <h3>Kelvin Chwara SagiNi</h3>
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
                <Link to="/" onClick={scrollToTop}>Home</Link>
                <Link to="/about" onClick={scrollToTop}>About</Link>
                <Link to="/skills" onClick={scrollToTop}>Skills</Link>
                <Link to="/education" onClick={scrollToTop}>Education</Link>
                <Link to="/experience" onClick={scrollToTop}>Experience</Link>
                <Link to="/projects" onClick={scrollToTop}>Projects</Link>
                <Link to="/contact" onClick={scrollToTop}>Contact</Link>
              </nav>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <nav className="footer-nav">
                <Link to="/contact" onClick={scrollToTop}>Web Development</Link>
                <Link to="/contact" onClick={scrollToTop}>Network Configuration</Link>
                <Link to="/contact" onClick={scrollToTop}>IT Consulting</Link>
                <Link to="/contact" onClick={scrollToTop}>System Administration</Link>
                <Link to="/contact" onClick={scrollToTop}>Database Management</Link>
                <Link to="/contact" onClick={scrollToTop}>Technical Support</Link>
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
                  <a href="tel:+254762132827">+254 762 132 827</a>
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
                <Link to="/contact" onClick={scrollToTop} className="btn btn-primary">Get In Touch</Link>
                <a href="/KELVIN%20CHWARA.pdf" download className="btn btn-secondary">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Kelvin Chwara SagiNi. All rights reserved.
            </p>
            <div className="footer-links">
              <button type="button" className="btn btn-secondary" onClick={scrollToTop}>
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;