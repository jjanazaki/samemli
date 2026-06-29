import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../../assets/nav-logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar navbar-scroll" : "navbar"}>

      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="SAMEMLY"
          />
        </Link>
      </div>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>

        <Link to="/">Home</Link>

        <Link to="/services">Services</Link>

        <Link to="/portfolio">Portfolio</Link>

        <Link to="/about">About Us</Link>

        <Link to="/contact">Contact</Link>

      </div>

      <div className="nav-buttons">

        <Link className="login-btn" to="/login">
          Log In
        </Link>

        <Link className="start-btn" to="/signup">
          Get Started
        </Link>

      </div>

      <div
        className={menuOpen ? "hamburger active" : "hamburger"}
        onClick={() => setMenuOpen(!menuOpen)}
      >

        <span></span>
        <span></span>
        <span></span>

      </div>

    </nav>
  );
};

export default Navbar;