import "./Home.css";

import heroLogo from "../../assets/logo-big.png";
import heroImage from "../../assets/hero-illustration.png";

import service1 from "../../assets/web-design.png";
import service2 from "../../assets/development.png";
import service3 from "../../assets/bug-fix.png";
import service4 from "../../assets/maintenance.png";

const Home = () => {
  return (
    <main className="home">

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-left">

          <h1>
            Build a Website That
            <span> Grows Your Business</span>
          </h1>

          <p>
            Whether you need a brand-new website, updates to an existing one,
            or ongoing maintenance, our team connects you with experienced
            developers ready to bring your vision to life.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Start Your Project
            </button>

            <button className="secondary-btn">
              Browse Services
            </button>

          </div>

          <div className="hero-features">

            <div>⚡ Fast Delivery</div>

            <div>🛡 Secure Payments</div>

            <div>💻 Professional Developers</div>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={heroLogo}
            alt="SAMEMLY Logo"
            className="floating-logo"
          />

          <img
            src={heroImage}
            alt="Website Illustration"
            className="hero-image"
          />

        </div>

      </section>

      {/* ================= TRUSTED ================= */}

      <section className="trusted">

        <h3>Trusted by Startups, Creators & Small Businesses</h3>

        <div className="trusted-logos">

          <span>LOGO</span>

          <span>LOGO</span>

          <span>LOGO</span>

          <span>LOGO</span>

          <span>LOGO</span>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="services-preview">

        <div className="section-title">

          <h2>Our Services</h2>

          <p>
            Everything you need to launch, improve, or maintain your website.
          </p>

        </div>

        <div className="services-grid">

          <div className="service-card">

            <img src={service1} alt="" />

            <h3>Website Design</h3>

            <p>
              Beautiful, responsive websites designed around your brand.
            </p>

            <span>Starting From $99</span>

            <button>Learn More</button>

          </div>

          <div className="service-card">

            <img src={service2} alt="" />

            <h3>Website Development</h3>

            <p>
              Custom-built websites using modern development technologies.
            </p>

            <span>Starting From $149</span>

            <button>Learn More</button>

          </div>

          <div className="service-card">

            <img src={service3} alt="" />

            <h3>Bug Fixes</h3>

            <p>
              Fix broken layouts, slow loading pages and coding issues.
            </p>

            <span>Starting From $29</span>

            <button>Learn More</button>

          </div>

          <div className="service-card">

            <img src={service4} alt="" />

            <h3>Maintenance</h3>

            <p>
              Monthly updates, backups, security checks and support.
            </p>

            <span>Starting From $19/mo</span>

            <button>Learn More</button>

          </div>

        </div>

      </section>

      {/* ================= WHY US ================= */}

      <section className="why-us">

        <div className="section-title">

          <h2>Why Choose SAMEMLY?</h2>

          <p>
            We make building a website simple, transparent and stress-free.
          </p>

        </div>

        <div className="why-grid">

          <div className="why-card">

            <h3>⚡ Fast Delivery</h3>

            <p>
              We respect deadlines and keep your project moving without delays.
            </p>

          </div>

          <div className="why-card">

            <h3>🛡 Secure Payments</h3>

            <p>
              Start with a deposit and pay the rest after reviewing the work.
            </p>

          </div>

          <div className="why-card">

            <h3>💻 Skilled Developers</h3>

            <p>
              Experienced web developers using modern technologies and best
              practices.
            </p>

          </div>

          <div className="why-card">

            <h3>💬 Clear Communication</h3>

            <p>
              Receive regular updates and stay informed during every stage.
            </p>

          </div>

        </div>

      </section>
            {/* ================= HOW IT WORKS ================= */}

      <section className="how-it-works">

        <div className="section-title">

          <h2>How It Works</h2>

          <p>
            Getting your website built has never been easier.
          </p>

        </div>

        <div className="steps">

          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Choose a Service</h3>
            <p>
              Browse our website services and select the one that fits your
              project.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Send Requirements</h3>
            <p>
              Tell us about your business, goals and upload any files you have.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Pay the Deposit</h3>
            <p>
              Secure your order and let our developers begin working.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Development</h3>
            <p>
              Your website is designed, coded and tested with regular progress
              updates.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">5</div>
            <h3>Review & Revisions</h3>
            <p>
              Review the project and request revisions until you're satisfied.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">6</div>
            <h3>Launch</h3>
            <p>
              Receive your completed website along with all necessary files.
            </p>
          </div>

        </div>

      </section>

      {/* ================= PORTFOLIO ================= */}

      <section className="portfolio">

        <div className="section-title">

          <h2>Recent Projects</h2>

          <p>
            A glimpse of websites we've helped create and improve.
          </p>

        </div>

        <div className="portfolio-grid">

          <div className="portfolio-card">

            <img
              src="https://placehold.co/600x400"
              alt="Project"
            />

            <div className="portfolio-content">

              <h3>Restaurant Website</h3>

              <span>Web Design</span>

              <p>
                Modern responsive website with online reservations and menu.
              </p>

            </div>

          </div>

          <div className="portfolio-card">

            <img
              src="https://placehold.co/600x400"
              alt="Project"
            />

            <div className="portfolio-content">

              <h3>Fashion Store</h3>

              <span>E-commerce</span>

              <p>
                Online clothing store with secure checkout and inventory system.
              </p>

            </div>

          </div>

          <div className="portfolio-card">

            <img
              src="https://placehold.co/600x400"
              alt="Project"
            />

            <div className="portfolio-content">

              <h3>Developer Portfolio</h3>

              <span>Personal Website</span>

              <p>
                Interactive portfolio showcasing projects and experience.
              </p>

            </div>

          </div>

        </div>

        <button className="portfolio-btn">
          View Full Portfolio
        </button>

      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="testimonials">

        <div className="section-title">

          <h2>What Our Clients Say</h2>

          <p>
            We're proud to help businesses build a stronger online presence.
          </p>

        </div>

        <div className="testimonial-grid">

          <div className="testimonial-card">

            <img
              src="https://placehold.co/100"
              alt="Client"
            />

            <h3>Ahmed Hassan</h3>

            <span>Small Business Owner</span>

            <div className="stars">
              ★★★★★
            </div>

            <p>
              The team delivered my website ahead of schedule. Everything was
              smooth and communication was excellent.
            </p>

          </div>

          <div className="testimonial-card">

            <img
              src="https://placehold.co/100"
              alt="Client"
            />

            <h3>Sarah Mohamed</h3>

            <span>Startup Founder</span>

            <div className="stars">
              ★★★★★
            </div>

            <p>
              They completely redesigned our old website and increased its
              speed dramatically. Highly recommended.
            </p>

          </div>

          <div className="testimonial-card">

            <img
              src="https://placehold.co/100"
              alt="Client"
            />

            <h3>Omar Ali</h3>

            <span>Freelancer</span>

            <div className="stars">
              ★★★★★
            </div>

            <p>
              Professional developers, beautiful design and excellent support
              after the project was finished.
            </p>

          </div>

        </div>

      </section>
            {/* ================= FAQ ================= */}

      <section className="faq">

        <div className="section-title">

          <h2>Frequently Asked Questions</h2>

          <p>
            Have questions? We've answered the ones we hear most often.
          </p>

        </div>

        <div className="faq-container">

          <div className="faq-item">
            <h3>How long does it take to build a website?</h3>
            <p>
              Most websites are completed within 3–14 days depending on the
              project's complexity and the requested features.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can you fix my existing website?</h3>
            <p>
              Absolutely! We can repair bugs, redesign pages, improve speed,
              optimize SEO, and add new features to your current website.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do I pay everything before work starts?</h3>
            <p>
              No. We usually require only a deposit to begin. The remaining
              balance is paid after you review and approve the project.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do you provide maintenance after delivery?</h3>
            <p>
              Yes! We offer ongoing maintenance plans including updates,
              backups, security monitoring, and technical support.
            </p>
          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="cta">

        <div className="cta-content">

          <h2>Ready to Build Your Next Website?</h2>

          <p>
            Whether you're starting from scratch or improving an existing
            website, we're here to help turn your ideas into reality.
          </p>

          <div className="cta-buttons">

            <button className="primary-btn">
              Start Your Project
            </button>

            <button className="secondary-btn">
              Contact Us
            </button>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-grid">

          {/* Company */}

          <div className="footer-column">

            <h3>SAMEMLY</h3>

            <p>
              Professional web development services helping startups,
              businesses and creators launch beautiful, fast and reliable
              websites.
            </p>

          </div>

          {/* Links */}

          <div className="footer-column">

            <h4>Quick Links</h4>

            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>

          </div>

          {/* Services */}

          <div className="footer-column">

            <h4>Services</h4>

            <a href="/">Website Design</a>
            <a href="/">Website Development</a>
            <a href="/">Bug Fixes</a>
            <a href="/">Maintenance</a>

          </div>

          {/* Contact */}

          <div className="footer-column">

            <h4>Contact</h4>

            <p>hello@samemly.com</p>

            <p>+20 100 000 0000</p>

            <div className="social-links">

              <a href="/">Facebook</a>

              <a href="/">Instagram</a>

              <a href="/">LinkedIn</a>

              <a href="/">X</a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 SAMEMLY. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
};

export default Home;