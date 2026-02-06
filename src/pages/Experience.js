import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="page experience-page">
      <div className="container">
        <header className="page-header">
          <span className="page-badge">Professional Journey</span>
          <h1 className="page-title">Experience & Attachments</h1>
          <p className="page-subtitle">My professional experience through industrial attachments, academic projects, and volunteer work that have shaped my practical IT skills and professional development.</p>
        </header>

        <div className="experience-inner">
          <main className="timeline">
            <h2 className="sr-only">Work Timeline</h2>

            <article className="timeline-card reveal" style={{ '--delay': '0.05s' }}>
              <div className="timeline-header">
                <div className="timeline-badge">Now</div>
                <div className="timeline-meta-right">
                  <div className="timeline-role">IT Industrial Attachment Student</div>
                  <div className="muted">RAM Hospital - Kisii <span className="meta">• Sept 2025 - Present • Kisii, Kenya</span></div>
                </div>
              </div>

              <p className="lead">Providing comprehensive IT support in a healthcare environment</p>

              <div className="role-details">
                <p className="location">Hospital IT Department — managing computer networks, systems, and technical infrastructure to support hospital operations.</p>

                <h4>Key Responsibilities</h4>
                <ul className="education-highlights">
                  <li>Configured and maintained computer networks</li>
                  <li>Installed and updated operating systems</li>
                  <li>Set up and managed CCTV systems</li>
                  <li>Performed software installation and updates</li>
                  <li>Resolved printer and peripheral issues</li>
                  <li>Provided hardware support and troubleshooting</li>
                </ul>

                <h4>Key Achievements</h4>
                <ul className="education-highlights">
                  <li>Successfully implemented network configurations</li>
                  <li>Enhanced hospital security through CCTV system management</li>
                  <li>Reduced downtime through proactive maintenance</li>
                </ul>

                <h4>Skills Developed</h4>
                <div className="coursework-grid">
                  <span className="course-tag">Network Configuration</span>
                  <span className="course-tag">System Administration</span>
                  <span className="course-tag">CCTV Systems</span>
                  <span className="course-tag">Hardware Support</span>
                  <span className="course-tag">Troubleshooting</span>
                  <span className="course-tag">Healthcare IT</span>
                </div>
              </div>
            </article>

            <article className="timeline-card reveal" style={{ '--delay': '0.12s' }}>
              <div className="timeline-header">
                <div className="timeline-badge">2025</div>
                <div className="timeline-meta-right">
                  <div className="timeline-role">IT Industrial Attachment Student</div>
                  <div className="muted">Mount Kenya University - Kisii Branch <span className="meta">• May 2025 - Aug 2025 • Kisii, Kenya</span></div>
                </div>
              </div>

              <p className="lead">Completed industrial attachment with hands-on IT operations experience</p>

              <div className="role-details">
                <p className="location">University IT Department — Successfully completed industrial attachment, gaining hands-on experience in IT operations, system administration, and networking.</p>

                <h4>Key Responsibilities</h4>
                <ul className="education-highlights">
                  <li>Troubleshooting and optimizing systems</li>
                  <li>Supporting network configuration and maintenance</li>
                  <li>Applying academic knowledge to real-world IT challenges</li>
                  <li>Assisting with IT operations and system administration</li>
                </ul>

                <h4>Key Achievements</h4>
                <ul className="education-highlights">
                  <li>Successfully completed 4-month industrial attachment</li>
                  <li>Gained practical experience in enterprise IT environments</li>
                  <li>Contributed to system optimization projects</li>
                </ul>

                <h4>Skills Developed</h4>
                <div className="coursework-grid">
                  <span className="course-tag">IT Operations</span>
                  <span className="course-tag">Network Configuration</span>
                  <span className="course-tag">System Administration</span>
                  <span className="course-tag">Problem Solving</span>
                  <span className="course-tag">Technical Support</span>
                </div>
              </div>
            </article>

            <article className="timeline-card reveal" style={{ '--delay': '0.18s' }}>
              <div className="timeline-header">
                <div className="timeline-badge">2024</div>
                <div className="timeline-meta-right">
                  <div className="timeline-role">Digital Marketing and Networking Workshop</div>
                  <div className="muted">Ajira Digital <span className="meta">• 2024 (2 days) • Workshop</span></div>
                </div>
              </div>

              <p className="lead">Intensive workshop covering digital marketing strategies and networking fundamentals</p>

              <div className="role-details">
                <h4>Skills Acquired</h4>
                <div className="coursework-grid">
                  <span className="course-tag">Digital Marketing Fundamentals</span>
                  <span className="course-tag">Online Business Strategies</span>
                  <span className="course-tag">Networking Basics</span>
                  <span className="course-tag">Social Media Marketing</span>
                </div>
              </div>
            </article>

            <article className="timeline-card reveal" style={{ '--delay': '0.24s' }}>
              <div className="timeline-header">
                <div className="timeline-badge">2023 - 2024</div>
                <div className="timeline-meta-right">
                  <div className="timeline-role">IT Support Volunteer</div>
                  <div className="muted">Local Community Center <span className="meta">• 2023 - 2024</span></div>
                </div>
              </div>

              <div className="role-details">
                <p>Provided IT support, helped setup labs and delivered digital literacy sessions to community members.</p>
                <ul className="education-highlights">
                  <li>Delivered training to 30+ community members</li>
                  <li>Configured lab machines and basic network troubleshooting</li>
                </ul>
              </div>
            </article>

            <article className="timeline-card reveal" style={{ '--delay': '0.30s' }}>
              <div className="timeline-header">
                <div className="timeline-badge">2019 - 2020</div>
                <div className="timeline-meta-right">
                  <div className="timeline-role">Peer Tutor — Nyasore SDA Secondary School</div>
                  <div className="muted"><span className="meta">2019 - 2020</span></div>
                </div>
              </div>

              <div className="role-details">
                <p>Tutored computer studies and basic programming; helped 20+ students improve skills.</p>
              </div>
            </article>
          </main>

          <aside className="summary-panel enhanced">
            <div className="snapshot card reveal" style={{ '--delay': '0.22s' }}>
              <h4>Snapshot</h4>
              <div className="metrics">
                <div className="metric">
                  <div className="metric-number">50+</div>
                  <div className="metric-label">Tickets Resolved</div>
                </div>
                <div className="metric">
                  <div className="metric-number">10+</div>
                  <div className="metric-label">Projects</div>
                </div>
                <div className="metric">
                  <div className="metric-number">2</div>
                  <div className="metric-label">Volunteering Roles</div>
                </div>
              </div>
            </div>

            <div className="skills card reveal" style={{ '--delay': '0.28s' }}>
              <h4>Technical Skills</h4>
              <div className="skill-list">
                <div className="skill">
                  <div className="skill-name">Networking</div>
                  <div className="skill-bar"><span style={{width: '80%'}}></span></div>
                </div>
                <div className="skill">
                  <div className="skill-name">System Admin</div>
                  <div className="skill-bar"><span style={{width: '70%'}}></span></div>
                </div>
                <div className="skill">
                  <div className="skill-name">Web Development</div>
                  <div className="skill-bar"><span style={{width: '65%'}}></span></div>
                </div>
                <div className="skill">
                  <div className="skill-name">Databases</div>
                  <div className="skill-bar"><span style={{width: '60%'}}></span></div>
                </div>
              </div>
            </div>

            <div className="cta card reveal" style={{ '--delay': '0.34s' }}>
              <h4>Open to Opportunities</h4>
              <p>Actively seeking industrial attachments and entry-level roles to apply and grow my skills.</p>
              <div className="cta-actions">
                <a href="/contact" className="btn btn-primary">Contact Me</a>
                <a href="/projects" className="btn btn-secondary">View Projects</a>
              </div>
            </div>
          </aside>
        </div>

        <section className="projects-experience">
          <h2>Project Experience</h2>
          <p className="lead">Academic and training projects demonstrating practical skills</p>

          <div className="cards-grid">
            <article className="card">
              <h3>Full-Stack Web Applications</h3>
              <p className="muted">Emobilis Technology Institute — Course Projects (Oct 2024 - Dec 2024)</p>
              <ul>
                <li><strong>E‑commerce Platform:</strong> Complete e-commerce solution with user authentication, product catalog, and payment integration. Technologies: Python, Django, HTML/CSS, JavaScript, MySQL.</li>
                <li><strong>Task Management System:</strong> Collaborative task app with real-time updates and user roles. Technologies: Django, Bootstrap, SQLite, Ajax.</li>
                <li><strong>Portfolio Website:</strong> Responsive portfolio showcasing web development skills. Technologies: HTML5, CSS3, JavaScript.</li>
              </ul>
            </article>

            <article className="card">
              <h3>Academic Projects</h3>
              <p className="muted">Kisii University — University Projects (2021 - Present)</p>
              <ul>
                <li><strong>Network Configuration Lab:</strong> Designed network topologies, subnetting and routing using Cisco Packet Tracer.</li>
                <li><strong>Database Management System:</strong> Comprehensive DB design and normalization using MySQL.</li>
                <li><strong>Programming Assignments:</strong> Java and Python tasks focusing on algorithms and optimization.</li>
              </ul>
            </article>

            <article className="card">
              <h3>Volunteer Experience</h3>
              <p className="muted">Community service and knowledge sharing initiatives</p>
              <ul>
                <li><strong>Peer Tutor — Nyasore SDA Secondary School (2019 - 2020):</strong> Tutored computer studies and basic programming; helped 20+ students improve skills.</li>
                <li><strong>IT Support Volunteer — Local Community Center (2023 - 2024):</strong> Provided IT support and digital literacy training to 30+ community members.</li>
              </ul>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
