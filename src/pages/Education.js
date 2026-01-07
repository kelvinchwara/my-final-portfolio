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

        <div className="education-timeline">
          <div className="timeline-card featured">
            <div className="timeline-header">
              <span className="timeline-badge">Current</span>
              <span className="timeline-status in-progress">In Progress</span>
            </div>
            <div className="timeline-body">
              <div className="timeline-type">Bachelor's Degree</div>
              <h2 className="timeline-title">Bachelor of Science in Information Technology</h2>
              <div className="timeline-institution">Kisii University</div>
              <div className="timeline-meta">
                <span>📅 2021 - Present</span>
                <span>📍 Kisii, Kenya</span>
              </div>
              <div className="timeline-gpa">Current GPA: 3.6/4.0</div>
              <p className="timeline-description">
                Comprehensive IT program covering programming fundamentals, database management, 
                web technologies, networking, and system administration.
              </p>
              <div className="timeline-achievements">
                <h3>Key Achievements</h3>
                <ul>
                  <li>Dean's List for Academic Excellence</li>
                  <li>Active member of IT Student Association</li>
                  <li>Participated in coding competitions</li>
                </ul>
              </div>
              <div className="timeline-coursework">
                <h3>Key Coursework</h3>
                <div className="coursework-grid">
                  {coursework.map((course, index) => (
                    <span key={index} className="course-tag">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-card">
            <div className="timeline-header">
              <span className="timeline-badge">Professional</span>
              <span className="timeline-status completed">Completed</span>
            </div>
            <div className="timeline-body">
              <div className="timeline-type">Professional Training</div>
              <h2 className="timeline-title">Full Stack Web Development Course</h2>
              <div className="timeline-institution">Emobilis Technology Institute</div>
              <div className="timeline-meta">
                <span>📅 October 2024 - December 2024</span>
                <span>📍 Online</span>
              </div>
              <span className="certificate-badge">Certificate of Completion</span>
              <p className="timeline-description">
                Intensive online course focusing on modern web development technologies and frameworks.
              </p>
              <div className="timeline-achievements">
                <h3>Key Achievements</h3>
                <ul>
                  <li>Built 5+ full-stack web applications</li>
                  <li>Mastered Django framework</li>
                  <li>Completed final capstone project</li>
                </ul>
              </div>
              <div className="timeline-coursework">
                <h3>Technologies Covered</h3>
                <div className="coursework-grid">
                  {technologies.map((tech, index) => (
                    <span key={index} className="course-tag tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="education-stats">
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

        <div className="certification-highlight">
          <div className="cert-highlight-content">
            <h2>Professional Certification</h2>
            <h3>Full Stack Web Development</h3>
            <p>
              Successfully completed intensive web development training covering modern 
              technologies, frameworks, and best practices in full-stack development.
            </p>
            <div className="cert-highlight-stats">
              <div className="cert-stat">
                <span>📅 Duration</span>
                <strong>3 Months</strong>
              </div>
              <div className="cert-stat">
                <span>📝 Projects</span>
                <strong>5+ Applications</strong>
              </div>
              <div className="cert-stat">
                <span>🎯 Focus</span>
                <strong>Full-Stack Development</strong>
              </div>
            </div>
          </div>
          <div className="cert-highlight-image">
            <img src="/cert.jpg" alt="Certificate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;