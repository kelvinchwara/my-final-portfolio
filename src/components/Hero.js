import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="hero-badge">Available for Industrial Intern</div>
        <h1 className="hero-title">
          <span className="hero-name">Kelvin Sagini</span>
          <span className="hero-role">IT Student & Developer</span>
        </h1>
        <p className="hero-description">
          Passionate Information Technology student specializing in networking, 
          web development, and research. Seeking opportunities to apply technical 
          skills in real-world environments.
        </p>
        <div className="hero-contact">
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>Kisii, Kenya</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span>kelvi20sagini@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <span>+254 757 450 768</span>
          </div>
        </div>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
          <a href="#projects" className="btn btn-secondary">View Portfolio</a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-card">
          <div className="stat-number">4+</div>
          <div className="stat-label">Years of Study</div>
          <div className="stat-sub">Information Technology</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">5+</div>
          <div className="stat-label">Programming Languages</div>
          <div className="stat-sub">Proficient in multiple</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">10+</div>
          <div className="stat-label">Projects Completed</div>
          <div className="stat-sub">Web & Network</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">3+</div>
          <div className="stat-label">Certifications</div>
          <div className="stat-sub">Technical workshops</div>
        </div>
      </div>

      <div className="hero-cert">
        <h4>Chwara Kelvin Sagini</h4>
        <p>BSc. Information Technology</p>
        <p className="university">Kisii University</p>
      </div>
    </section>
  );
};

export default Hero;