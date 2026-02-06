import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    services: [],
    message: '',
    contactMethod: 'email',
  });

  const [services, setServices] = useState({
    webDevelopment: false,
    networkSetup: false,
    consulting: false,
    internship: false,
    systemAdministration: false,
    databaseManagement: false,
    technicalSupport: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (e) => {
    const { name, checked } = e.target;
    setServices(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, subject, message, contactMethod } = formData;

    // collect selected services from the services state
    const selectedServices = Object.entries(services)
      .filter(([, checked]) => checked)
      .map(([key]) => key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()));

    const body = `Name: ${fullName || 'N/A'}\nEmail: ${email || 'N/A'}\nSubject: ${subject || 'General Inquiry'}\nServices: ${selectedServices.length ? selectedServices.join(', ') : 'None'}\n\nMessage:\n${message || ''}`;

    if (contactMethod === 'whatsapp') {
      // Open WhatsApp chat with pre-filled message
      const phone = '254791639902';
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(body)}`;
      window.open(url, '_blank');
      alert('Opening WhatsApp to send your message...');
    } else {
      // Default to email
      const to = 'kelvi20sagini@gmail.com';
      const mailto = `mailto:${to}?subject=${encodeURIComponent(subject || 'Message from portfolio')}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      alert('Opening your email client to send the message...');
    }

    // Reset form and checkbox states
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      services: [],
      message: '',
      contactMethod: 'email',
    });

    setServices({
      webDevelopment: false,
      networkSetup: false,
      consulting: false,
      internship: false,
      systemAdministration: false,
      databaseManagement: false,
      technicalSupport: false,
    });
  };

  return (
    <div className="page contact-page">
      <div className="container">
        <div className="page-header">
          <span className="page-badge">Let's Connect</span>
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            I'm always excited to discuss new opportunities, collaborate on projects, or simply 
            connect with fellow technology enthusiasts. Let's start a conversation!
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-form-container">
            <div className="form-header">
              <h2>Send a Message</h2>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Your full name"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Services of Interest (Select all that apply)</label>
                <div className="services-checkbox">
                  <label className="service-card">
                    <input
                      type="checkbox"
                      name="webDevelopment"
                      checked={services.webDevelopment}
                      onChange={handleServiceChange}
                    />
                    <div className="service-content">
                      <strong>Web Development</strong>
                      <small>Web apps, responsive sites, full-stack work</small>
                    </div>
                  </label>

                  <label className="service-card">
                    <input
                      type="checkbox"
                      name="networkSetup"
                      checked={services.networkSetup}
                      onChange={handleServiceChange}
                    />
                    <div className="service-content">
                      <strong>Network Setup & Configuration</strong>
                      <small>LAN/WAN, VLANs, routing, troubleshooting</small>
                    </div>
                  </label>

                  <label className="service-card">
                    <input
                      type="checkbox"
                      name="consulting"
                      checked={services.consulting}
                      onChange={handleServiceChange}
                    />
                    <div className="service-content">
                      <strong>IT Consulting</strong>
                      <small>Process improvement and systems advice</small>
                    </div>
                  </label>

                  <label className="service-card">
                    <input
                      type="checkbox"
                      name="internship"
                      checked={services.internship}
                      onChange={handleServiceChange}
                    />
                    <div className="service-content">
                      <strong>Internship Opportunities</strong>
                      <small>Industrial attachments and student placements</small>
                    </div>
                  </label>

                  <label className="service-card">
                    <input
                      type="checkbox"
                      name="systemAdministration"
                      checked={services.systemAdministration}
                      onChange={handleServiceChange}
                    />
                    <div className="service-content">
                      <strong>System Administration</strong>
                      <small>Server management, OS, backups, automation</small>
                    </div>
                  </label>

                  <label className="service-card">
                    <input
                      type="checkbox"
                      name="databaseManagement"
                      checked={services.databaseManagement}
                      onChange={handleServiceChange}
                    />
                    <div className="service-content">
                      <strong>Database Management</strong>
                      <small>Schema design, queries, backups, MySQL</small>
                    </div>
                  </label>

                  <label className="service-card">
                    <input
                      type="checkbox"
                      name="technicalSupport"
                      checked={services.technicalSupport}
                      onChange={handleServiceChange}
                    />
                    <div className="service-content">
                      <strong>Technical Support</strong>
                      <small>Help desk, troubleshooting, user assistance</small>
                    </div>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me more about your project, opportunity, or question..."
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div className="form-group">
                <label>Preferred Contact Method</label>
                <div className="radio-options">
                  <label className="radio-item">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={formData.contactMethod === 'email'}
                      onChange={handleInputChange}
                    />
                    <span>Email</span>
                  </label>
                  <label className="radio-item">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="whatsapp"
                      checked={formData.contactMethod === 'whatsapp'}
                      onChange={handleInputChange}
                    />
                    <span>WhatsApp</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-lg">
                {formData.contactMethod === 'whatsapp' ? 'Send via WhatsApp' : 'Send Message via Email'}
              </button>
            </form>
          </div>

          <div className="contact-info-container">
            <div className="info-header">
              <h2>Contact Information</h2>
              <p>Choose your preferred method to reach me</p>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="card-icon">📧</div>
                <div className="card-content">
                  <h3>Email</h3>
                  <p>Best for detailed inquiries</p>
                  <a href="mailto:kelvi20sagini@gmail.com" className="contact-link">
                    kelvi20sagini@gmail.com
                  </a>
                </div>
                <a href="mailto:kelvi20sagini@gmail.com" className="contact-action">
                  Contact
                </a>
              </div>

              <div className="contact-card">
                <div className="card-icon">📱</div>
                <div className="card-content">
                  <h3>Phone</h3>
                  <p>For urgent matters</p>
                  <a href="tel:+254762132827" className="contact-link">
                    +254 762 132 827
                  </a>
                </div>
                <a href="tel:+254762132827" className="contact-action">
                  Call
                </a>
              </div>

              <div className="contact-card">
                <div className="card-icon">💬</div>
                <div className="card-content">
                  <h3>WhatsApp</h3>
                  <p>Send details via WhatsApp</p>
                  <a href="https://wa.me/254791639902" className="contact-link">
                    +254 791 639 902
                  </a>
                </div>
                <a href="https://wa.me/254791639902" className="contact-action">
                  Chat on WhatsApp
                </a>
              </div>

              <div className="contact-card">
                <div className="card-icon">📍</div>
                <div className="card-content">
                  <h3>Location</h3>
                  <p>Available for local meetings</p>
                  <span className="contact-link">
                    Kisii, Kenya
                  </span>
                </div>
              </div>
            </div>

            <div className="availability-card">
              <div className="availability-status">
                <span className="status-dot"></span>
                <span className="status-text">Available</span>
              </div>
              <div className="availability-details">
                <div className="detail-item">
                  <span className="detail-label">Open to new opportunities</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Response Time: Within 24 hours</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Time Zone: EAT (UTC+3)</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Best Time to Call: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="current-status">
                <span className="status-badge">Current Status: Seeking Internship</span>
              </div>
            </div>

            <div className="quick-links">
              <Link to="/" className="quick-link">
                <span>🏠</span>
                <span>Back to Home</span>
              </Link>
              <Link to="/projects" className="quick-link">
                <span>🚀</span>
                <span>View My Projects</span>
              </Link>
              <a href="/KELVIN.pdf" download className="quick-link">
                <span>📄</span>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;