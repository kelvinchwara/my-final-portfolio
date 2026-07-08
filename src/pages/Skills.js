import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Web Development',
      icon: '💻',
      summary: 'Built responsive web experiences with modern front-end and back-end technologies.',
      skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Django', 'REST APIs', 'Responsive UI'],
    },
    {
      title: 'Programming & Data',
      icon: '🧠',
      summary: 'Developed strong programming logic, problem solving and practical data handling skills.',
      skills: ['Python', 'SQL', 'Database Integration', 'Data Structures & Algorithms', 'Software Engineering', 'Research & Reporting'],
    },
    {
      title: 'Networking & Systems Support',
      icon: '🔗',
      summary: 'Gained practical experience in infrastructure support, hardware troubleshooting and system maintenance.',
      skills: ['Network Configuration', 'Operating Systems', 'CCTV Setup', 'Printer & Peripheral Support', 'Hardware Troubleshooting', 'Software Installation'],
    },
    {
      title: 'Digital Growth & Communication',
      icon: '📈',
      summary: 'Applied digital marketing and online business strategies for modern communication and growth.',
      skills: ['Digital Marketing', 'Social Media Marketing', 'Online Business Strategies', 'Networking Basics', 'Communication Skills'],
    },
    {
      title: 'Professional Strengths',
      icon: '🤝',
      summary: 'Strengthened through internships, training and collaborative project work.',
      skills: ['Problem Solving', 'Team Collaboration', 'Leadership', 'Adaptability', 'Critical Thinking', 'Creativity', 'Management Skills'],
    },
    {
      title: 'Development Workflow',
      icon: '⚙️',
      summary: 'Worked with reliable tools that support coding, testing and deployment.',
      skills: ['Git & GitHub', 'Version Control', 'Deployment Strategies', 'Postman', 'VS Code', 'API Testing'],
    },
  ];

  const portfolioHighlights = [
    {
      title: 'ICT Authority Entrepreneurship Training',
      type: 'Training Certificate',
      description:
        'Developed practical digital skills and a stronger understanding of technology-driven entrepreneurship, innovation and professional growth.',
      skills: ['Digital Skills', 'Entrepreneurship', 'Innovation', 'Business Growth'],
    },
    {
      title: 'Boot Camp Certificate',
      type: 'Intensive Program',
      description:
        'Strengthened hands-on coding ability through real-world practice, collaborative development and rapid knowledge building.',
      skills: ['Hands-on Coding', 'Project Learning', 'Modern Development', 'Fast Skill Growth'],
    },
    {
      title: 'Professional Recommendation',
      type: 'Reference Letter',
      description:
        'Highlights dependable professionalism, leadership potential, strong work ethic and a collaborative approach to technical work.',
      skills: ['Professionalism', 'Leadership', 'Reliability', 'Teamwork'],
    },
  ];

  return (
    <div className="page skills-page">
      <div className="container">
        <div className="page-header">
          <span className="page-badge">Technical Expertise</span>
          <h1 className="page-title">Skills & Technologies</h1>
          <p className="page-subtitle">
            A refined view of the technical and professional abilities developed through university study,
            internships, training and the attached certification documents.
          </p>
        </div>

        <section className="skills-overview">
          <div className="overview-card">
            <h2>Skills gained from my portfolio documents</h2>
            <p>
              The attached certificates and reference material reflect a strong blend of web development,
              networking support, digital marketing, entrepreneurship and professional teamwork.
            </p>
          </div>
        </section>

        <section className="skill-groups">
          {skillGroups.map((group, index) => (
            <article key={group.title} className="skill-group-card" style={{ '--delay': `${0.05 + index * 0.08}s` }}>
              <div className="group-heading">
                <span className="group-icon">{group.icon}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.summary}</p>
                </div>
              </div>
              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="training-portfolio">
          <div className="portfolio-header">
            <h2>Document-based highlights</h2>
            <p>These training documents and professional references reinforce the practical capabilities shown above.</p>
          </div>

          <div className="portfolio-grid">
            {portfolioHighlights.map((item) => (
              <article key={item.title} className="portfolio-card">
                <div className="portfolio-type">{item.type}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="skill-pills">
                  {item.skills.map((skill) => (
                    <span key={skill} className="skill-pill subtle">{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;