import React from 'react';
import './Skills.css';

const Skills = () => {
  const programmingSkills = [
    { name: 'JavaScript', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'SQL', level: 70 },
  ];

  const webTechnologies = [
    { name: 'React.js', level: 80 },
    { name: 'Django', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Bootstrap', level: 85 },
    { name: 'REST APIs', level: 75 },
  ];

  const networkingSkills = [
    { name: 'Network Configuration', level: 75 },
    { name: 'Network Security', level: 70 },
    { name: 'Troubleshooting', level: 80 },
    { name: 'Linux/Windows', level: 75 },
  ];

  const databaseTools = [
    { name: 'MySQL', level: 80 },
    { name: 'Git/GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
    { name: 'Postman', level: 75 },
  ];

  return (
    <div className="page skills-page">
      <div className="container">
        <div className="page-header">
          <span className="page-badge">Technical Expertise</span>
          <h1 className="page-title">Skills & Technologies</h1>
          <p className="page-subtitle">
            A comprehensive overview of my technical skills, programming languages, 
            and professional competencies developed through academic study and practical experience.
          </p>
        </div>

        <div className="skills-sections">
          <div className="skills-category">
            <h2 className="category-title">
              <span className="category-icon">💻</span>
              Programming Languages
            </h2>
            <div className="skills-grid">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="skill-card reveal" style={{ '--delay': `${index * 0.06}s` }}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h2 className="category-title">
              <span className="category-icon">🌐</span>
              Web Technologies
            </h2>
            <div className="skills-grid">
              {webTechnologies.map((skill, index) => (
                <div key={index} className="skill-card reveal" style={{ '--delay': `${index * 0.06 + 0.15}s` }}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h2 className="category-title">
              <span className="category-icon">🔗</span>
              Networking & Systems
            </h2>
            <div className="skills-grid">
              {networkingSkills.map((skill, index) => (
                <div key={index} className="skill-card reveal" style={{ '--delay': `${index * 0.06 + 0.28}s` }}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h2 className="category-title">
              <span className="category-icon">🗄️</span>
              Database & Tools
            </h2>
            <div className="skills-grid">
              {databaseTools.map((skill, index) => (
                <div key={index} className="skill-card reveal" style={{ '--delay': `${index * 0.06 + 0.4}s` }}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="professional-skills">
          <h2 className="category-title">
            <span className="category-icon">🚀</span>
            Professional Skills
          </h2>
          <p className="category-intro">
            Beyond technical expertise, these professional skills enable effective collaboration and project success
          </p>
          <div className="professional-grid">
            <div className="professional-card">
              <div className="professional-icon">👔</div>
              <h3>Management Skills</h3>
              <p>Effective project management and team leadership capabilities</p>
            </div>
            <div className="professional-card">
              <div className="professional-icon">🎨</div>
              <h3>Creativity</h3>
              <p>Innovative approach to problem-solving and design challenges</p>
            </div>
            <div className="professional-card">
              <div className="professional-icon">📊</div>
              <h3>Digital Marketing</h3>
              <p>Experience with digital marketing strategies and online business</p>
            </div>
            <div className="professional-card">
              <div className="professional-icon">🔍</div>
              <h3>Problem Solving</h3>
              <p>Strong analytical skills for troubleshooting technical issues and developing innovative solutions</p>
            </div>
            <div className="professional-card">
              <div className="professional-icon">🤝</div>
              <h3>Team Collaboration</h3>
              <p>Experience working on team projects and collaborating effectively with diverse groups</p>
            </div>
            <div className="professional-card">
              <div className="professional-icon">🧠</div>
              <h3>Critical Thinking</h3>
              <p>Analytical approach to complex challenges and strategic decision-making</p>
            </div>
            <div className="professional-card">
              <div className="professional-icon">🔄</div>
              <h3>Adaptability</h3>
              <p>Quick to learn new technologies and adapt to changing project requirements</p>
            </div>
            <div className="professional-card">
              <div className="professional-icon">👑</div>
              <h3>Leadership</h3>
              <p>Proven ability to lead teams and guide projects to successful completion</p>
            </div>
          </div>
        </div>

        <section className="education-section">
          <h2 className="section-title">Academic Journey</h2>
          <p className="lead">My educational path from university study to professional training, highlighting achievements, core coursework, and practical projects.</p>

          <div className="education-inner">
            <div className="edu-main">
              <article className="edu-card current reveal" style={{ '--delay': '0.05s' }}>
                <div className="card-badge">Current • In Progress</div>

                <div className="edu-header">
                  <h3>Bachelor of Science in Information Technology</h3>
                  <div className="edu-meta">Kisii University • Expected Completion April 2026 • Kisii, Kenya</div>
                </div>

                <p className="muted">Comprehensive program covering programming, databases, web technologies, networking and systems.</p>

                <div className="edu-stats">
                  <div className="edu-gpa"><strong>GPA</strong><span>3.6 / 4.0</span></div>
                  <div className="edu-duration"><strong>Since</strong><span>2021</span></div>
                </div>

                <h4>Key Achievements</h4>
                <ul className="list-plain">
                  <li>Dean's List for Academic Excellence</li>
                  <li>Active member of IT Student Association</li>
                  <li>Participated in coding competitions</li>
                </ul>

                <h4>Key Coursework</h4>
                <div className="course-tags">
                  {['Programming Fundamentals','Database Management Systems','Web Technologies','Computer Networks','Software Engineering','Data Structures & Algorithms','Operating Systems','Information Security'].map((c, i) => (
                    <span key={i} className="tag">{c}</span>
                  ))}
                </div>
              </article>
            </div>

            <aside className="edu-aside">
              <article className="training-card completed reveal" style={{ '--delay': '0.12s' }}>
                <div className="card-badge">Professional • Completed</div>

                <h3>Full Stack Web Development</h3>
                <div className="training-meta muted">Emobilis Technology Institute • Oct 2024 - Dec 2024 • Online</div>
                <p><strong>Certificate of Completion</strong></p>

                <h4>Key Achievements</h4>
                <ul className="list-plain">
                  <li>Built 5+ full-stack web applications</li>
                  <li>Mastered Django framework</li>
                  <li>Completed capstone project</li>
                </ul>

                <h4>Technologies Covered</h4>
                <div className="course-tags">
                  {['HTML5 & CSS3','JavaScript (ES6+)','Python Programming','Django','Database Integration','API Development','Git','Deployment'].map((t, i) => (
                    <span key={i} className="tag">{t}</span>
                  ))}
                </div>

                <div className="training-meta-row">
                  <div className="meta-pill">Duration: <strong>3 Months</strong></div>
                  <div className="meta-pill">Projects: <strong>5+</strong></div>
                </div>
              </article>

              <div className="stats-grid reveal" style={{ '--delay': '0.18s' }}>
                <div className="stat-card">
                  <div className="stat-number">3.6</div>
                  <div className="stat-label">Current GPA</div>
                </div>

                <div className="stat-card">
                  <div className="stat-number">8+</div>
                  <div className="stat-label">Core Courses</div>
                </div>

                <div className="stat-card">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Full-Stack Apps</div>
                </div>

                <div className="stat-card">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Certifications</div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;