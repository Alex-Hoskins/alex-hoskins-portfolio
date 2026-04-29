import React from 'react';
import About from './About';
import ProjectList from './ProjectsList';
import Contact from './Contact';
import './Home.css';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;
  const navHeight = 70;
  const top = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
  window.scrollTo({ top, behavior: 'smooth' });
};

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-grid">
      <div className="hero-text">
        <span className="hero-availability">
          <span className="hero-availability-dot" />
          Currently building Leveo
        </span>
        <p className="hero-eyebrow">Hi, I'm</p>
        <h1 className="hero-name">Alex Hoskins</h1>
        <p className="hero-tagline">
          Senior Solutions Engineer at Cordial. Founder of Leveo — your
          AI-powered job search command center.
        </p>
        <p className="hero-subtext">
          I build full-stack software for enterprise customers and ship side
          projects end-to-end. What I care about most is the seam between solid
          engineering and how people actually use what you make.
        </p>
        <div className="hero-ctas">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
          </button>
          <a
            className="hero-cta-link"
            href="/Alex_Hoskins_Resume.pdf"
            download="Alex_Hoskins_Resume.pdf"
          >
            Download Resume
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-photo-wrap" aria-hidden="true">
        <div className="hero-photo">
          <img src="/profile_pic.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
);

const Home = () => (
  <div className="home-container">
    <Hero />
    <section id="about">
      <About />
    </section>
    <section id="projects">
      <ProjectList />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>
);

export default Home;
