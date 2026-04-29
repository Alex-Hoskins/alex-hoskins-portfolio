import React, { useState, useEffect } from 'react';
import './Navigation.css';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;
  const navHeight = 70;
  const top = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
  window.scrollTo({ top, behavior: 'smooth' });
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const offset = 120;
      let current = '';
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    scrollToSection(id);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <button
          type="button"
          className="nav-logo"
          onClick={handleLogoClick}
          aria-label="Back to top"
        >
          <span className="text-gradient">Alex Hoskins</span>
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {sections.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              onClick={() => handleNavClick(id)}
            >
              {label}
            </button>
          ))}
          <a
            className="nav-link nav-link-resume"
            href="/Alex_Hoskins_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="nav-social">
          <a
            href="https://github.com/Alex-Hoskins"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" className="social-icon">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/alex-hoskins"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" className="social-icon">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>

        <button
          type="button"
          className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
