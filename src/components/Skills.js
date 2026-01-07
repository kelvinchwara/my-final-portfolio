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

  const certifications = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      institution: 'Emobilis Technology Institute',
      period: 'October 2024 - December 2024',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django'],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Digital Marketing and Networking',
      institution: 'Ajira Digital Workshop',
      period: '2024',
      skills: ['Digital Marketing', 'Networking Fundamentals'],
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Bachelor of Science in Information Technology',
      institution: 'Kisii University',
      period: '2021 - Present',
      skills: ['Programming', 'Database Management', 'Web Technologies'],
      status: 'In Progress'
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Technical Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills, programming languages, 
            and professional competencies developed through academic study and practical experience.
          </p>
        </div>

        <div className="skills-sections">
          <div className="skills-category">
            <h3 className="category-title">
              <span className="category-icon">💻</span>
              Programming Languages
            </h3>
            <div className="skills-grid">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="skill-card">
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
            <h3 className="category-title">
              <span className="category-icon">🌐</span>
              Web Technologies
            </h3>
            <div className="skills-grid">
              {webTechnologies.map((skill, index) => (
                <div key={index} className="skill-card">
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
            <h3 className="category-title">
              <span className="category-icon">🔗</span>
              Networking & Systems
            </h3>
            <div className="skills-grid">
              {networkingSkills.map((skill, index) => (
                <div key={index} className="skill-card">
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
            <h3 className="category-title">
              <span className="category-icon">🗄️</span>
              Database & Tools
            </h3>
            <div className="skills-grid">
              {databaseTools.map((skill, index) => (
                <div key={index} className="skill-card">
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
          <h3 className="category-title">
            <span className="category-icon">🚀</span>
            Professional Skills
          </h3>
          <p className="category-intro">
            Beyond technical expertise, these professional skills enable effective collaboration and project success
          </p>
          <div className="professional-grid">
            <div className="professional-card">
              <div className="professional-icon">🔍</div>
              <h4>Problem Solving</h4>
              <p>Strong analytical skills for troubleshooting technical issues and developing innovative solutions</p>
            </div>
            <div className="professional-card">
              <div className="professional-icon">🤝</div>
              <h4>Team Collaboration</h4>
              <p>Experience working on team projects and collaborating effectively with diverse groups</p>
            </div>
            <div className="professional-card">
              <div className="professional-icon">💡</div>
              <h4>Creative Thinking</h4>
              <p>Ability to approach challenges from different angles and develop unique solutions</p>
            </div>
            <div className="professional-card">
              <div className="professional-icon">📚</div>
              <h4>Research Skills</h4>
              <p>Proficient in conducting technical research and staying updated with industry trends</p>
            </div>
            <div className="professional-card">
              <div className="professional-icon">🔄</div>
              <h4>Adaptability</h4>
              <p>Quick to learn new technologies and adapt to changing project requirements</p>
            </div>
            <div className="professional-card">
              <div className="professional-icon">✨</div>
              <h4>Attention to Detail</h4>
              <p>Meticulous approach to code quality, testing, and documentation</p>
            </div>
          </div>
        </div>

        <div className="certifications">
          <h3 className="category-title">
            <span className="category-icon">📜</span>
            Certifications & Training
          </h3>
          <p className="category-intro">
            Formal education and professional development courses that have shaped my expertise
          </p>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="cert-card">
                <div className="cert-header">
                  <div className="cert-number">{cert.id}</div>
                  <span className={`cert-status ${cert.status === 'Completed' ? 'completed' : 'progress'}`}>
                    {cert.status}
                  </span>
                </div>
                <div className="cert-body">
                  <h4>{cert.title}</h4>
                  <p className="cert-institution">{cert.institution}</p>
                  <p className="cert-period">{cert.period}</p>
                  <div className="cert-skills">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="cert-skill">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="continuous-learning">
          <div className="learning-card">
            <h3>Continuous Learning</h3>
            <p>
              Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
              frameworks, and best practices. I actively engage in online courses, workshops, and 
              personal projects to expand my skill set and maintain my competitive edge.
            </p>
            <div className="learning-stats">
              <div className="learning-stat">
                <span className="stat-icon">📚</span>
                <span className="stat-title">Always Learning</span>
                <p>Constantly exploring new technologies and methodologies</p>
              </div>
              <div className="learning-stat">
                <span className="stat-icon">🎯</span>
                <span className="stat-title">Goal-Oriented</span>
                <p>Setting and achieving specific skill development targets</p>
              </div>
              <div className="learning-stat">
                <span className="stat-icon">🔄</span>
                <span className="stat-title">Iterative Improvement</span>
                <p>Continuously refining and enhancing existing skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;