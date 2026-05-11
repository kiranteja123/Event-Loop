import React, { useState } from "react";
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <div className="ev_header_block">
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <img src={logo} alt="Logo" />
              <span className="logoName">Event Loop</span>
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li className="dropdown">
                <span className="dropbtn">Tech stack</span>
                <div className="dropdown-content container">
                  <div className="row dropdown-content-inner">
                    <div className="col-sm-3">
                      <Link to="/javascript">Java Script</Link>
                      <Link to="/angular">Angular</Link>
                      <Link to="/react">React</Link>
                      <Link to="/vue">Vue</Link>
                    </div>
                    <div className="col-sm-3">
                      <Link to="/commingsoon">Product 1</Link>
                      <Link to="/commingsoon">Product 2</Link>
                      <Link to="/commingsoon">Product 3</Link>
                      <Link to="/commingsoon">Product 4</Link>
                    </div>
                    <div className="col-sm-3">
                      <Link to="/commingsoon">Product 1</Link>
                      <Link to="/commingsoon">Product 2</Link>
                      <Link to="/commingsoon">Product 3</Link>
                      <Link to="/commingsoon">Product 4</Link>
                    </div>
                    <div className="col-sm-3">
                      <Link to="/commingsoon">Product 1</Link>
                      <Link to="/commingsoon">Product 2</Link>
                      <Link to="/commingsoon">Product 3</Link>
                      <Link to="/commingsoon">Product 4</Link>
                    </div>
                  </div>
                </div>
              </li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </div>
      </div>
  );
}

export default Navbar;
