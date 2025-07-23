import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Header() {
  return (
    <header className="">
      <nav className="navbar navbar-expand-lg navbar-light container p-0">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} className="img-fluid" alt="logo"  />
        </Link>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/clients">Clients</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/careers">Careers</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
