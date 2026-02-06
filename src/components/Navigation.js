import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', name: 'Home', icon: '🏠' },
    { path: '/about', name: 'About', icon: '👤' },
    { path: '/skills', name: 'Skills', icon: '💻' },
    { path: '/education', name: 'Education', icon: '🎓' },
    { path: '/experience', name: 'Experience', icon: '💼' },
    { path: '/projects', name: 'Projects', icon: '🚀' },
    { path: '/contact', name: 'Contact', icon: '📧' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    // ensure we always scroll to top when a nav link is clicked, even on same-route clicks
    try { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0, 0); }
    closeMobileMenu();
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="nav-brand" onClick={closeMobileMenu}>
            <div className="nav-logo">KS</div>
            <div className="nav-brand-text">
              <span className="brand-name">Kelvin Sagini</span>
              <span className="brand-tagline">IT Professional</span>
            </div>
          </Link>

          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={handleNavClick}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}></div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-logo">KS</div>
          <button className="mobile-close" onClick={closeMobileMenu} aria-label="Close menu">
            ✕
          </button>
        </div>
          <div className="mobile-menu-content">
          <div className="mobile-user-info">
            <h3>Kelvin Chwara</h3>
            <p>IT Student & Developer</p>
            <span className="mobile-status">⭐ Seeking Intern/Job Opportunities</span>
          </div>
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => { handleNavClick(); }}
                >
                  <span className="mobile-nav-icon">{item.icon}</span>
                  <span>{item.name}</span>
                  {location.pathname === item.path && <span className="active-indicator">✓</span>}
                </Link>
              </li>
            ))}
          </ul>
          {/* removed mobile CTA per design: contact reachable via Contact page link */}
          <div className="mobile-menu-footer">
            <p>🌐 Kisii, Kenya</p>
            <p>📧 kelvi20sagini@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;