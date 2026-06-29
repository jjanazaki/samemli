import React from 'react';
import { useParams } from 'react-router-dom';
import services from './data/servicesData';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = services.find((item) => item.id === serviceId);

  if (!service) {
    return (
      <main className="service-details-page" dir="rtl">
        <section className="service-not-found">
          <h1>Service Not Found</h1>
          <p>Sorry, the requested service could not be found.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="service-details-page" dir="rtl">
      <section className="service-hero">
        <div className="hero-left">
          <span className="service-badge">الخدمة المختارة</span>
          <h1>{service.title}</h1>
          <p>{service.shortDescription}</p>

          <div className="quick-info">
            <div className="info-card">
              <small>المدة</small>
              <h4>{service.delivery}</h4>
            </div>
            <div className="info-card">
              <small>المراجعات</small>
              <h4>{service.revisions}</h4>
            </div>
            <div className="info-card">
              <small>التقييم</small>
              <h4>{service.rating}</h4>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="primary-btn">ابدأ المشروع</button>
            <button className="secondary-btn">اطلب استشارة</button>
          </div>
        </div>

        <div className="hero-right">
          <img className="hero-image" src={service.heroImage || service.aboutImage} alt={service.title} />
        </div>
      </section>

      <section className="about-service">
        <div className="section-title">
          <h2>What's Included?</h2>
          <p>{service.about}</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>{service.about}</p>

            <div className="included-grid">
              {service.included.map((item, index) => (
                <div className="included-item" key={index}>
                  <span className="check-icon">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image">
            <img src={service.aboutImage} alt={service.title} />
          </div>
        </div>
      </section>

      <section className="technologies">
        <div className="section-title">
          <h2>Technologies We Use</h2>
          <p>
            We use trusted modern technologies to build fast,
            secure, scalable, and future-ready websites.
          </p>
        </div>

        <div className="tech-grid">
          {service.technologies.map((tech, index) => (
            <div className="tech-card" key={index}>
              <img src={tech.image} alt={tech.name} />
              <h3>{tech.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="packages-section">
        <div className="section-title">
          <h2>Choose Your Package</h2>
          <p>Select the package that best fits your project and budget.</p>
        </div>

        <div className="packages-grid">
          {service.packages.map((pkg) => (
            <div className="package-card" key={pkg.name}>
              <span className="package-tag">{pkg.name.toUpperCase()}</span>
              <h3>{pkg.name}</h3>
              <h2>{pkg.price}</h2>
              <p className="package-description">{pkg.pages}</p>
              <ul>
                <li>✔ Responsive Design</li>
                <li>✔ Fast Performance</li>
                <li>✔ Support Included</li>
              </ul>
              <button className="primary-btn">Choose Plan</button>
            </div>
          ))}
        </div>
      </section>

      <section className="addons-section">
        <div className="section-title">
          <h2>Optional Add-ons</h2>
          <p>Customize your project with additional services.</p>
        </div>

        <div className="addons-grid">
          <div className="addon-card">
            <h3>Extra Pages</h3>
            <span>$30 / page</span>
          </div>
          <div className="addon-card">
            <h3>Priority Delivery</h3>
            <span>$120</span>
          </div>
          <div className="addon-card">
            <h3>Content Upload</h3>
            <span>$80</span>
          </div>
        </div>
      </section>

      <section className="development-process">
        <div className="section-title">
          <h2>Our Development Process</h2>
          <p>
            A transparent workflow that keeps your project organized from
            start to finish.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <span>01</span>
            <h3>Project Discussion</h3>
            <p>Understanding your goals and requirements.</p>
          </div>
          <div className="process-card">
            <span>02</span>
            <h3>Planning</h3>
            <p>Creating the project roadmap and structure.</p>
          </div>
          <div className="process-card">
            <span>03</span>
            <h3>Design</h3>
            <p>Designing modern and engaging user interfaces.</p>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="section-title">
          <h2>Recent Projects</h2>
          <p>A few examples of websites we've recently designed and developed.</p>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-card">
            <img src="https://placehold.co/600x350" alt="" />
            <div className="portfolio-content">
              <h3>Restaurant Website</h3>
              <p>Food & Beverage</p>
              <button>View Project</button>
            </div>
          </div>
          <div className="portfolio-card">
            <img src="https://placehold.co/600x350" alt="" />
            <div className="portfolio-content">
              <h3>Real Estate Platform</h3>
              <p>Business</p>
              <button>View Project</button>
            </div>
          </div>
          <div className="portfolio-card">
            <img src="https://placehold.co/600x350" alt="" />
            <div className="portfolio-content">
              <h3>Online Store</h3>
              <p>E-Commerce</p>
              <button>View Project</button>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="section-title">
          <h2>Client Reviews</h2>
          <p>Here's what our clients say about working with us.</p>
        </div>

        <div className="reviews-grid">
          <div className="review-card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>Great communication and a polished final result.</p>
            <h4>— Ahmed Hassan</h4>
          </div>
          <div className="review-card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>Fast delivery and a design that feels premium.</p>
            <h4>— Sarah Mohamed</h4>
          </div>
          <div className="review-card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>Professional service and reliable ongoing support.</p>
            <h4>— Omar Ali</h4>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-grid">
          <div className="faq-card">
            <h3>How long does development take?</h3>
            <p>Usually between 2 and 4 weeks depending on the project.</p>
          </div>
          <div className="faq-card">
            <h3>Will my website work on mobile?</h3>
            <p>Yes. Every website we build is fully responsive.</p>
          </div>
          <div className="faq-card">
            <h3>Can I request changes?</h3>
            <p>Absolutely. Every package includes revisions.</p>
          </div>
        </div>
      </section>

      <section className="order-section">
        <div className="order-card">
          <h2>Ready to Start?</h2>
          <p>Begin your project today and let's create something amazing.</p>

          <div className="summary">
            <div>
              <span>Service</span>
              <strong>{service.title}</strong>
            </div>
            <div>
              <span>Estimated Delivery</span>
              <strong>{service.delivery}</strong>
            </div>
          </div>

          <button className="primary-btn">Start Your Project</button>
        </div>
      </section>

      <section className="contact-banner">
        <h2>Still Have Questions?</h2>
        <p>Our team is happy to help before you place your order.</p>
        <button className="secondary-btn">Contact Us</button>
      </section>

      <section className="related-services">
        <div className="section-title">
          <h2>You May Also Like</h2>
        </div>

        <div className="related-grid">
          <div className="related-card">
            <h3>Website Redesign</h3>
            <button>Learn More</button>
          </div>
          <div className="related-card">
            <h3>Website Maintenance</h3>
            <button>Learn More</button>
          </div>
          <div className="related-card">
            <h3>Landing Page Development</h3>
            <button>Learn More</button>
          </div>
          <div className="related-card">
            <h3>Performance Optimization</h3>
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetails;