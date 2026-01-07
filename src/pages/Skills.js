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
            <h2 className="category-title">
              <span className="category-icon">🌐</span>
              Web Technologies
            </h2>
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
            <h2 className="category-title">
              <span className="category-icon">🔗</span>
              Networking & Systems
            </h2>
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
            <h2 className="category-title">
              <span className="category-icon">🗄️</span>
              Database & Tools
            </h2>
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
          <h2 className="category-title">
            <span className="category-icon">🚀</span>
            Professional Skills
          </h2>
          <p className="category-intro">
            Beyond technical expertise, these professional skills enable effective collaboration and project success
          </p>
          <div className="professional-grid">
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
              <div className="professional-icon">💡</div>
              <h3>Creative Thinking</h3>
              <p>Ability to approach challenges from different angles and develop unique solutions</p>
            </div>
            <div className="professional-card">
              <div className="professional-icon">📚</div>
              <h3>Research Skills</h3>
              <p>Proficient in conducting technical research and staying updated with industry trends</p>
            </div>
            <div className="professional-card">
              <div className="professional-icon">🔄</div>
              <h3>Adaptability</h3>
              <p>Quick to learn new technologies and adapt to changing project requirements</p>
            </div>
            <div className="professional-card">
              <div className="professional-icon">✨</div>
              <h3>Attention to Detail</h3>
              <p>Meticulous approach to code quality, testing, and documentation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;