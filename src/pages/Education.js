import React from 'react';
import './Education.css';

const Education = () => {
  const coursework = [
    'Programming Fundamentals',
    'Database Management Systems',
    'Web Technologies',
    'Computer Networks',
    'Software Engineering',
    'Data Structures & Algorithms',
    'Operating Systems',
    'Information Security',
  ];

  const academicHighlights = [
    {
      icon: '🎓',
      title: 'Academic Foundation',
      text: 'A strong IT curriculum that combines theory, systems thinking, and practical problem solving.',
    },
    {
      icon: '💡',
      title: 'Hands-on Learning',
      text: 'Project work and collaborative assignments sharpened my ability to build and explain real solutions.',
    },
    {
      icon: '📈',
      title: 'Career Ready',
      text: 'My studies continuously prepare me for modern software engineering and tech-driven roles.',
    },
  ];

  const trainingFocusAreas = [
    'Professional documentation and credibility',
    'Digital entrepreneurship and innovation',
    'Practical software development growth',
    'Confidence in collaborative tech work',
  ];

  const professionalTraining = [
    {
      title: 'Recommendation Letter',
      organization: 'Professional Reference',
      period: '2025 • Verified Reference',
      summary: 'A formal letter of endorsement reflecting professionalism, consistency, and readiness to contribute in technical and collaborative environments.',
      description:
        'This recommendation highlights my work ethic, growth mindset, and ability to contribute responsibly in professional settings. It demonstrates how I approach learning, teamwork, and problem solving with seriousness and purpose while building trust through consistency and integrity.',
      highlights: ['Professional credibility', 'Leadership potential', 'Strong work ethic', 'Reliable collaborator'],
      file: '/KELVIN%20CHWARA%20RECOMMENDATION%20LETTER.pdf',
      icon: '/icons/recommendation-letter.svg',
      badge: 'Reference',
      accent: 'amber',
    },
    {
      title: 'ICT Authority Training Certificate',
      organization: 'ICT Authority',
      period: '2024 • Skills Development',
      summary: 'A certificate earned from ICT Authority training focused on digital skills, entrepreneurship, and practical technology application.',
      description:
        'This program strengthened my understanding of how technology creates value in business and career development. It emphasized practical digital competencies, innovation, and the mindset needed to turn skills into actionable opportunities.',
      highlights: ['Digital skills growth', 'Innovation mindset', 'Entrepreneurship training', 'Practical technology use'],
      file: '/ICT%20authority%20entrepreneurship%20training%20cert.pdf',
      icon: '/icons/ict-authority.svg',
      badge: 'Certificate',
      accent: 'green',
    },
    {
      title: 'Boot Camp Certificate',
      organization: 'Software Development Boot Camp',
      period: '2024 • Intensive Program',
      summary: 'An intensive boot camp that sharpened my software development abilities through real coding practice and rapid learning.',
      description:
        'The experience pushed me to build practical solutions under pressure, collaborate with others, and think creatively while solving coding challenges. It strengthened my ability to debug, build, and improve applications with a more structured workflow.',
      highlights: ['Hands-on coding', 'Project-based learning', 'Rapid skill growth', 'Modern development practice'],
      file: '/boot-camp-certificate.pdf',
      icon: '/icons/boot-camp.svg',
      badge: 'Boot Camp',
      accent: 'gold',
    },
  ];

  return (
    <div className="page education-page">
      <div className="container">
        <div className="page-header">
          <span className="page-badge">Academic Journey</span>
          <h1 className="page-title">Education & Training</h1>
          <p className="page-subtitle">
            My academic foundation and professional training are both shaped by practical experience,
            continuous learning, and a strong interest in software development.
          </p>
        </div>

        <section className="education-summary-strip">
          <div className="summary-card">
            <h3>Focus Areas</h3>
            <div className="focus-list">
              {trainingFocusAreas.map((item) => (
                <div key={item} className="focus-pill">{item}</div>
              ))}
            </div>
          </div>

          <div className="summary-card summary-card-accent">
            <h3>Portfolio Snapshot</h3>
            <div className="snapshot-grid">
              <div className="snapshot-item">
                <span className="snapshot-number">3.6</span>
                <span className="snapshot-label">Current GPA</span>
              </div>
              <div className="snapshot-item">
                <span className="snapshot-number">8+</span>
                <span className="snapshot-label">Core Courses</span>
              </div>
              <div className="snapshot-item">
                <span className="snapshot-number">3</span>
                <span className="snapshot-label">Certificates</span>
              </div>
              <div className="snapshot-item">
                <span className="snapshot-number">∞</span>
                <span className="snapshot-label">Growth Mindset</span>
              </div>
            </div>
          </div>
        </section>

        <section className="education-overview">
          <div className="overview-card">
            <div className="overview-card-content">
              <span className="overview-badge">Learning Path</span>
              <h2>Academic strength supported by meaningful professional growth</h2>
              <p>
                My journey blends classroom learning, hands-on practice, and document-backed training experiences.
                Every milestone contributes to a stronger foundation in technology, problem solving, and professional delivery.
              </p>
            </div>

            <div className="overview-highlights">
              {academicHighlights.map((item) => (
                <div key={item.title} className="overview-item">
                  <div className="overview-icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="education-grid">
          <div className="education-main">
            <div className="section-card academic-card">
              <div className="section-heading">
                <div className="section-icon">🎓</div>
                <div>
                  <span className="section-kicker">University Study</span>
                  <h2>Academic Foundation</h2>
                </div>
              </div>

              <div className="degree-panel">
                <div className="degree-top">
                  <div>
                    <span className="timeline-badge">Current</span>
                    <h3>Bachelor of Science in Information Technology</h3>
                  </div>
                  <span className="timeline-status in-progress">In Progress</span>
                </div>

                <div className="degree-meta">
                  <span>📍 Kisii University</span>
                  <span>📅 2021 - Present</span>
                  <span>⭐ GPA 3.6 / 4.0</span>
                </div>

                <p className="degree-description">
                  A comprehensive IT program that builds strong foundations in programming, networking,
                  databases, systems thinking, and software engineering.
                </p>

                <div className="detail-block">
                  <h4>Key Achievements</h4>
                  <ul className="education-highlights">
                    <li>Dean's List for Academic Excellence</li>
                    <li>Active member of the IT Student Association</li>
                    <li>Participated in coding competitions and collaborative projects</li>
                  </ul>
                </div>

                <div className="detail-block">
                  <h4>Core Coursework</h4>
                  <div className="coursework-grid">
                    {coursework.map((course, index) => (
                      <span key={index} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="section-card training-card">
              <div className="section-heading">
                <div className="section-icon">🛠️</div>
                <div>
                  <span className="section-kicker">Professional Training</span>
                  <h2>Development Milestones</h2>
                </div>
              </div>

              <div className="training-grid">
                {professionalTraining.map((item, index) => (
                  <div key={item.title} className="training-item">
                    <div className={`training-card training-card-${item.accent}`} style={{ '--delay': `${0.16 + index * 0.08}s` }}>
                      <div className="training-card-top">
                        <div className="training-icon-wrap">
                          <img src={item.icon} alt={`${item.title} icon`} className="training-icon" />
                        </div>
                        <span className="training-badge">{item.badge}</span>
                      </div>

                      <div className="training-body">
                        <h4>{item.title}</h4>
                        <p className="training-org">{item.organization}</p>
                        <p className="training-period">{item.period}</p>
                        <p className="training-summary">{item.summary}</p>

                        <div className="training-description">
                          <h5>Professional Description</h5>
                          <p>{item.description}</p>
                        </div>

                        <div className="training-highlights">
                          {item.highlights.map((highlight) => (
                            <span key={highlight} className="training-highlight-pill">{highlight}</span>
                          ))}
                        </div>
                      </div>

                      <a className="training-download-btn" href={item.file} download aria-label={`Download ${item.title}`}>
                        Download Certificate
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Education;