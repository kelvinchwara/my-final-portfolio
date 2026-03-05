import React from 'react';
import './Experience.css';
import { Link } from 'react-router-dom';

const Experience = () => {
  const stats = [
    { icon: '🏆', number: '2+', label: 'Internships & Attachments' },
    { icon: '📊', number: '50+', label: 'Support Tickets Resolved' },
    { icon: '🚀', number: '10+', label: 'Projects Completed' },
    { icon: '🤝', number: '50+', label: 'People Trained' },
  ];

  const timeline = [
    {
      key: 'ram-hospital',
      featured: true,
      status: 'Current',
      badge: 'Now',
      role: 'IT Internship (IT Support)',
      company: 'RAM Hospital - Kisii',
      dates: 'Sept 2025 - Present • Kisii, Kenya',
      summary:
        'Providing comprehensive IT support in a healthcare environment, managing critical infrastructure and ensuring reliable hospital operations.',
      responsibilitiesTitle: 'Key Responsibilities',
      responsibilities: [
        'Configured and maintained computer networks across hospital departments',
        'Installed and updated operating systems on 50+ workstations',
        'Set up and managed CCTV security systems for facility monitoring',
        'Performed software installation, updates, and maintenance',
        'Resolved printer, peripheral, and hardware issues promptly',
        'Provided technical support to hospital staff and departments',
      ],
      achievementsTitle: 'Key Achievements',
      achievements: [
        'Successfully implemented network configurations improving connectivity',
        'Enhanced hospital security through CCTV system management',
        'Reduced system downtime through proactive maintenance protocols',
      ],
      skillsTitle: 'Skills Developed',
      skills: [
        'Network Configuration',
        'System Administration',
        'CCTV Systems',
        'Hardware Support',
        'Troubleshooting',
        'Healthcare IT',
      ],
      delay: '0.05s',
    },
    {
      key: 'mku-attachment',
      featured: false,
      status: 'Completed',
      badge: '2025',
      role: 'IT Industrial Attachment Student',
      company: 'Mount Kenya University - Kisii Branch',
      dates: 'May 2025 - Aug 2025 • Kisii, Kenya',
      summary:
        'Completed a 4-month industrial attachment, gaining hands-on experience in IT operations and enterprise infrastructure management.',
      responsibilitiesTitle: 'Key Responsibilities',
      responsibilities: [
        'Troubleshooting and optimizing IT systems for university operations',
        'Supporting network configuration and maintenance across campus',
        'Applying academic knowledge to solve real-world IT challenges',
        'Assisting with IT operations and system administration tasks',
      ],
      achievementsTitle: 'Key Achievements',
      achievements: [
        'Successfully completed a 4-month intensive industrial attachment',
        'Gained practical experience in enterprise IT environments',
        'Contributed to system optimization and performance improvement projects',
      ],
      skillsTitle: 'Skills Developed',
      skills: [
        'IT Operations',
        'Network Configuration',
        'System Administration',
        'Problem Solving',
        'Technical Support',
      ],
      delay: '0.12s',
    },
    {
      key: 'ajira-workshop',
      featured: false,
      status: null,
      badge: '2024',
      role: 'Digital Marketing & Networking Workshop',
      company: 'Ajira Digital',
      dates: '2024 (2 days) • Workshop',
      summary:
        'Intensive workshop covering digital marketing strategies, online business, and networking fundamentals.',
      responsibilitiesTitle: null,
      responsibilities: [],
      achievementsTitle: 'Skills Acquired',
      achievements: [],
      skillsTitle: null,
      skills: ['Digital Marketing', 'Online Business', 'Networking Basics', 'Social Media Marketing'],
      delay: '0.18s',
    },
    {
      key: 'community-volunteer',
      featured: false,
      status: null,
      badge: '2023-2024',
      role: 'IT Support Volunteer',
      company: 'Local Community Center',
      dates: '2023 - 2024 • Community Service',
      summary:
        'Provided IT support and digital literacy training to community members, helping bridge the technology gap.',
      responsibilitiesTitle: null,
      responsibilities: [],
      achievementsTitle: 'Impact',
      achievements: [
        'Delivered training sessions to 30+ community members',
        'Configured lab machines and provided network troubleshooting',
        'Made technology accessible to underserved populations',
      ],
      skillsTitle: null,
      skills: [],
      delay: '0.24s',
    },
    {
      key: 'peer-tutor',
      featured: false,
      status: null,
      badge: '2019-2020',
      role: 'Peer Tutor',
      company: 'Nyasore SDA Secondary School',
      dates: '2019 - 2020 • Academic',
      summary:
        'Tutored computer studies and basic programming, fostering interest in technology among secondary school students.',
      responsibilitiesTitle: null,
      responsibilities: [],
      achievementsTitle: 'Impact',
      achievements: [
        'Mentored 20+ students in computer studies and programming fundamentals',
        'Improved student performance and confidence in technical subjects',
      ],
      skillsTitle: null,
      skills: [],
      delay: '0.30s',
    },
  ];

  return (
    <div className="page experience-page">
      {/* Hero Section */}
      <section className="experience-hero">
        <div className="hero-content container">
          <header className="page-header">
            <span className="page-badge">💼 Professional Journey</span>
            <h1 className="page-title">Experience & Internships</h1>
            <p className="page-subtitle">
              Building practical IT skills through internships, industrial attachments, academic projects, and volunteer initiatives—transforming theoretical knowledge into real-world solutions.
            </p>
          </header>
        </div>
      </section>

      <div className="container">
        {/* Stats Section */}
        <div className="experience-stats">
          {stats.map((s) => (
            <div className="stat-box" key={s.label}>
              <div className="stat-icon">
                <span>{s.icon}</span>
              </div>
              <div className="stat-content">
                <div className="stat-number">{s.number}</div>
                <div className="stat-text">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="experience-container">
          <main className="timeline">
            <h2 className="section-title">Professional Work Timeline</h2>

            {timeline.map((item) => (
              <article
                key={item.key}
                className={`timeline-card ${item.featured ? 'featured' : ''}`}
                style={{ '--delay': item.delay }}
              >
                {item.status ? (
                  <div
                    className={`timeline-status-badge ${
                      item.status === 'Current' ? 'is-current' : 'is-completed'
                    }`}
                  >
                    {item.status}
                  </div>
                ) : null}

                <div className="timeline-header">
                  <div className="timeline-badge">{item.badge}</div>
                  <div className="timeline-meta-right">
                    <div className="timeline-role">
                      <span role="img" aria-label="role">{item.role.includes('📋') ? '📋' : item.role.includes('🎓') ? '🎓' : item.role.includes('📚') ? '📚' : item.role.includes('🤝') ? '🤝' : '👨‍🏫'}</span>
                      {item.role.replace(/^[^\w]*/, '')}
                    </div>
                    <div className="timeline-company">{item.company}</div>
                    <div className="timeline-dates">{item.dates}</div>
                  </div>
                </div>

                <div className="role-details">
                  <p className="lead">{item.summary}</p>

                  {item.responsibilitiesTitle && item.responsibilities.length ? (
                    <div className="responsibilities-section">
                      <h4>💼 {item.responsibilitiesTitle}</h4>
                      <ul className="education-highlights">
                        {item.responsibilities.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {item.achievementsTitle && item.achievements.length ? (
                    <div className="achievements-section">
                      <h4>⭐ {item.achievementsTitle}</h4>
                      <ul className="education-highlights">
                        {item.achievements.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {item.skillsTitle && item.skills.length ? (
                    <div className="skills-section">
                      <h4>🛠️ {item.skillsTitle}</h4>
                      <div className="coursework-grid">
                        {item.skills.map((s) => (
                          <span key={s} className="course-tag">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {!item.skillsTitle && item.skills.length ? (
                    <div className="skills-section">
                      <h4>🛠️ Skills Acquired</h4>
                      <div className="coursework-grid">
                        {item.skills.map((s) => (
                          <span key={s} className="course-tag">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </main>

          <aside className="experience-sidebar">
            <div className="sidebar-card" style={{ '--delay': '0.22s' }}>
              <h3>📊 Experience Summary</h3>
              <div className="summary-stat">
                <span className="label">Internships & Attachments:</span>
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

            <div className="sidebar-card" style={{ '--delay': '0.28s' }}>
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

            <div className="sidebar-card cta-card" style={{ '--delay': '0.34s' }}>
              <h3>💼 Ready for Opportunities</h3>
              <p>Actively seeking internships and entry-level opportunities to apply and expand my technical skills in professional environments.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">Contact Me</Link>
                <Link to="/projects" className="btn btn-secondary">View Projects</Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Projects Showcase */}
        <section className="projects-showcase">
          <h2 className="section-title">📁 Project Portfolio</h2>
          <p className="section-description">Academic and professional projects demonstrating practical technical expertise.</p>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-header">
                <h3>🌐 Full-Stack Web Applications</h3>
                <span className="project-tag">Course Projects</span>
              </div>
              <p className="project-source">Emobilis Technology Institute (Oct 2024 - Dec 2024)</p>
              <ul className="project-list">
                <li><strong>E-commerce Platform:</strong> Complete solution with authentication, product catalog, and payment integration using Python, Django, MySQL</li>
                <li><strong>Task Management System:</strong> Collaborative app with real-time updates and user roles using Django, Bootstrap, SQLite</li>
                <li><strong>Portfolio Website:</strong> Responsive site showcasing web skills using HTML5, CSS3, JavaScript</li>
              </ul>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Django</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">JavaScript</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-header">
                <h3>🎓 Academic Projects</h3>
                <span className="project-tag">University</span>
              </div>
              <p className="project-source">Kisii University (2021 - Present)</p>
              <ul className="project-list">
                <li><strong>Network Configuration Lab:</strong> Designed network topologies, subnetting, and routing using Cisco Packet Tracer</li>
                <li><strong>Database Management System:</strong> Comprehensive DB design and normalization using MySQL</li>
                <li><strong>Programming Assignments:</strong> Java and Python tasks focusing on algorithms and optimization</li>
              </ul>
              <div className="project-tech">
                <span className="tech-tag">Cisco Packet Tracer</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Python</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-header">
                <h3>🤝 Community & Volunteer Projects</h3>
                <span className="project-tag">Community Service</span>
              </div>
              <p className="project-source">Community-Based Initiatives (2019 - 2024)</p>
              <ul className="project-list">
                <li><strong>Digital Literacy Program:</strong> Trained 30+ community members in basic IT and computer skills</li>
                <li><strong>Lab Setup & Maintenance:</strong> Configured and maintained computer labs for educational use</li>
                <li><strong>Peer Mentoring:</strong> Guided 20+ secondary school students in computer studies and programming</li>
              </ul>
              <div className="project-tech">
                <span className="tech-tag">Community Engagement</span>
                <span className="tech-tag">Training</span>
                <span className="tech-tag">Mentoring</span>
              </div>
            </article>
          </div>
        </section>

        {/* CTA Section */}
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
