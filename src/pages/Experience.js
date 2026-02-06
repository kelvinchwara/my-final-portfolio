import React from 'react';
import './Experience.css';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <div className="page experience-page">
      <div className="container">
        <header className="page-header">
          <span className="page-badge">💼 Professional Journey</span>
          <h1 className="page-title">Experience & Attachments</h1>
          <p className="page-subtitle">Building practical IT skills through hands-on industrial attachments, academic projects, and volunteer initiatives. Transforming theoretical knowledge into real-world solutions.</p>
        </header>

        <div className="experience-stats">
          <div className="stat-box">
            <div className="stat-icon">🏆</div>
            <div className="stat-content">
              <div className="stat-number">2+</div>
              <div className="stat-text">Industrial Attachments</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <div className="stat-number">50+</div>
              <div className="stat-text">Support Tickets Resolved</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">🚀</div>
            <div className="stat-content">
              <div className="stat-number">10+</div>
              <div className="stat-text">Projects Completed</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">🤝</div>
            <div className="stat-content">
              <div className="stat-number">50+</div>
              <div className="stat-text">People Trained</div>
            </div>
          </div>
        </div>

        <div className="experience-container">
          <main className="timeline">
            <h2 className="section-title">Professional Work Timeline</h2>

            <article className="timeline-card featured reveal" style={{ '--delay': '0.05s' }}>
              <div className="timeline-status-badge">Current</div>
              <div className="timeline-header">
                <div className="timeline-badge" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '14px', fontWeight: '600'}}>Now</div>
                <div className="timeline-meta-right">
                  <div className="timeline-role" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '16px', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem'}}>
                    📋 IT Industrial Attachment
                  </div>
                  <div className="timeline-company" style={{color: '#2563eb', fontWeight: '600', fontSize: '15px', marginBottom: '0.25rem'}}>RAM Hospital - Kisii</div>
                  <div className="timeline-dates" style={{color: '#6b7280', fontSize: '13px', fontWeight: '500'}}>Sept 2025 - Present • Kisii, Kenya</div>
                </div>
              </div>

              <div className="role-details">
                <p className="lead" style={{backgroundColor: '#eff6ff', borderLeft: '4px solid #3b82f6', padding: '1rem', borderRadius: '0.5rem', color: '#4b5563', fontSize: '14px', fontWeight: '500', lineHeight: '1.6', margin: '1.5rem 0'}}>
                  Provide comprehensive IT support in a healthcare environment, managing critical infrastructure and ensuring reliable hospital operations.
                </p>

                <div className="responsibilities-section">
                  <h4 style={{color: '#1f2937', fontSize: '15px', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    💼 Key Responsibilities
                  </h4>
                  <ul className="education-highlights">
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Configured and maintained computer networks across hospital departments</li>
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Installed and updated operating systems on 50+ workstations</li>
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Set up and managed CCTV security systems for facility monitoring</li>
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Performed software installation, updates, and maintenance</li>
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Resolved printer, peripheral, and hardware issues promptly</li>
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Provided technical support to hospital staff and departments</li>
                  </ul>
                </div>

                <div className="achievements-section">
                  <h4 style={{color: '#1f2937', fontSize: '15px', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    ⭐ Key Achievements
                  </h4>
                  <ul className="education-highlights">
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Successfully implemented network configurations improving connectivity</li>
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Enhanced hospital security through CCTV system management</li>
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Reduced system downtime through proactive maintenance protocols</li>
                  </ul>
                </div>

                <div className="skills-section">
                  <h4 style={{color: '#1f2937', fontSize: '15px', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    🛠️ Skills Developed
                  </h4>
                  <div className="coursework-grid">
                    <span className="course-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '9999px'}}>Network Configuration</span>
                    <span className="course-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '9999px'}}>System Administration</span>
                    <span className="course-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '9999px'}}>CCTV Systems</span>
                    <span className="course-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '9999px'}}>Hardware Support</span>
                    <span className="course-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '9999px'}}>Troubleshooting</span>
                    <span className="course-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '9999px'}}>Healthcare IT</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="timeline-card reveal" style={{ '--delay': '0.12s', border: '2px solid #dbeafe', borderRadius: '0.5rem' }}>
              <div className="timeline-status-badge" style={{backgroundColor: '#dbeafe', color: '#059669', textTransform: 'uppercase'}}>Completed</div>
              <div className="timeline-header">
                <div className="timeline-badge" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '14px', fontWeight: '600'}}>2025</div>
                <div className="timeline-meta-right">
                  <div className="timeline-role" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '16px', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem'}}>
                    🎓 IT Industrial Attachment Student
                  </div>
                  <div className="timeline-company" style={{color: '#2563eb', fontWeight: '600', fontSize: '15px', marginBottom: '0.25rem'}}>Mount Kenya University - Kisii Branch</div>
                  <div className="timeline-dates" style={{color: '#6b7280', fontSize: '13px', fontWeight: '500'}}>May 2025 - Aug 2025 • Kisii, Kenya</div>
                </div>
              </div>

              <div className="role-details">
                <p className="lead" style={{backgroundColor: '#eff6ff', borderLeft: '4px solid #3b82f6', padding: '1rem', borderRadius: '0.5rem', color: '#4b5563', fontSize: '14px', fontWeight: '500', lineHeight: '1.6', margin: '1.5rem 0'}}>
                  Completed a 4-month industrial attachment, gaining hands-on experience in IT operations and enterprise infrastructure management.
                </p>

                <div className="responsibilities-section">
                  <h4 style={{color: '#1f2937', fontSize: '15px', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    💼 Key Responsibilities
                  </h4>
                  <ul className="education-highlights">
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Troubleshooting and optimizing IT systems for university operations</li>
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Supporting network configuration and maintenance across campus</li>
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Applying academic knowledge to solve real-world IT challenges</li>
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Assisting with IT operations and system administration tasks</li>
                  </ul>
                </div>

                <div className="achievements-section">
                  <h4 style={{color: '#1f2937', fontSize: '15px', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    ⭐ Key Achievements
                  </h4>
                  <ul className="education-highlights">
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Successfully completed 4-month intensive industrial attachment</li>
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Gained practical experience in enterprise IT environments</li>
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Contributed to system optimization and performance improvement projects</li>
                  </ul>
                </div>

                <div className="skills-section">
                  <h4 style={{color: '#1f2937', fontSize: '15px', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    🛠️ Skills Developed
                  </h4>
                  <div className="coursework-grid">
                    <span className="course-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '9999px'}}>IT Operations</span>
                    <span className="course-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '9999px'}}>Network Configuration</span>
                    <span className="course-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '9999px'}}>System Administration</span>
                    <span className="course-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '9999px'}}>Problem Solving</span>
                    <span className="course-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '9999px'}}>Technical Support</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="timeline-card reveal" style={{ '--delay': '0.18s', border: '2px solid #dbeafe', borderRadius: '0.5rem' }}>
              <div className="timeline-header">
                <div className="timeline-badge" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '14px', fontWeight: '600'}}>2024</div>
                <div className="timeline-meta-right">
                  <div className="timeline-role" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '16px', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem'}}>
                    📚 Digital Marketing & Networking Workshop
                  </div>
                  <div className="timeline-company" style={{color: '#2563eb', fontWeight: '600', fontSize: '15px', marginBottom: '0.25rem'}}>Ajira Digital</div>
                  <div className="timeline-dates" style={{color: '#6b7280', fontSize: '13px', fontWeight: '500'}}>2024 (2 days) • Workshop</div>
                </div>
              </div>

              <div className="role-details">
                <p className="lead" style={{backgroundColor: '#eff6ff', borderLeft: '4px solid #3b82f6', padding: '1rem', borderRadius: '0.5rem', color: '#4b5563', fontSize: '14px', fontWeight: '500', lineHeight: '1.6', margin: '1.5rem 0'}}>
                  Intensive workshop covering digital marketing strategies, online business, and networking fundamentals.
                </p>
                <div className="skills-section">
                  <h4 style={{color: '#1f2937', fontSize: '15px', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    🛠️ Skills Acquired
                  </h4>
                  <div className="coursework-grid">
                    <span className="course-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '9999px'}}>Digital Marketing</span>
                    <span className="course-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '9999px'}}>Online Business</span>
                    <span className="course-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '9999px'}}>Networking Basics</span>
                    <span className="course-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '9999px'}}>Social Media Marketing</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="timeline-card reveal" style={{ '--delay': '0.24s', border: '2px solid #dbeafe', borderRadius: '0.5rem' }}>
              <div className="timeline-header">
                <div className="timeline-badge" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '14px', fontWeight: '600'}}>2023-2024</div>
                <div className="timeline-meta-right">
                  <div className="timeline-role" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '16px', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem'}}>
                    🤝 IT Support Volunteer
                  </div>
                  <div className="timeline-company" style={{color: '#2563eb', fontWeight: '600', fontSize: '15px', marginBottom: '0.25rem'}}>Local Community Center</div>
                  <div className="timeline-dates" style={{color: '#6b7280', fontSize: '13px', fontWeight: '500'}}>2023 - 2024 • Community Service</div>
                </div>
              </div>

              <div className="role-details">
                <p className="lead" style={{backgroundColor: '#eff6ff', borderLeft: '4px solid #3b82f6', padding: '1rem', borderRadius: '0.5rem', color: '#4b5563', fontSize: '14px', fontWeight: '500', lineHeight: '1.6', margin: '1.5rem 0'}}>
                  Provided IT support and digital literacy training to community members, helping bridge the technology gap.
                </p>
                <div className="achievements-section">
                  <h4 style={{color: '#1f2937', fontSize: '15px', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    ⭐ Impact
                  </h4>
                  <ul className="education-highlights">
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Delivered training sessions to 30+ community members</li>
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Configured lab machines and provided network troubleshooting</li>
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Made technology accessible to underserved populations</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="timeline-card reveal" style={{ '--delay': '0.30s', border: '2px solid #dbeafe', borderRadius: '0.5rem' }}>
              <div className="timeline-header">
                <div className="timeline-badge" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '14px', fontWeight: '600'}}>2019-2020</div>
                <div className="timeline-meta-right">
                  <div className="timeline-role" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '16px', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem'}}>
                    👨‍🏫 Peer Tutor
                  </div>
                  <div className="timeline-company" style={{color: '#2563eb', fontWeight: '600', fontSize: '15px', marginBottom: '0.25rem'}}>Nyasore SDA Secondary School</div>
                  <div className="timeline-dates" style={{color: '#6b7280', fontSize: '13px', fontWeight: '500'}}>2019 - 2020 • Academic</div>
                </div>
              </div>

              <div className="role-details">
                <p className="lead" style={{backgroundColor: '#eff6ff', borderLeft: '4px solid #3b82f6', padding: '1rem', borderRadius: '0.5rem', color: '#4b5563', fontSize: '14px', fontWeight: '500', lineHeight: '1.6', margin: '1.5rem 0'}}>
                  Tutored computer studies and basic programming, fostering interest in technology among secondary school students.
                </p>
                <div className="achievements-section">
                  <h4 style={{color: '#1f2937', fontSize: '15px', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    ⭐ Impact
                  </h4>
                  <ul className="education-highlights">
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Mentored 20+ students in computer studies and programming fundamentals</li>
                    <li style={{color: '#6b7280', fontSize: '14px', padding: '0.75rem 0', paddingLeft: '1.5rem'}}>Improved student performance and confidence in technical subjects</li>
                  </ul>
                </div>
              </div>
            </article>
          </main>

          <aside className="experience-sidebar">
            <div className="sidebar-card reveal" style={{ '--delay': '0.22s' }}>
              <h3>📊 Experience Summary</h3>
              <div className="summary-stat">
                <span className="label">Industrial Attachments:</span>
                <span className="value">2</span>
              </div>
              <div className="summary-stat">
                <span className="label">Total Experience:</span>
                <span className="value">2+ Years</span>
              </div>
              <div className="summary-stat">
                <span className="label">Projects Completed:</span>
                <span className="value">10+</span>
              </div>
              <div className="summary-stat">
                <span className="label">People Trained:</span>
                <span className="value">50+</span>
              </div>
            </div>

            <div className="sidebar-card reveal" style={{ '--delay': '0.28s' }}>
              <h3>🛠️ Core Skills</h3>
              <div className="skill-list">
                <div className="skill">
                  <div className="skill-name">Networking</div>
                  <div className="skill-bar"><span style={{width: '85%'}}></span></div>
                </div>
                <div className="skill">
                  <div className="skill-name">System Administration</div>
                  <div className="skill-bar"><span style={{width: '80%'}}></span></div>
                </div>
                <div className="skill">
                  <div className="skill-name">Web Development</div>
                  <div className="skill-bar"><span style={{width: '75%'}}></span></div>
                </div>
                <div className="skill">
                  <div className="skill-name">Database Management</div>
                  <div className="skill-bar"><span style={{width: '70%'}}></span></div>
                </div>
                <div className="skill">
                  <div className="skill-name">Troubleshooting</div>
                  <div className="skill-bar"><span style={{width: '80%'}}></span></div>
                </div>
              </div>
            </div>

            <div className="sidebar-card cta-card reveal" style={{ '--delay': '0.34s' }}>
              <h3>💼 Ready for Opportunities</h3>
              <p>Actively seeking industrial attachments and entry-level positions to apply and expand my technical skills in professional environments.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">Contact Me</Link>
                <Link to="/projects" className="btn btn-secondary">View Projects</Link>
              </div>
            </div>
          </aside>
        </div>

        <section className="projects-showcase">
          <h2 className="section-title">📁 Project Portfolio</h2>
          <p className="section-description">Academic and professional projects demonstrating practical technical expertise.</p>

          <div className="projects-grid">
            <article className="project-card reveal" style={{ '--delay': '0.05s', border: '2px solid #dbeafe', borderRadius: '0.5rem', backgroundColor: '#ffffff' }}>
              <div className="project-header">
                <h3 style={{color: '#1f2937', fontSize: '16px', fontWeight: '700'}}>🌐 Full-Stack Web Applications</h3>
                <span className="project-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.35rem 0.85rem', borderRadius: '9999px'}}>Course Projects</span>
              </div>
              <p className="project-source" style={{color: '#2563eb', fontSize: '14px', fontWeight: '600', marginBottom: '1rem'}}>Emobilis Technology Institute (Oct 2024 - Dec 2024)</p>
              <ul className="project-list">
                <li style={{color: '#6b7280', fontSize: '14px', padding: '0.5rem 0', paddingLeft: '1.5rem'}}><strong style={{color: '#1f2937'}}>E-commerce Platform:</strong> Complete solution with authentication, product catalog, and payment integration using Python, Django, MySQL</li>
                <li style={{color: '#6b7280', fontSize: '14px', padding: '0.5rem 0', paddingLeft: '1.5rem'}}><strong style={{color: '#1f2937'}}>Task Management System:</strong> Collaborative app with real-time updates and user roles using Django, Bootstrap, SQLite</li>
                <li style={{color: '#6b7280', fontSize: '14px', padding: '0.5rem 0', paddingLeft: '1.5rem'}}><strong style={{color: '#1f2937'}}>Portfolio Website:</strong> Responsive site showcasing web skills using HTML5, CSS3, JavaScript</li>
              </ul>
              <div className="project-tech">
                <span className="tech-tag" style={{backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '12px', fontWeight: '500', padding: '0.35rem 0.75rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginBottom: '0.5rem', display: 'inline-block'}}>Python</span>
                <span className="tech-tag" style={{backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '12px', fontWeight: '500', padding: '0.35rem 0.75rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginBottom: '0.5rem', display: 'inline-block'}}>Django</span>
                <span className="tech-tag" style={{backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '12px', fontWeight: '500', padding: '0.35rem 0.75rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginBottom: '0.5rem', display: 'inline-block'}}>MySQL</span>
                <span className="tech-tag" style={{backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '12px', fontWeight: '500', padding: '0.35rem 0.75rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginBottom: '0.5rem', display: 'inline-block'}}>JavaScript</span>
              </div>
            </article>

            <article className="project-card reveal" style={{ '--delay': '0.12s', border: '2px solid #dbeafe', borderRadius: '0.5rem', backgroundColor: '#ffffff' }}>
              <div className="project-header">
                <h3 style={{color: '#1f2937', fontSize: '16px', fontWeight: '700'}}>🎓 Academic Projects</h3>
                <span className="project-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.35rem 0.85rem', borderRadius: '9999px'}}>University</span>
              </div>
              <p className="project-source" style={{color: '#2563eb', fontSize: '14px', fontWeight: '600', marginBottom: '1rem'}}>Kisii University (2021 - Present)</p>
              <ul className="project-list">
                <li style={{color: '#6b7280', fontSize: '14px', padding: '0.5rem 0', paddingLeft: '1.5rem'}}><strong style={{color: '#1f2937'}}>Network Configuration Lab:</strong> Designed network topologies, subnetting, and routing using Cisco Packet Tracer</li>
                <li style={{color: '#6b7280', fontSize: '14px', padding: '0.5rem 0', paddingLeft: '1.5rem'}}><strong style={{color: '#1f2937'}}>Database Management System:</strong> Comprehensive DB design and normalization using MySQL</li>
                <li style={{color: '#6b7280', fontSize: '14px', padding: '0.5rem 0', paddingLeft: '1.5rem'}}><strong style={{color: '#1f2937'}}>Programming Assignments:</strong> Java and Python tasks focusing on algorithms and optimization</li>
              </ul>
              <div className="project-tech">
                <span className="tech-tag" style={{backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '12px', fontWeight: '500', padding: '0.35rem 0.75rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginBottom: '0.5rem', display: 'inline-block'}}>Cisco Packet Tracer</span>
                <span className="tech-tag" style={{backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '12px', fontWeight: '500', padding: '0.35rem 0.75rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginBottom: '0.5rem', display: 'inline-block'}}>MySQL</span>
                <span className="tech-tag" style={{backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '12px', fontWeight: '500', padding: '0.35rem 0.75rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginBottom: '0.5rem', display: 'inline-block'}}>Java</span>
                <span className="tech-tag" style={{backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '12px', fontWeight: '500', padding: '0.35rem 0.75rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginBottom: '0.5rem', display: 'inline-block'}}>Python</span>
              </div>
            </article>

            <article className="project-card reveal" style={{ '--delay': '0.19s', border: '2px solid #dbeafe', borderRadius: '0.5rem', backgroundColor: '#ffffff' }}>
              <div className="project-header">
                <h3 style={{color: '#1f2937', fontSize: '16px', fontWeight: '700'}}>🤝 Community & Volunteer Projects</h3>
                <span className="project-tag" style={{backgroundColor: '#dbeafe', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '0.35rem 0.85rem', borderRadius: '9999px'}}>Community Service</span>
              </div>
              <p className="project-source" style={{color: '#2563eb', fontSize: '14px', fontWeight: '600', marginBottom: '1rem'}}>Community-Based Initiatives (2019 - 2024)</p>
              <ul className="project-list">
                <li style={{color: '#6b7280', fontSize: '14px', padding: '0.5rem 0', paddingLeft: '1.5rem'}}><strong style={{color: '#1f2937'}}>Digital Literacy Program:</strong> Trained 30+ community members in basic IT and computer skills</li>
                <li style={{color: '#6b7280', fontSize: '14px', padding: '0.5rem 0', paddingLeft: '1.5rem'}}><strong style={{color: '#1f2937'}}>Lab Setup & Maintenance:</strong> Configured and maintained computer labs for educational use</li>
                <li style={{color: '#6b7280', fontSize: '14px', padding: '0.5rem 0', paddingLeft: '1.5rem'}}><strong style={{color: '#1f2937'}}>Peer Mentoring:</strong> Guided 20+ secondary school students in computer studies and programming</li>
              </ul>
              <div className="project-tech">
                <span className="tech-tag" style={{backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '12px', fontWeight: '500', padding: '0.35rem 0.75rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginBottom: '0.5rem', display: 'inline-block'}}>Community Engagement</span>
                <span className="tech-tag" style={{backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '12px', fontWeight: '500', padding: '0.35rem 0.75rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginBottom: '0.5rem', display: 'inline-block'}}>Training</span>
                <span className="tech-tag" style={{backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '12px', fontWeight: '500', padding: '0.35rem 0.75rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginBottom: '0.5rem', display: 'inline-block'}}>Mentoring</span>
              </div>
            </article>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Make an Impact? 🚀</h2>
            <p>I am eager to contribute my technical expertise, problem-solving skills, and dedication to a dynamic team. Let's collaborate on meaningful projects!</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Let's Connect</Link>
            <Link to="/skills" className="btn btn-outline btn-lg">View My Skills</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
