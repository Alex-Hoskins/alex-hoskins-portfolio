import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
  const title = '<Alex-Hoskins/>';

  return (
    <nav className="navigation">
      <div className="nav-box nav-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/projects">Projects</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </div>

      <div className="nav-title">
        <p>{title}</p>
      </div>

      <div className="nav-box nav-icons">
        <a href="https://www.linkedin.com/in/alex-hoskins" target="_blank" rel="noopener noreferrer">
          <img src="https://www.pinclipart.com/picdir/big/574-5743993_linkedin-icon-white-png-clipart.png" width="25" alt="LinkedIn" />
        </a>
        <a href="https://www.github.com/Alex-Hoskins" target="_blank" rel="noopener noreferrer">
          <img src="https://www.pinclipart.com/picdir/big/158-1581614_github-clipart.png" width="25" alt="GitHub" />
        </a>
        <a href="mailto:alexrhoskins@gmail.com">
          <img src="https://www.pinclipart.com/picdir/big/341-3417070_00971-56-9357390-in-dringenden-notfllen-00971-50.png" width="25" alt="Email" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;