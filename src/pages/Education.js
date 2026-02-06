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

  const technologies = [
    'HTML5 & CSS3',
    'JavaScript (ES6+)',
    'Python Programming',
    'Django Framework',
    'Database Integration',
    'API Development',
    'Version Control (Git)',
    'Deployment Strategies',
  ];

  return (
    <div className="page education-page">
      <div className="container">
        <div className="page-header">
          <span className="page-badge">Academic Journey</span>
          <h1 className="page-title">Education & Training</h1>
          <p className="page-subtitle">
            My educational journey from primary school through university, including specialized 
            training and professional development courses that have shaped my technical expertise.
          </p>
        </div>

        <div className="education-inner">
          <main className="education-timeline">
            <article className="timeline-card featured reveal" style={{ '--delay': '0.05s' }}>
              <div className="timeline-header">
                <span className="timeline-badge">Current</span>
                <span className="timeline-status in-progress">In Progress</span>
              </div>

              <div className="timeline-body">
                <div className="timeline-type">Bachelor's Degree</div>
                <h3 className="timeline-title">Bachelor of Science in Information Technology</h3>
                <div className="timeline-institution">Kisii University</div>
                <div className="timeline-meta">
                  <span>📅 2021 - Present</span>
                  <span>📍 Kisii, Kenya</span>
                </div>

                <div className="timeline-gpa">Current GPA: <strong>3.6 / 4.0</strong></div>
                <p className="timeline-description">Comprehensive IT program covering programming fundamentals, database management, web technologies, networking, and system administration.</p>

                <h4>Key Achievements</h4>
                <ul className="education-highlights">
                  <li>Dean's List for Academic Excellence</li>
                  <li>Active member of IT Student Association</li>
                  <li>Participated in coding competitions</li>
                </ul>

                <h4>Key Coursework</h4>
                <div className="coursework-grid">
                  {coursework.map((course, index) => (
                    <span key={index} className="course-tag">{course}</span>
                  ))}
                </div>
              </div>
            </article>

            <article className="timeline-card featured reveal" style={{ '--delay': '0.12s' }}>
              <div className="timeline-header">
                <span className="timeline-badge">Industry Experience</span>
                <span className="timeline-status completed">Completed</span>
              </div>

              <div className="timeline-body">
                <div className="timeline-type">Industrial Attachment</div>
                <h3 className="timeline-title">Industrial Attachment Student</h3>
                <div className="timeline-institution">Mount Kenya University - Kisii Branch</div>
                <div className="timeline-meta">
                  <span>📅 May 2025 - August 2025</span>
                  <span>📍 Kisii, Kenya</span>
                </div>

                <div className="certificate-badge">Certificate of Completion</div>
                <p className="timeline-description">Completed industrial attachment program gaining practical experience in IT operations, system administration, and software development in a professional environment.</p>

                <h4>Key Responsibilities</h4>
                <ul className="education-highlights">
                  <li>Assisted in system administration and network maintenance</li>
                  <li>Participated in software development projects</li>
                  <li>Gained hands-on experience with database management</li>
                  <li>Collaborated with IT team on various technical projects</li>
                </ul>

                <h4>Skills Acquired</h4>
                <div className="coursework-grid">
                  <span className="course-tag tech-tag">System Administration</span>
                  <span className="course-tag tech-tag">Network Configuration</span>
                  <span className="course-tag tech-tag">Software Development</span>
                  <span className="course-tag tech-tag">Database Management</span>
                  <span className="course-tag tech-tag">IT Support</span>
                  <span className="course-tag tech-tag">Team Collaboration</span>
                </div>
              </div>
            </article>

            <article className="timeline-card reveal" style={{ '--delay': '0.18s' }}>
              <div className="timeline-header">
                <span className="timeline-badge">Professional</span>
                <span className="timeline-status completed">Completed</span>
              </div>

              <div className="timeline-body">
                <div className="timeline-type">Professional Training</div>
                <h3 className="timeline-title">Full Stack Web Development Course</h3>
                <div className="timeline-institution">Emobilis Technology Institute</div>
                <div className="timeline-meta">
                  <span>📅 October 2024 - December 2024</span>
                  <span>📍 Online</span>
                </div>

                <div className="certificate-badge">Certificate of Completion</div>
                <p className="timeline-description">Intensive online course focusing on modern web development technologies and frameworks.</p>

                <h4>Key Achievements</h4>
                <ul className="education-highlights">
                  <li>Built 5+ full-stack web applications</li>
                  <li>Mastered Django framework</li>
                  <li>Completed final capstone project</li>
                </ul>

                <h4>Technologies Covered</h4>
                <div className="coursework-grid">
                  {technologies.map((tech, index) => (
                    <span key={index} className="course-tag tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          </main>

          <aside className="education-side">
            <div className="stats-panel reveal" style={{ '--delay': '0.18s' }}>
              <div className="stat-card">
                <div className="stat-icon">🎓</div>
                <div className="stat-number">3.6</div>
                <div className="stat-label">Current GPA</div>
                <div className="stat-sub">Out of 4.0</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">📚</div>
                <div className="stat-number">8+</div>
                <div className="stat-label">Core Courses</div>
                <div className="stat-sub">Completed</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">💻</div>
                <div className="stat-number">5+</div>
                <div className="stat-label">Full-Stack Apps</div>
                <div className="stat-sub">Built</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">🏆</div>
                <div className="stat-number">2+</div>
                <div className="stat-label">Certifications</div>
                <div className="stat-sub">Earned</div>
              </div>
            </div>

            <div className="cert-card reveal" style={{ '--delay': '0.24s' }}>
              <div className="cert-card-body">
                <div>
                  <h4>Professional Certification</h4>
                  <h3>Full Stack Web Development</h3>
                  <p>Completed intensive training covering modern technologies, frameworks and full-stack workflows.</p>
                </div>

                <div className="cert-meta">
                  <div className="meta-pill">Duration: <strong>3 Months</strong></div>
                  <div className="meta-pill">Projects: <strong>5+</strong></div>
                  <div className="meta-pill">Focus: <strong>Full-Stack Development</strong></div>
                </div>

                <div className="cert-image">
                  <img src="/cert.jpg" alt="Certificate" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Education;