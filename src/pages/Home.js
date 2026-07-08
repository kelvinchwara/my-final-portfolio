import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page home-page">
      {/* Hero Section - Simplified & Modern */}
      <section className="hero">
        <div className="hero-bg-pattern"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-inner">
              {/* Left Side - Text Content */}
              <div className="hero-text">
                <div className="hero-badge-wrapper">
                  <span className="hero-badge">Available for Opportunities</span>
                </div>
                
                <h1 className="hero-title">
                  <span className="hero-name">Kelvin Chwara</span>
                  <span className="hero-role">IT Professional</span>
                </h1>
                
                <p className="hero-description">
  BSc. Information Technology (Graduand) from Kisii University. Specialized in 
  web development, network engineering, and system administration, dedicated to 
  building efficient, high-performance technological solutions.
</p>
                
                <div className="hero-cta-group">
                  <Link to="/contact" className="btn btn-primary btn-lg">
                    <span>Get In Touch</span>
                    <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                  <Link to="/projects" className="btn btn-outline btn-lg">
                    <span>View Portfolio</span>
                  </Link>
                </div>
                
                <div className="hero-contact-row">
                  <div className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Kisii, Kenya</span>
                  </div>
                  <div className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <span>kelvi20sagini@gmail.com</span>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Profile Card */}
              <div className="hero-profile">
                <div className="profile-card">
                  <div className="profile-image-wrapper">
                    <img 
                      src="/home-pic.jpeg.png" 
                      alt="Kelvin Chwara" 
                      className="profile-image"
                    />
                    <div className="profile-status"></div>
                  </div>
                  <div className="profile-info">
                    <h3>Kelvin Chwara</h3>
                    <p className="profile-degree">BSc. Information Technology</p>
                    <p className="profile-university">Kisii University</p>
                    <p className="profile-expected"></p>
                  </div>
                  <div className="profile-actions">
                    <a href="/KELVIN%20CHWARA.pdf" download className="btn btn-secondary btn-sm">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="hero-stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Years Study</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Languages</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="7"/>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Certifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Preview Section */}
      <section className="skills-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h3>Web Development</h3>
              <p>JavaScript, Django, React, HTML/CSS</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                  <line x1="6" y1="6" x2="6.01" y2="6"/>
                  <line x1="6" y1="18" x2="6.01" y2="18"/>
                </svg>
              </div>
              <h3>System Admin</h3>
              <p>Linux, Windows Server, Cloud</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12.55a11 11 0 0114.08 0"/>
                  <path d="M1.42 9a16 16 0 0121.16 0"/>
                  <path d="M8.53 16.11a6 6 0 016.95 0"/>
                  <circle cx="12" cy="20" r="1"/>
                </svg>
              </div>
              <h3>Networking</h3>
              <p>CCNA, Network Security, TCP/IP</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                </svg>
              </div>
              <h3>Databases</h3>
              <p>MySQL, PostgreSQL, MongoDB</p>
            </div>
          </div>
          <div className="skills-cta">
            <Link to="/skills" className="btn btn-outline">
              View All Skills
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Quick Links Section */}
      <section className="quick-links">
        <div className="container">
          <div className="quick-links-grid">
            <Link to="/about" className="quick-link-card">
              <div className="quick-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="quick-link-content">
                <h3>About Me</h3>
                <p>Learn about my background and journey</p>
              </div>
              <svg className="quick-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            
            <Link to="/experience" className="quick-link-card">
              <div className="quick-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                </svg>
              </div>
              <div className="quick-link-content">
                <h3>Experience</h3>
                <p>View my work history and internships</p>
              </div>
              <svg className="quick-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            
            <Link to="/projects" className="quick-link-card featured">
              <div className="quick-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
              </div>
              <div className="quick-link-content">
                <h3>Projects</h3>
                <p>Explore my portfolio of work</p>
              </div>
              <svg className="quick-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            
            <Link to="/contact" className="quick-link-card">
              <div className="quick-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="quick-link-content">
                <h3>Contact</h3>
                <p>Get in touch for opportunities</p>
              </div>
              <svg className="quick-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
