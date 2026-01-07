import React from 'react';
import './Projects.css';

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      category: 'Full-Stack Web Development',
      title: 'E-Commerce Platform',
      status: 'Completed',
      description: 'A complete e-commerce solution built with Django and modern web technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
      duration: 'Ongoing',
      role: 'Full-Stack Developer',
      features: [
        'User registration and authentication',
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'Payment gateway integration',
        'Admin dashboard for inventory management',
        'Responsive design for all devices',
      ],
      challenges: 'Implementing secure payment processing and optimizing database queries for better performance.',
      outcome: 'Successfully delivered a fully functional e-commerce platform with 99% uptime and fast loading speeds.',
      technologies: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Bootstrap'],
    },
    {
      id: 2,
      category: 'Web Application',
      title: 'Task Management System',
      status: 'Completed',
      description: 'A collaborative task management application with real-time updates, user roles, and project tracking capabilities. Built for team collaboration and productivity enhancement.',
      duration: '2 weeks',
      role: 'Full-Stack Developer',
      features: [
        'Real-time task updates',
        'User role management (Admin, Manager, Employee)',
        'Project categorization and tracking',
        'Due date reminders and notifications',
        'Progress visualization with charts',
        'Team collaboration tools',
      ],
      challenges: 'Implementing real-time updates without page refresh and managing complex user permissions.',
      outcome: 'Created an efficient task management system that improved team productivity by 40%.',
      technologies: ['Django', 'Bootstrap', 'SQLite', 'Ajax', 'JavaScript', 'CSS3'],
    },
    {
      id: 3,
      category: 'Networking Project',
      title: 'Network Configuration Lab',
      status: 'Completed',
      description: 'Comprehensive network design and configuration project using Cisco Packet Tracer. Implemented various network topologies with proper subnetting and routing protocols.',
      duration: '4 weeks',
      role: 'Network Designer',
      features: [
        'Multi-site network topology design',
        'VLAN configuration and inter-VLAN routing',
        'Dynamic routing protocols (OSPF, EIGRP)',
        'Network security implementation',
        'Subnetting and IP addressing schemes',
        'Network troubleshooting and optimization',
      ],
      challenges: 'Designing scalable network architecture and implementing redundancy for high availability.',
      outcome: 'Successfully designed and configured enterprise-grade network infrastructure with 99.9% availability.',
      technologies: ['Cisco Packet Tracer', 'OSPF', 'EIGRP', 'VLAN', 'Subnetting', 'Network Security'],
    },
  ];

  const academicProjects = [
    {
      id: 1,
      title: 'Student Information System',
      year: '2023',
      status: 'Completed',
      description: 'Database-driven system for managing student records, grades, and academic information.',
      technologies: ['MySQL', 'PHP', 'HTML', 'CSS'],
    },
    {
      id: 2,
      title: 'Inventory Management System',
      year: '2023',
      status: 'Completed',
      description: 'Java-based desktop application for tracking inventory in small businesses.',
      technologies: ['Java', 'Swing', 'SQLite'],
    },
    {
      id: 3,
      title: 'Weather Monitoring IoT System',
      year: '2024',
      status: 'In Progress',
      description: 'IoT-based weather monitoring system with data visualization dashboard.',
      technologies: ['Arduino', 'Python', 'REST API', 'Chart.js'],
    },
    {
      id: 4,
      title: 'Mobile App UI/UX Design',
      year: '2024',
      status: 'Completed',
      description: 'Complete UI/UX design for a mobile productivity application.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping'],
    },
  ];

  const personalProjects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'Responsive portfolio website showcasing my skills and projects.',
      impact: 'Increased professional visibility and job opportunities',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    },
    {
      id: 2,
      title: 'Local Business Website',
      description: 'Professional website for a local business with booking system.',
      impact: 'Helped local business increase online presence by 200%',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    },
    {
      id: 3,
      title: 'Community IT Support Initiative',
      description: 'Volunteer project providing IT support to community members.',
      impact: 'Assisted 50+ community members with digital literacy',
      technologies: ['Various', 'Documentation', 'Training'],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portfolio Showcase</span>
          <h2 className="section-title">Projects & Portfolio</h2>
          <p className="section-subtitle">
            A collection of my technical projects, academic work, and practical applications 
            demonstrating my skills in web development, networking, and software engineering.
          </p>
        </div>

        <div className="featured-section">
          <h3 className="section-heading">Featured Projects</h3>
          <p className="section-intro">Comprehensive projects showcasing full development lifecycle</p>

          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card featured">
                <div className="card-header">
                  <div className="project-category">{project.category}</div>
                  <span className={`status-badge ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>
                <div className="card-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-meta">
                    <div className="meta-item">
                      <span className="meta-icon">⏱️</span>
                      <span>{project.duration}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">👤</span>
                      <span>{project.role}</span>
                    </div>
                  </div>

                  <div className="project-section">
                    <h4>Key Features</h4>
                    <ul>
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-section">
                    <h4>Challenges</h4>
                    <p>{project.challenges}</p>
                  </div>

                  <div className="project-section">
                    <h4>Outcome</h4>
                    <p>{project.outcome}</p>
                  </div>

                  <div className="tech-stack">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-actions">
                    <a href="#" className="btn btn-primary">View Demo</a>
                    <a href="#" className="btn btn-secondary">Source Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="academic-section">
          <h3 className="section-heading">Academic Projects</h3>
          <p className="section-intro">University coursework and research projects</p>

          <div className="academic-grid">
            {academicProjects.map((project) => (
              <div key={project.id} className="project-card academic">
                <div className="card-header">
                  <span className="year-badge">{project.year}</span>
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <div className="card-body">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-stack">
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag mini">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="personal-section">
          <h3 className="section-heading">Personal & Community Projects</h3>
          <p className="section-intro">Independent projects and community contributions</p>

          <div className="personal-grid">
            {personalProjects.map((project) => (
              <div key={project.id} className="project-card personal">
                <div className="card-body">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-impact">
                    <span className="impact-label">Impact:</span>
                    <span>{project.impact}</span>
                  </div>
                  <div className="tech-stack">
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag mini">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <a href="#" className="btn-link">View Project →</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="project-stats">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">8+</div>
              <div className="stat-label">Web Applications</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Network Configurations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">People Helped</div>
            </div>
          </div>
        </div>

        <div className="projects-cta">
          <div className="cta-content">
            <h3>Interested in My Work?</h3>
            <p>
              I'm always working on new projects and looking for opportunities to collaborate. 
              Whether you have a project idea or want to discuss potential opportunities, I'd love to hear from you.
            </p>
          </div>
          <div className="cta-buttons">
            <a href="#" className="btn btn-secondary">View GitHub Profile</a>
            <a href="#contact" className="btn btn-primary">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;