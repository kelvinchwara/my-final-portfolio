import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page about-page">
      <div className="container">
        <div className="page-header">
          <span className="page-badge">About Me</span>
          <h1 className="page-title">Getting to Know</h1>
          <h2 className="page-subtitle">Kelvin Chwara</h2>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <div className="about-intro">
              <p>
                A passionate IT student with a strong foundation in networking, 
                web development, and research. Currently pursuing my Bachelor's 
                degree while gaining practical experience through various projects 
                and workshops.
              </p>
            </div>

            <div className="personal-info">
              <h3>Personal Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Full Name</span>
                  <span className="info-value">Kelvin Chwara SagiNi</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location</span>
                  <span className="info-value">P.O BOX 796-40200, Kisii, Kenya</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">kelvi20sagini@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone</span>
                  <span className="info-value">+254 757 450 768</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Status</span>
                  <span className="info-value">IT Student & Developer</span>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <Link to="/contact" className="btn btn-primary">Contact Me</Link>
              <Link to="/experience" className="btn btn-outline">View Experience</Link>
              <a href="/KELVIN%20CHWARA.pdf" download className="btn btn-secondary download-btn">
                <span>📄 Download CV</span>
              </a>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="career-objective">
              <h3>Career Objective</h3>
              <p>
                Seeking intern and job opportunities to apply my IT knowledge in real-world environments. 
                Passionate about contributing to meaningful projects while growing my technical skills 
                in web development, networking, and system administration.
              </p>
            </div>

            <div className="focus-areas">
              <h3>Current Focus Areas</h3>
              <div className="focus-list">
                <div className="focus-item">
                  <span className="focus-icon">💼</span>
                  <div>
                    <h4>Seeking Intern/Job Opportunities</h4>
                    <p>Ready to contribute to professional teams and grow my practical IT skills</p>
                  </div>
                </div>
                <div className="focus-item">
                  <span className="focus-icon">💻</span>
                  <div>
                    <h4>Full-Stack Development</h4>
                    <p>Building web applications with modern frameworks and technologies</p>
                  </div>
                </div>
                <div className="focus-item">
                  <span className="focus-icon">🌐</span>
                  <div>
                    <h4>Network Administration</h4>
                    <p>Configuring networks, system administration, and IT infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="core-values">
          <h2>Core Values & Principles</h2>
          <p className="values-intro">
            The fundamental principles that guide my approach to technology and professional development
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Constantly seeking new ways to solve problems and improve processes through technology.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔥</div>
              <h3>Dedication</h3>
              <p>Committed to continuous learning and delivering high-quality solutions in every project.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Excellence</h3>
              <p>Striving for perfection in code quality, user experience, and professional development.</p>
            </div>
          </div>
        </div>

        <div className="quick-facts">
          <h2>Quick Facts About Me</h2>
          <div className="facts-grid">
            <div className="fact-card">
              <span className="fact-emoji">🎓</span>
              <h3>Academic Excellence</h3>
              <p>Consistent high performance in IT coursework</p>
            </div>
            <div className="fact-card">
              <span className="fact-emoji">💻</span>
              <h3>Code Enthusiast</h3>
              <p>Love experimenting with new programming languages</p>
            </div>
            <div className="fact-card">
              <span className="fact-emoji">🌐</span>
              <h3>Digital Native</h3>
              <p>Always exploring the latest tech trends</p>
            </div>
            <div className="fact-card">
              <span className="fact-emoji">🤝</span>
              <h3>Team Player</h3>
              <p>Enjoy collaborative problem-solving</p>
            </div>
          </div>
        </div>

        <div className="collaboration-cta">
          <div className="cta-content">
            <h2>Let's Work Together</h2>
            <p>
              I'm always excited to take on new challenges and collaborate on innovative 
              projects. Whether you're looking for an intern or have an interesting 
              opportunity, I'd love to hear from you.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Get In Touch</Link>
            <Link to="/projects" className="btn btn-outline btn-lg">View My Work</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;