import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="page projects-page">
      <div className="container">
        <header className="page-header">
          <span className="page-badge">Portfolio Showcase</span>
          <h1 className="page-title">Projects & Portfolio</h1>
          <p className="page-subtitle">A collection of my technical projects, academic work, and practical applications demonstrating my skills in web development, networking, and software engineering.</p>
        </header>

        <section className="featured">
          <h2>Featured Projects</h2>
          <div className="cards-grid">
            <article className="card">
              <h3>E‑Commerce Platform</h3>
              <p className="meta">Full-Stack Web Development — Completed</p>
              <p>A complete e-commerce solution built with Django and modern web technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.</p>
              <p><strong>Technologies:</strong> Python, Django, HTML5, CSS3, JavaScript, MySQL, Bootstrap</p>
              <div className="card-actions">
                <button type="button" className="btn btn-primary">View Demo</button>
                <button type="button" className="btn btn-secondary">Source Code</button>
              </div>
              <div className="video-inline">
                <video controls preload="metadata" src="/videos/ecommerce_demo.mp4">
                  Your browser does not support the video tag.
                </video>
                <p className="video-caption">E‑Commerce Platform — Short walkthrough</p>
              </div>
            </article>

            <article className="card">
              <h3>Task Management System</h3>
              <p className="meta">Web Application — Completed</p>
              <p>Collaborative task management application with real-time updates, user roles, and project tracking capabilities.</p>
              <p><strong>Technologies:</strong> Django, Bootstrap, SQLite, Ajax, JavaScript</p>
              <div className="card-actions">
                <button type="button" className="btn btn-primary">View Demo</button>
                <button type="button" className="btn btn-secondary">Source Code</button>
              </div>
              <div className="video-inline">
                <video controls preload="metadata" src="/videos/task_demo.mp4">
                  Your browser does not support the video tag.
                </video>
                <p className="video-caption">Task Management System — Short walkthrough</p>
              </div>
            </article>

            <article className="card">
              <h3>Portfolio Website</h3>
              <p className="meta">Web Development — Completed</p>
              <p>Responsive personal portfolio website showcasing web development skills, projects, and professional experience with modern design and smooth navigation.</p>
              <p><strong>Technologies:</strong> HTML5, CSS3, JavaScript, React</p>
              <div className="card-actions">
                <button type="button" className="btn btn-primary">View Demo</button>
                <button type="button" className="btn btn-secondary">Source Code</button>
              </div>
            </article>

            <article className="card">
              <h3>Network Configuration Lab</h3>
              <p className="meta">Networking Project — Completed</p>
              <p>Comprehensive network design and configuration project using Cisco Packet Tracer. Implemented VLANs, routing protocols, and security practices.</p>
              <p><strong>Technologies:</strong> Cisco Packet Tracer, OSPF, EIGRP, VLAN</p>
              <div className="card-actions">
                <button type="button" className="btn btn-primary">View Demo</button>
                <button type="button" className="btn btn-secondary">Source Code</button>
              </div>
              <div className="video-inline">
                <video controls preload="metadata" src="/videos/network_demo.mp4">
                  Your browser does not support the video tag.
                </video>
                <p className="video-caption">Network Configuration Lab — Demo</p>
              </div>
            </article>
          </div>
        </section>

        <section className="video-showcase">
          <h2>Video Showcase</h2>
          <p className="lead">Short demos and walkthroughs of projects.</p>
          <div className="video-grid">
            <div className="video-card">
              <video controls preload="metadata" src="/videos/ecommerce_demo.mp4">
                Your browser does not support the video tag.
              </video>
              <p className="video-caption">E‑Commerce Platform — Demo</p>
            </div>

            <div className="video-card">
              <video controls preload="metadata" src="/videos/task_demo.mp4">
                Your browser does not support the video tag.
              </video>
              <p className="video-caption">Task Management System — Demo</p>
            </div>
          </div>
        </section>

        <section className="other-projects">
          <h2>Academic & Personal Projects</h2>
          <div className="cards-grid">
            <article className="card small">
              <h4>Student Information System (2023)</h4>
              <p>Database-driven system for managing student records. Technologies: MySQL, PHP.</p>
              <div className="video-inline">
                <video controls preload="metadata" src="/videos/sis_demo.mp4">Your browser does not support the video tag.</video>
                <p className="video-caption">Student Information System — Demo</p>
              </div>
            </article>
            <article className="card small">
              <h4>Inventory Management System (2023)</h4>
              <p>Java desktop application for inventory tracking. Technologies: Java, Swing, SQLite.</p>
              <div className="video-inline">
                <video controls preload="metadata" src="/videos/inventory_demo.mp4">Your browser does not support the video tag.</video>
                <p className="video-caption">Inventory Management System — Demo</p>
              </div>
            </article>
            <article className="card small">
              <h4>Weather Monitoring IoT System (2024)</h4>
              <p>IoT-based weather monitoring with dashboard. Technologies: Arduino, Python, Chart.js.</p>
              <div className="video-inline">
                <video controls preload="metadata" src="/videos/weather_demo.mp4">Your browser does not support the video tag.</video>
                <p className="video-caption">Weather Monitoring IoT System — Demo</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
