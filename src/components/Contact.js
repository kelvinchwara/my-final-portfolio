import React, { useState } from 'react';
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
    console.log('Form submitted:', formData, services);
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm always excited to discuss new opportunities, collaborate on projects, or simply 
            connect with fellow technology enthusiasts. Let's start a conversation!
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-form-container">
            <div className="form-header">
              <h3>Send a Message</h3>
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
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="webDevelopment"
                      checked={services.webDevelopment}
                      onChange={handleServiceChange}
                    />
                    <span>Web Development</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="networkSetup"
                      checked={services.networkSetup}
                      onChange={handleServiceChange}
                    />
                    <span>Network Setup & Configuration</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="consulting"
                      checked={services.consulting}
                      onChange={handleServiceChange}
                    />
                    <span>IT Consulting</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="internship"
                      checked={services.internship}
                      onChange={handleServiceChange}
                    />
                    <span>Internship Opportunities</span>
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

              <button type="submit" className="btn btn-primary">
                Send Message via Email
              </button>
            </form>
          </div>

          <div className="contact-info-container">
            <div className="info-header">
              <h3>Contact Information</h3>
              <p>Choose your preferred method to reach me</p>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="card-icon">📧</div>
                <div className="card-content">
                  <h4>Email</h4>
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
                  <h4>Phone</h4>
                  <p>For urgent matters</p>
                  <a href="tel:+254757450768" className="contact-link">
                    +254 757 450 768
                  </a>
                </div>
                <a href="tel:+254757450768" className="contact-action">
                  Call
                </a>
              </div>

              <div className="contact-card">
                <div className="card-icon">💬</div>
                <div className="card-content">
                  <h4>WhatsApp</h4>
                  <p>Quick messages and responses</p>
                  <a href="https://wa.me/254791639902" className="contact-link">
                    +254 791 639 902
                  </a>
                </div>
                <a href="https://wa.me/254791639902" className="contact-action">
                  Chat
                </a>
              </div>

              <div className="contact-card">
                <div className="card-icon">📍</div>
                <div className="card-content">
                  <h4>Location</h4>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;