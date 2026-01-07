import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">Getting to Know</h2>
          <h3 className="section-subtitle">Kelvin Sagini</h3>
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
              <h4>Personal Information</h4>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Full Name</span>
                  <span className="info-value">Chwara Kelvin Sagini</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location</span>
                  <span className="info-value">P.O BOX 796, Kisii, Kenya</span>
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
                  <span className="info-label">Age</span>
                  <span className="info-value">22 Years</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Status</span>
                  <span className="info-value">IT Student & Developer</span>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <a href="#contact" className="btn btn-primary">Contact Me</a>
              <a href="#" className="btn btn-secondary">Download CV</a>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="career-objective">
              <h4>Career Objective</h4>
              <p>
                IT student seeking an industrial attachment to apply web 
                development skills and gain practical experience in a dynamic 
                organization. I am eager to contribute to meaningful projects 
                while learning from experienced professionals in the technology 
                industry.
              </p>
            </div>

            <div className="focus-areas">
              <h4>Current Focus Areas</h4>
              <div className="focus-list">
                <div className="focus-item">
                  <span className="focus-icon">🎯</span>
                  <div>
                    <h5>Industrial Attachment</h5>
                    <p>Seeking opportunities to apply theoretical knowledge in practical settings</p>
                  </div>
                </div>
                <div className="focus-item">
                  <span className="focus-icon">💻</span>
                  <div>
                    <h5>Full-Stack Development</h5>
                    <p>Expanding expertise in modern web technologies and frameworks</p>
                  </div>
                </div>
                <div className="focus-item">
                  <span className="focus-icon">🌐</span>
                  <div>
                    <h5>Network Administration</h5>
                    <p>Building skills in network configuration and security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="core-values">
          <h3>Core Values & Principles</h3>
          <p className="values-intro">
            The fundamental principles that guide my approach to technology and professional development
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>Constantly seeking new ways to solve problems and improve processes through technology.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔥</div>
              <h4>Dedication</h4>
              <p>Committed to continuous learning and delivering high-quality solutions in every project.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h4>Excellence</h4>
              <p>Striving for perfection in code quality, user experience, and professional development.</p>
            </div>
          </div>
        </div>

        <div className="quick-facts">
          <h3>Quick Facts About Me</h3>
          <div className="facts-grid">
            <div className="fact-card">
              <span className="fact-emoji">🎓</span>
              <h4>Academic Excellence</h4>
              <p>Consistent high performance in IT coursework</p>
            </div>
            <div className="fact-card">
              <span className="fact-emoji">💻</span>
              <h4>Code Enthusiast</h4>
              <p>Love experimenting with new programming languages</p>
            </div>
            <div className="fact-card">
              <span className="fact-emoji">🌐</span>
              <h4>Digital Native</h4>
              <p>Always exploring the latest tech trends</p>
            </div>
            <div className="fact-card">
              <span className="fact-emoji">🤝</span>
              <h4>Team Player</h4>
              <p>Enjoy collaborative problem-solving</p>
            </div>
          </div>
        </div>

        <div className="collaboration-cta">
          <div className="cta-content">
            <h3>Let's Work Together</h3>
            <p>
              I'm always excited to take on new challenges and collaborate on innovative 
              projects. Whether you're looking for an intern or have an interesting 
              opportunity, I'd love to hear from you.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default About;