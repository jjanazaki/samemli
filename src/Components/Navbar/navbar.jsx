import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
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
    <nav className={scrolled ? "navbar navbar-scroll" : "navbar"} dir="rtl">

      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="ساميملي"
          />
        </Link>
      </div>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>

        <Link to="/">الرئيسية</Link>
        <Link to="/services">الخدمات</Link>
        <Link to="/portfolio">أعمالنا</Link>
        <Link to="/about">من نحن</Link>
        <Link to="/contact">اتصل بنا</Link>

      </div>

      <div className="nav-buttons">

        <Link className="login-btn" to="/login">
          تسجيل الدخول
        </Link>

        <Link className="start-btn" to="/signup">
          ابدأ الآن
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
