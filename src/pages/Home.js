import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page home-page">
      <div className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-badge">Available for Industrial Intern</div>
            <h1 className="hero-title">
              <span className="hero-name">Kelvin Chwara</span>
              <span className="hero-role">IT Student & Developer</span>
            </h1>
            <p className="hero-description">
              Passionate Information Technology student specializing in networking, 
              web development, and research. Seeking opportunities to apply technical 
              skills in real-world environments.
            </p>
            
            <div className="hero-contact-info">
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
                <a href="tel:+254757450768" className="contact-link">+254 757 450 768</a>
              </div>
            </div>

            <div className="hero-cta-group">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Get In Touch</span>
                <span className="cta-arrow">→</span>
              </Link>
              <Link to="/projects" className="btn btn-outline btn-lg">
                <span>View Portfolio</span>
                <span className="cta-arrow">→</span>
              </Link>
            </div>

            <div className="hero-cta-secondary">
              <Link to="/about" className="btn btn-secondary">
                <span>Learn More About Me</span>
              </Link>
              <Link to="/skills" className="btn btn-secondary">
                <span>View My Skills</span>
              </Link>
              <a href="/KELVIN.pdf" download className="btn btn-secondary download-btn">
                <span>📄 Download CV</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="container">
            <div className="stats-grid">
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
          </div>
        </div>

        <div className="hero-cert-info">
          <div className="container">
            <div className="cert-card">
              <h4>Kelvin Chwara</h4>
              <p>BSc. Information Technology</p>
              <p className="university">Kisii University</p>
              <p className="expected-date">Expected Completion: April 2026</p>
              <Link to="/education" className="btn btn-sm btn-primary">
                View Education →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <div className="container">
          <div className="quick-actions-grid">
            <Link to="/about" className="quick-action-card">
              <div className="action-icon">👤</div>
              <h3>About Me</h3>
              <p>Learn more about my background and interests</p>
              <span className="action-link">Explore →</span>
            </Link>
            <Link to="/skills" className="quick-action-card">
              <div className="action-icon">💻</div>
              <h3>My Skills</h3>
              <p>View my technical expertise and certifications</p>
              <span className="action-link">View Skills →</span>
            </Link>
            <Link to="/education" className="quick-action-card">
              <div className="action-icon">🎓</div>
              <h3>Education</h3>
              <p>My academic journey and qualifications</p>
              <span className="action-link">See Education →</span>
            </Link>
            <Link to="/experience" className="quick-action-card">
              <div className="action-icon">💼</div>
              <h3>Experience</h3>
              <p>My professional work and attachments</p>
              <span className="action-link">View Experience →</span>
            </Link>
            <Link to="/projects" className="quick-action-card featured">
              <div className="action-icon">🚀</div>
              <h3>Projects</h3>
              <p>Explore my portfolio of completed projects</p>
              <span className="action-link">See Projects →</span>
            </Link>
            <Link to="/contact" className="quick-action-card featured">
              <div className="action-icon">📧</div>
              <h3>Contact</h3>
              <p>Get in touch for opportunities</p>
              <span className="action-link">Contact Me →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;