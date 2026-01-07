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

        <div className="experience-grid">
          <main className="timeline">
            <h2 className="sr-only">Work Timeline</h2>

            <div className="timeline-item card">
              <div className="timeline-head">
                <div className="timeline-badge">Now</div>
                <div>
                  <h3>IT Industrial Attachment Student</h3>
                  <p className="muted">Mount Kenya University - Kisii Branch <span className="meta">• May 2025 - Present • Kisii, Kenya</span></p>
                </div>
              </div>

              <p className="lead">Gaining hands-on experience in a professional IT environment</p>

              <div className="role-details">
                <p className="location">University IT Department — undertaking industrial attachment to gain practical experience in IT operations, system administration, and real-world application of academic knowledge.</p>

                <h4>Key Responsibilities</h4>
                <ul>
                  <li>Assisting with network administration and maintenance</li>
                  <li>Supporting IT help desk operations</li>
                  <li>Participating in system troubleshooting and problem resolution</li>
                  <li>Documenting IT processes and procedures</li>
                  <li>Collaborating with IT team on projects</li>
                </ul>

                <h4>Key Achievements</h4>
                <ul>
                  <li>Resolved 50+ help desk tickets</li>
                  <li>Contributed to network infrastructure documentation</li>
                  <li>Participated in system upgrade projects</li>
                </ul>

                <h4>Skills Developed</h4>
                <div className="skills-grid">
                  <span className="pill">Network Administration</span>
                  <span className="pill">System Troubleshooting</span>
                  <span className="pill">Help Desk Support</span>
                  <span className="pill">Documentation</span>
                  <span className="pill">Team Collaboration</span>
                  <span className="pill">Problem Solving</span>
                </div>
              </div>
            </div>

            <div className="timeline-item card">
              <div className="timeline-head">
                <div className="timeline-badge">2023 - 2024</div>
                <div>
                  <h3>IT Support Volunteer</h3>
                  <p className="muted">Local Community Center <span className="meta">• 2023 - 2024</span></p>
                </div>
              </div>

              <div className="role-details">
                <p>Provided IT support, helped setup labs and delivered digital literacy sessions to community members.</p>
                <ul>
                  <li>Delivered training to 30+ community members</li>
                  <li>Configured lab machines and basic network troubleshooting</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item card">
              <div className="timeline-head">
                <div className="timeline-badge">2019 - 2020</div>
                <div>
                  <h3>Peer Tutor — Nyasore SDA Secondary School</h3>
                  <p className="muted"><span className="meta">2019 - 2020</span></p>
                </div>
              </div>

              <div className="role-details">
                <p>Tutored computer studies and basic programming; helped 20+ students improve skills.</p>
              </div>
            </div>
          </main>

          <aside className="summary-panel">
            <div className="snapshot card">
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

            <div className="skills card">
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

            <div className="cta card">
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
