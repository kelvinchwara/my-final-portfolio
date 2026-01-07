import React from 'react';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      type: 'Industrial Attachment',
      title: 'IT Industrial Attachment Student',
      company: 'Mount Kenya University - Kisii Branch',
      period: 'May 2025 - Present',
      location: 'Kisii, Kenya',
      department: 'University IT Department',
      description: 'Currently undertaking industrial attachment to gain practical experience in IT operations, system administration, and real-world application of academic knowledge.',
      responsibilities: [
        'Assisting with network administration and maintenance',
        'Supporting IT help desk operations',
        'Participating in system troubleshooting and problem resolution',
        'Learning enterprise-level IT infrastructure management',
        'Documenting IT processes and procedures',
        'Collaborating with IT team on various projects',
      ],
      achievements: [
        'Successfully resolved 50+ help desk tickets',
        'Contributed to network infrastructure documentation',
        'Participated in system upgrade projects',
      ],
      skills: ['Network Administration', 'System Troubleshooting', 'Help Desk Support', 'Documentation', 'Team Collaboration', 'Problem Solving'],
      current: true,
    },
  ];

  const projectExperience = [
    {
      category: 'Full-Stack Web Applications',
      company: 'Emobilis Technology Institute',
      period: 'October 2024 - December 2024',
      projects: [
        {
          name: 'E-commerce Platform',
          description: 'Built a complete e-commerce solution with user authentication, product catalog, and payment integration.',
          technologies: ['Python', 'Django', 'HTML/CSS', 'JavaScript', 'MySQL'],
        },
        {
          name: 'Task Management System',
          description: 'Created a collaborative task management application with real-time updates and user roles.',
          technologies: ['Django', 'Bootstrap', 'SQLite', 'Ajax'],
        },
        {
          name: 'Portfolio Website',
          description: 'Designed and developed a responsive portfolio website showcasing web development skills.',
          technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        },
      ],
      skills: ['Full-Stack Development', 'Database Design', 'UI/UX Design', 'API Integration'],
    },
  ];

  const academicProjects = [
    {
      name: 'Network Configuration Lab',
      description: 'Designed and implemented network topologies with proper subnetting and routing protocols.',
      technologies: ['Cisco Packet Tracer', 'Network Protocols', 'Routing'],
    },
    {
      name: 'Database Management System',
      description: 'Developed a comprehensive database system for a fictional business with proper normalization.',
      technologies: ['MySQL', 'SQL', 'Database Design', 'Normalization'],
    },
    {
      name: 'Programming Assignments',
      description: 'Completed various programming challenges focusing on algorithmic thinking and code optimization.',
      technologies: ['Java', 'Python', 'Data Structures', 'Algorithms'],
    },
  ];

  const volunteerExperience = [
    {
      role: 'Peer Tutor - Computer Studies',
      organization: 'Nyasore SDA Secondary School',
      period: '2019 - 2020',
      description: 'Provided voluntary tutoring support to fellow students in computer studies and basic programming concepts.',
      impact: 'Helped 20+ students improve their computer literacy and programming fundamentals',
      skills: ['Teaching', 'Communication', 'Patience', 'Knowledge Transfer'],
    },
    {
      role: 'IT Support Volunteer',
      organization: 'Local Community Center',
      period: '2023 - 2024',
      description: 'Provided basic IT support and digital literacy training to community members.',
      impact: 'Assisted 30+ community members with computer basics and internet usage',
      skills: ['Community Service', 'Digital Literacy Training', 'Technical Support', 'Public Speaking'],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Experience & Attachments</span>
          <h2 className="section-title">My Professional Experience</h2>
          <p className="section-subtitle">
            My professional experience through industrial attachments, academic projects, and volunteer 
            work that have shaped my practical IT skills and professional development.
          </p>
        </div>

        <div className="current-attachment">
          <div className="section-label">
            <span className="live-badge">● LIVE</span>
            <h3>Current Industrial Attachment</h3>
          </div>
          <p className="section-intro">Gaining hands-on experience in professional IT environment</p>

          {experienceData.map((exp, index) => (
            <div key={index} className="experience-card featured">
              <div className="exp-header">
                <div className="exp-type">{exp.type}</div>
                <span className="exp-status current">Current</span>
              </div>
              <div className="exp-body">
                <h3 className="exp-title">{exp.title}</h3>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-meta">
                  <span>📅 {exp.period}</span>
                  <span>📍 {exp.location}</span>
                  <span>🏢 {exp.department}</span>
                </div>
                <p className="exp-description">{exp.description}</p>

                <div className="exp-responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="exp-achievements">
                  <h4>Key Achievements</h4>
                  <ul>
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>

                <div className="exp-skills">
                  <h4>Skills Developed</h4>
                  <div className="skill-tags">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="project-experience">
          <h3 className="section-subtitle">Project Experience</h3>
          <p className="section-intro">Academic and training projects demonstrating practical skills</p>

          <div className="project-grid">
            {projectExperience.map((proj, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h4>{proj.category}</h4>
                  <span className="project-period">{proj.period}</span>
                </div>
                <div className="project-company">{proj.company}</div>
                <p className="project-description">{proj.projects[0].description}</p>
                <div className="project-list">
                  {proj.projects.map((p, i) => (
                    <div key={i} className="project-item">
                      <strong>{p.name}</strong>
                      <p>{p.description}</p>
                      <div className="project-tech">
                        {p.technologies.map((tech, ti) => (
                          <span key={ti} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="project-skills">
                  <span className="skills-label">Skills Developed:</span>
                  {proj.skills.map((skill, i) => (
                    <span key={i} className="mini-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="academic-projects">
          <h3 className="section-subtitle">Academic Projects</h3>
          <p className="section-intro">University coursework and research projects</p>

          <div className="academic-grid">
            {academicProjects.map((project, index) => (
              <div key={index} className="academic-card">
                <div className="academic-header">
                  <span className="year-badge">{project.name.includes('Lab') ? '2024' : project.name.includes('Database') ? '2023' : '2023'}</span>
                </div>
                <h4 className="academic-title">{project.name}</h4>
                <p className="academic-description">{project.description}</p>
                <div className="academic-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="volunteer-experience">
          <h3 className="section-subtitle">Volunteer Experience</h3>
          <p className="section-intro">Community service and knowledge sharing initiatives</p>

          <div className="volunteer-grid">
            {volunteerExperience.map((vol, index) => (
              <div key={index} className="volunteer-card">
                <div className="volunteer-header">
                  <h4>{vol.role}</h4>
                  <span className="volunteer-period">{vol.period}</span>
                </div>
                <div className="volunteer-organization">{vol.organization}</div>
                <p className="volunteer-description">{vol.description}</p>
                <div className="volunteer-impact">
                  <span className="impact-label">Impact:</span>
                  <span>{vol.impact}</span>
                </div>
                <div className="volunteer-skills">
                  <span className="skills-label">Skills:</span>
                  {vol.skills.map((skill, i) => (
                    <span key={i} className="mini-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="opportunities-cta">
          <div className="cta-content">
            <h3>Ready for New Opportunities</h3>
            <p>
              I'm actively seeking new industrial attachment opportunities and entry-level positions 
              where I can apply my skills and continue learning from experienced professionals.
            </p>
          </div>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Discuss Opportunities</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;